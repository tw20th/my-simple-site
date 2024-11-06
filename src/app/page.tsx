// page.tsx
import React from "react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomoki&apos;s Blog - Home</title>
        <meta
          name="description"
          content="Tomokiのブログへようこそ。自然の美しさや日々の気づきをお楽しみください。"
        />
      </Head>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="rounded-lg shadow-lg"
            src="/nature-image.jpg" // 使用する自然画像ファイルを指定
            alt="自然の画像"
            width={600}
            height={400}
            priority
          />
          <h1 className="text-4xl font-bold text-primary">Tomoki&apos;s Blogへようこそ</h1>
          <p className="text-lg leading-relaxed text-secondary">
            自然と日々の小さな喜びを探求するブログです。ここでは、私の体験や自然にまつわる話題をお届けします。
          </p>
        </main>
      </div>
    </>
  );
}
