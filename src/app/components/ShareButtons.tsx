// components/ShareButtons.tsx
import React from "react";

export default function ShareButtons() {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="flex gap-4 mt-6">
      <a
        href={`https://twitter.com/intent/tweet?url=${currentUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Twitterでシェア
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white py-2 px-4 rounded"
      >
        Facebookでシェア
      </a>
    </div>
  );
}
