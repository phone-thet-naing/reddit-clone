import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-5 gap-16 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full">
        <Navbar />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="http://youtube.com/">youtube</a>
      </footer>
    </div>
  );
}
