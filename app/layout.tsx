import type { Metadata } from 'next';
import { Noto_Sans_SC } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '于增 - 专业英语讲师 | 海归博士 | 雅思8分专家',
  description: '于增，讲师，海归博士，中级经济师。雅思总分8分，教学十余年，时长一万小时以上。帮助学生获得满分阅读、7分写作，助力申请斯坦福、MIT、英国G5等世界顶尖名校。',
  keywords: '于增,雅思讲师,英语培训,留学考试,雅思阅读,雅思写作,英语教学,海归博士',
  authors: [{ name: '于增' }],
  openGraph: {
    title: '于增 - 专业英语讲师',
    description: '雅思8分专家，教学十余年，助力学生申请世界顶尖名校',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: '于增 - 专业英语讲师',
    description: '雅思8分专家，教学十余年，助力学生申请世界顶尖名校',
  },
  robots: {
    index: true,
    follow: true,
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
