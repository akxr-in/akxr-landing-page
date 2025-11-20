import Background from './Background';

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-black px-4 text-center">
      <Background mode="calm" className="opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <h1 className="mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-6xl font-bold tracking-tighter text-transparent sm:text-8xl animate-fade-in-up">
          akxr labs
        </h1>
        <p className="mb-8 text-xl font-medium text-zinc-400 sm:text-2xl animate-fade-in-up delay-100">
          Structured Hardwork beats talent
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up delay-200">
          <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95">
            Join the Waitlist
          </button>
          <button className="rounded-full border border-zinc-800 bg-black/50 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-zinc-900">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
