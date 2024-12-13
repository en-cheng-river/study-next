import type { Metadata } from 'next';
import { NavLinks } from '@/app/ui/nav-links';
import './globals.css';

export const metadata: Metadata = {
  title: '测试一下',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        {children}
      </body>
    </html>
  );
}