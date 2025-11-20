import About from "./components/About";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Problems from "./components/Problems";
import Structure from "./components/Structure";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Problems />
      <Structure />
      <Pricing />

      <footer className="border-t border-zinc-800 bg-black py-8 text-center text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} akxr labs. All rights reserved.</p>
      </footer>
    </main>
  );
}
