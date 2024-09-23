'use client'

import { useSession } from "next-auth/react";
import Navbar from "./components/navbar";
import PostListing from "./components/post-listing";

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-2 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full h-full py-1 border-b">
        <Navbar />
      </header>
      <main className="h-full">
        {/* Post section */}
        {session?.user && (
          <PostListing />
        )}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="http://youtube.com/">reddit</a>
      </footer>
    </div>
  );
}
