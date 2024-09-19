import Navbar from "./components/navbar";
import PostListing from "./components/post-listing";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-5 gap-16 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full bg-orange-300">
        <Navbar />
      </header>
      <main className="bg-slate-400 h-full">
        {/* Post section */}
        <PostListing />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="http://youtube.com/">reddit</a>
      </footer>
    </div>
  );
}
