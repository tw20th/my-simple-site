// src/app/page.tsx
import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomoki&apos;s Blogsite - Home</title>
        <meta
          name="description"
          content="Welcome to Tomoki's Blogsite. Discover interesting articles and insights."
        />
        <meta name="keywords" content="Tomoki, Blog, Articles, Stories, Classic Design" />
      </Head>

      <div className="container mx-auto p-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-700">Tomoki&apos;s Blogsite</h1>
          <p className="text-lg text-gray-500">Discover interesting articles and insights.</p>
        </header>

        <section className="latest-posts mb-16">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">Latest Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <article key={post} className="bg-white p-6 rounded shadow-md">
                <Image src="/nature.jpg" alt="Nature" width={200} height={120} className="rounded mb-4" />
                <h3 className="text-xl font-semibold text-gray-700">Article Title {post}</h3>
                <p className="text-gray-600">An overview of the article content...</p>
                <Link href={`/post/${post}`} className="text-blue-500 hover:underline">Read more</Link>
              </article>
            ))}
          </div>
        </section>

        <aside className="popular-posts mb-16">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">Popular Articles</h2>
          <ul className="list-disc list-inside pl-4 text-gray-600">
            <li><Link href="/post/1" className="hover:underline">Popular Article 1</Link></li>
            <li><Link href="/post/2" className="hover:underline">Popular Article 2</Link></li>
            <li><Link href="/post/3" className="hover:underline">Popular Article 3</Link></li>
          </ul>
        </aside>

        <footer className="text-center text-gray-500 mt-10">
          <p>&copy; 2024 Tomoki&apos;s Blogsite. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
