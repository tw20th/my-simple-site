// src/app/page.tsx
import React from 'react';

export default function HomePage() {
  return (
    <main style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to My Next.js App</h1>
      <p>これはNext.jsで作成したホームページです。</p>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        詳しく見る
      </button>
    </main>
  );
}
