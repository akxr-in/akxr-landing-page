import About from "./components/About";
import Footer from "./components/Footer";
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
      <Footer/>
    </main>
  );
}
