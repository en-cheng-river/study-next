import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '无糖浏览器，年底总结 X mbti 活动',
  description: '无糖浏览器，年底总结 X mbti 活动',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
