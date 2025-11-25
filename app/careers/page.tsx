"use client";

import Link from "next/link";
import { useState } from "react";

export default function Careers() {
  const [expanded, setExpanded] = useState(false);

  return (
    <main className="min-h-screen bg-black text-zinc-100 flex flex-col items-center justify-start py-12 px-4">
      <div className="w-full mb-8 flex justify-center ">
        <div className="w-3xl bg-transparent border border-zinc-700 text-zinc-100 rounded-lg px-6 py-4 text-center">
          <h2 className="text-2xl font-bold">We&apos;re Hiring!</h2>
          <p className="mt-2 text-sm opacity-80">
            Join AKXR as a UI/UX Design Intern
          </p>
        </div>
      </div>
      {/* Job Card (dark) with collapsible content */}
      <div className="max-w-3xl w-full bg-black/60 backdrop-blur-sm border border-zinc-700 rounded-lg shadow-lg p-0 overflow-hidden">
        <div className="flex items-center justify-between p-6">
          <h1 className="text-2xl font-bold mb-0 bg-linear-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            UI/UX Design - Internship
          </h1>
          <div className="flex items-center gap-3">
            <Link
              href="https://forms.gle/SvfVa63ECQKp9mtX6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group cursor-pointer relative overflow-hidden rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95 uppercase tracking-wider">
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden px-8"
            style={{
              maxHeight: expanded ? "2000px" : "260px",
              transition: "max-height 320ms ease",
            }}
          >
            <div className="pt-6 pb-8 border-t border-zinc-800">
              <h2 className="font-semibold mb-2 text-zinc-200">
                Selected intern&apos;s day-to-day responsibilities include:
              </h2>
              <ul className="list-disc ml-6 mb-4 marker:text-zinc-400 text-zinc-200">
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

              <p className="mb-4 text-zinc-200">
                This role will give you hands-on experience in product design,
                brand development, and systems thinking all within a fast-paced,
                engineering-driven environment.
              </p>

              <h3 className="font-semibold mb-2 text-zinc-200">
                Skill(s) required
              </h3>
              <ul className="list-disc ml-6 mb-4 marker:text-zinc-400 text-zinc-200">
                <li>Figma</li>
                <li>UI & UX Design</li>
                <li>User Interface (UI) Development</li>
                <li>Wireframing</li>
              </ul>

              <h3 className="font-semibold mb-2 text-zinc-200">
                Who can apply
              </h3>
              <ul className="list-disc ml-6 mb-4 marker:text-zinc-400 text-zinc-200">
                <li>are available for the work from home job/internship</li>
                <li>
                  can start the work from home job/internship between 31st
                  Oct&apos;25 and 5th Dec&apos;25
                </li>
                <li>are available for duration of 3 months</li>
                <li>have relevant skills and interests</li>
              </ul>

              <h3 className="font-semibold mb-2 text-zinc-200">Perks</h3>
              <ul className="list-disc ml-6 mb-4 marker:text-zinc-400 text-zinc-200">
                <li>Certificate</li>
                <li>Letter of recommendation</li>
                <li>Flexible work hours</li>
                <li>5 days a week</li>
              </ul>

              <h3 className="font-semibold mb-2 text-zinc-200">
                Number of openings
              </h3>
              <p className="mb-4 text-zinc-200">1</p>

              <h3 className="font-semibold mb-2 text-zinc-200">About AKXR</h3>
              <p className="mb-4 text-zinc-200">
                We at AKXR train college students to get placed. Over the past
                three years, we have mentored more than 30 to 40 students,
                igniting their passion for engineering and computer science.
                Until now, AKXR (previously WAGMI) has operated as an
                underground project, allowing us to refine our approach and plan
                for future expansion. At this point, we feel like we have found
                our way of mentoring students that work for students, and now we
                are building a company around it.
              </p>

              <div className="flex justify-center mt-6">
                <Link
                  href="https://forms.gle/SvfVa63ECQKp9mtX6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="group  cursor-pointer relative inline-flex items-center justify-center rounded-full bg-white text-black font-bold py-2 px-6 shadow hover:scale-105 transition-transform">
                    Apply Now
                    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 bg-linear-to-r from-blue-400 to-purple-500" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {!expanded && (
            <div className="pointer-events-none absolute left-8 right-8 bottom-0 h-20 bg-linear-to-t from-black/60 to-transparent" />
          )}
        </div>

        <div className="flex justify-center p-6 border-t border-zinc-800">
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-zinc-800/60 text-white py-2 px-4 rounded-md hover:bg-zinc-700/60 transition"
          >
            {expanded ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </main>
  );
}
