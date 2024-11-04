// app/components/Header.tsx
import React from 'react';
import Link from 'next/link';
import './Header.css'; // ヘッダー用のCSSを作成する場合

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">My Logo</div>
      <nav className="header-nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
