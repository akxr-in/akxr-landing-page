'use client';

import React, { useEffect, useRef, useState } from 'react';

const steps = [
    {
        id: 1,
        title: "Weekly Tasks",
        description: "Precise weekly tasks including curated videos and custom assignments to keep you on track.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
        )
    },
    {
        id: 2,
        title: "Execution & Review",
        description: "Complete assignments and join our weekly review calls for personalized feedback.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        id: 3,
        title: "Iterate",
        description: "Repeat the cycle until the entire syllabus is mastered and you are ready for the next phase.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        )
    },
    {
        id: 4,
        title: "Team Formation",
        description: "Form teams, get paired with mentors, and participate in hackathons to build real-world experience.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 5.472m0 0a9.09 9.09 0 00-3.246 1.583m0 0a9.091 9.091 0 018.315-7.512M12 12.75a3.002 3.002 0 003.001-3.001 3.002 3.002 0 00-3.001-3.001 3.002 3.002 0 00-3.001 3.001zm0 9.75a9.002 9.002 0 01-9.001-9.001c0-4.97 4.032-9.001 9.001-9.001s9.001 4.032 9.001 9.001a9.001 9.001 0 01-9.001 9.001z" />
            </svg>
        )
    },
    {
        id: 5,
        title: "Portfolio Building",
        description: "Mentors guide you in building a personal portfolio that stands out to recruiters.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
        )
    },
    {
        id: 6,
        title: "Resume Crafting",
        description: "Expert help to craft a resume that gets you shortlisted for top companies.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        )
    },
    {
        id: 7,
        title: "Cold Outreach",
        description: "Personalized cold email strategies to start applying effectively and getting interviews.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
        )
    },
    {
        id: 8,
        title: "Graduation",
        description: "Get placed and officially graduate from akxr labs. Welcome to the alumni network.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
        )
    }
];

export default function Structure() {
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const { top, height } = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const scrollDistance = height - windowHeight;
            const scrolled = -top;

            if (scrolled >= 0 && scrolled <= scrollDistance) {
                const progress = scrolled / scrollDistance;
                const stepIndex = Math.min(
                    Math.floor(progress * steps.length),
                    steps.length - 1
                );
                setActiveStepIndex(stepIndex);
            } else if (scrolled < 0) {
                setActiveStepIndex(0);
            } else {
                setActiveStepIndex(steps.length - 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const activeStep = steps[activeStepIndex];

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden px-4">
                <div className="mx-auto w-full max-w-6xl">
                    <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        The Structure
                    </h2>
                    <p className="mb-16 text-center text-zinc-400">
                        Structured Hardwork beats talent
                    </p>

                    <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                        {/* Left Column: List of Steps */}
                        <div className="flex flex-col gap-1 lg:w-1/3">
                            {steps.map((step, index) => {
                                const isActive = index === activeStepIndex;

                                return (
                                    <button
                                        key={step.id}
                                        onClick={() => {
                                            // Scroll logic could go here
                                        }}
                                        className={`group flex items-center gap-4 rounded-lg border p-4 text-left transition-all duration-300 ${isActive
                                            ? 'border-white/20 bg-zinc-900'
                                            : 'border-transparent hover:bg-zinc-900/50 opacity-40 hover:opacity-70'
                                            }`}
                                    >
                                        <div className={`flex-shrink-0 transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-600'
                                            }`}>
                                            {step.icon}
                                        </div>
                                        <span className={`font-mono text-sm tracking-wider transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-500'
                                            }`}>
                                            {step.title}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right Column: Detail Card */}
                        <div className="relative flex-1 lg:h-auto">
                            <div className="h-full min-h-[300px] rounded-xl border border-zinc-800 bg-zinc-950 p-8 transition-all lg:min-h-[500px] lg:p-12 relative overflow-hidden">
                                {/* Tech grid background */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-transparent to-transparent" />

                                <div className="relative z-10 flex h-full flex-col justify-center">
                                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                        {React.cloneElement(activeStep.icon as React.ReactElement<any>, { className: "h-8 w-8" })}
                                    </div>

                                    <h3 className="mb-6 text-4xl font-bold text-white tracking-tight">
                                        {activeStep.title}
                                    </h3>

                                    <p className="text-xl leading-relaxed text-zinc-400 font-light">
                                        {activeStep.description}
                                    </p>

                                    <div className="mt-auto pt-12">
                                        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                                            <span>PHASE {activeStep.id.toString().padStart(2, '0')}</span>
                                            <span>{Math.round(((activeStepIndex + 1) / steps.length) * 100)}% COMPLETE</span>
                                        </div>
                                        <div className="h-1 w-full overflow-hidden bg-zinc-900">
                                            <div
                                                className="h-full bg-white transition-all duration-500 ease-out"
                                                style={{ width: `${((activeStepIndex + 1) / steps.length) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
