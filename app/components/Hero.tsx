'use client';

import Button from './Button';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 text-center">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <h1 className="mb-6 bg-linear-to-b from-white to-zinc-500 bg-clip-text text-6xl font-bold tracking-tighter text-transparent sm:text-8xl animate-fade-in-up">
          akxr labs
        </h1>
        <p className="mb-10 text-xl font-mono text-zinc-400 sm:text-2xl animate-fade-in-up delay-100 tracking-wide">
          structured hardwork beats talent
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up delay-200">
          <Button href="https://forms.gle/SZvZP9o4oFmGHjTg7" target="_blank">
            Join the waitlist
          </Button>
          {/* <Button variant="secondary">
            Learn More
          </Button> */}
        </div>
      </div>
    </section>
  );
}
