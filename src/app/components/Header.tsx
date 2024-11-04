// app/components/Header.tsx
import React from 'react';
import Link from 'next/link';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">My Logo</div>
      <nav className="header-nav">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}
