"use client";

import Link from "next/link";

export default function Careers() {

  return (
    <main className="min-h-screen bg-black text-white py-32 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              We&apos;re Hiring
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Join Our Team
          </h1>
          {/* <p className="text-lg text-zinc-400 font-light">
            Help us build the future of engineering education
          </p> */}
        </div>

        {/* Job Card */}
        <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-lg">
          {/* Tech grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
          <div className="absolute inset-0 bg-linear-to-br from-zinc-900/50 via-transparent to-transparent" />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-8 border-b border-zinc-800">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                UI/UX Design Intern
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400 font-mono">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  3 months
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  Remote
                </span>
              </div>
            </div>
            <Link
              href="https://forms.gle/SvfVa63ECQKp9mtX6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group cursor-pointer relative overflow-hidden rounded-full bg-white px-6 sm:px-8 py-3 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95 uppercase tracking-wider whitespace-nowrap">
                Apply Now
              </button>
            </Link>
          </div>

          <div className="relative">
            <div className="px-8">
              <div className="relative z-10 pt-8 pb-8">
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
                Responsibilities
              </h3>
              <ul className="list-disc ml-6 mb-6 space-y-2 marker:text-zinc-500 text-zinc-400 leading-relaxed">
                <li>
                  Logo and brand identity: You&apos;ll assist in designing the
                  AKXR logo, color palette, typography, and overall visual
                  language. You&apos;ll also help document these into brand
                  guidelines that ensure a consistent design approach across
                  platforms.
                </li>
                <li>
                  System design: You&apos;ll contribute to building and
                  maintaining a scalable design system for AKXR&apos;s
                  interfaces and internal tools. This includes creating reusable
                  components, layout standards, and design documentation.
                </li>
                <li>
                  Frontend design: You&apos;ll collaborate with developers to
                  create clean and functional UI/UX designs for AKXR&apos;s
                  frontend assignments and projects. You&apos;ll gain experience
                  in translating design concepts into usable interfaces.
                </li>
                <li>
                  Sub-project design: You&apos;ll support design work for
                  sub-projects and experimental tools within the AKXR ecosystem.
                  This may include assisting with wireframes, prototypes, and
                  final visual designs.
                </li>
              </ul>

              <p className="mb-8 text-zinc-400 leading-relaxed border-l-2 border-zinc-700 pl-4">
                This role will give you hands-on experience in product design,
                brand development, and systems thinking all within a fast-paced,
                engineering-driven environment.
              </p>

              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
                Required Skills
              </h3>
              <ul className="list-disc ml-6 mb-8 space-y-2 marker:text-zinc-500 text-zinc-400">
                <li>Figma</li>
                <li>UI & UX Design</li>
                <li>User Interface (UI) Development</li>
                <li>Wireframing</li>
              </ul>

              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
                Who Can Apply
              </h3>
              <ul className="list-disc ml-6 mb-8 space-y-2 marker:text-zinc-500 text-zinc-400">
                <li>are available for the work from home internship</li>
                {/* <li>
                  can start the work from home internship between 31st
                  Oct&apos;25 and 5th Dec&apos;25
                </li> */}
                <li>are available for duration of 3 months</li>
                {/* <li>have relevant skills and interests</li> */}
              </ul>

              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">Perks</h3>
              <ul className="list-disc ml-6 mb-8 space-y-2 marker:text-zinc-500 text-zinc-400">
                <li>Certificate</li>
                <li>Letter of recommendation</li>
                <li>Flexible work hours</li>
                <li>5 days a week</li>
              </ul>

              <div className="mb-8 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                  Number of Openings
                </h3>
                <p className="text-2xl font-bold text-white">1</p>
              </div>

              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">About AKXR</h3>
              <p className="text-zinc-400 leading-relaxed">
                We at AKXR train college students to get placed. Over the past
                three years, we have mentored more than 30 to 40 students,
                igniting their passion for engineering and computer science.
                Until now, AKXR (previously WAGMI) has operated as an
                underground project, allowing us to refine our approach and plan
                for future expansion. At this point, we feel like we have found
                our way of mentoring students that work for students, and now we
                are building a company around it.
              </p>

             
            </div>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}
