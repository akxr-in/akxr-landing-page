'use client';
export default function Hero() {

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <h1 className="mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-6xl font-bold tracking-tighter text-transparent sm:text-8xl animate-fade-in-up">
          akxr labs
        </h1>
        <p className="mb-10 text-xl font-mono text-zinc-400 sm:text-2xl animate-fade-in-up delay-100 tracking-wide">
          structured hardwork beats talent
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up delay-200">
          <button onClick={() => {
            window.open('https://forms.gle/SZvZP9o4oFmGHjTg7', '_blank')
          }} className="group relative overflow-hidden rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95 uppercase tracking-wider">
            <span className="relative z-10">Join the waitlist</span>
            <div className="absolute inset-0 -translate-x-full bg-zinc-300 transition-transform duration-500 group-hover:translate-x-0" />
          </button>
          {/* <button className="rounded-full border border-zinc-800 bg-black/50 px-8 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-zinc-900 uppercase tracking-wider">
            Learn More
          </button> */}
        </div>
      </div>
    </section>
  );
}
