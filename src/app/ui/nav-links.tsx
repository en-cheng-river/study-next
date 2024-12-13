'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function NavLinks() {
  const pathname = usePathname();
  console.log('pathname', pathname);
  return (
    <nav style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>

      <Link
        className={`link ${pathname === '/about' ? 'active' : ''}`}
        href="/about"
      >
        About
      </Link>
      <Link
        className={`link ${pathname === '/concatUs' ? 'active' : ''}`}
        href="/concatUs"
      >
        concatUs
      </Link>
      <Link
        className={`link ${pathname === '/dashboard' ? 'active' : ''}`}
        href="/dashboard"
      >
        dashboard
      </Link>

      <Link
        className={`link ${pathname === '/settings' ? 'active' : ''}`}
        href="/settings"
      >
        settings
      </Link>
      <Link
        className={`link ${pathname === '/feed' ? 'active' : ''}`}
        href="/feed"
      >
        feed
      </Link>
      <Link
        className={`link ${pathname === '/data1' ? 'active' : ''}`}
        href="/data1"
      >
        data1
      </Link>
      <Link
        className={`link ${pathname === '/data2' ? 'active' : ''}`}
        href="/data2"
      >
        data2
      </Link>
      <Link
        className={`link ${pathname === '/ssr' ? 'active' : ''}`}
        href="/ssr"
      >
        ssr
      </Link>
    </nav>
  );
}
