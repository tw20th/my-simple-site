// src/app/components/Header.tsx
"use client"; // クライアントコンポーネントとして指定

import React from 'react';
import Link from 'next/link';
import { useTheme } from '../../../context/ThemeContext';
import './Header.css';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-logo">My Logo</div>
      <nav className="header-nav">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </header>
  );
}
