'use client';

import { usePathname } from "next/navigation";

const HiringBanner = () => {
  const pathname= usePathname()
  
  if (pathname?.includes('careers')) {
    return null;
  }

  return (
    <div className="w-full border-b border-zinc-900 bg-black py-3 overflow-hidden relative">
      <a 
        href="/careers" 
        className="block hover:opacity-80 transition-opacity"
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="inline-flex items-center gap-3 mx-8">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                We&apos;re Hiring - Join Our Team
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-3.5 h-3.5 text-zinc-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          ))}
        </div>
      </a>
    </div>
  )
}

export default HiringBanner