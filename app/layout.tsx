import type { Metadata } from 'next';
import { Noto_Sans_SC } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: '于增 - 专业英语讲师 | 海归博士 | 雅思8分专家',
    template: '%s | Fisher老师'
  },
  description: '于增，专业英语讲师，海归博士，中级经济师。雅思总分8分，阅读满分。教学十余年，时长一万小时以上。帮助学生获得满分阅读、7分写作，助力申请斯坦福、MIT、英国G5等世界顶尖名校。',
  keywords: ['于增', '雅思讲师', '英语培训', '留学考试', '雅思阅读', '雅思写作', '英语教学', '海归博士', '托福培训', 'GRE培训', '商务英语'],
  authors: [{ name: '于增', url: 'https://yuzeng.com' }],
  creator: '于增',
  publisher: 'Fisher老师',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://yuzeng.com',
    title: '于增 - 专业英语讲师 | 海归博士 | 雅思8分专家',
    description: '雅思8分专家，教学十余年，助力学生申请世界顶尖名校',
    siteName: 'Fisher老师个人主页',
  },
  twitter: {
    card: 'summary_large_image',
    title: '于增 - 专业英语讲师',
    description: '雅思8分专家，教学十余年',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={`${notoSans.variable} font-sans antialiased bg-secondary-50`}>
        {children}
      </body>
    </html>
  );
}
