'use client';

import React, { useEffect, useRef, useState } from 'react';

const steps = [
    {
        id: 1,
        title: "Weekly Tasks",
        description: "Precise weekly tasks including curated videos and custom assignments to keep you on track.",
        color: "blue",
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
        color: "indigo",
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
        color: "violet",
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
        color: "purple",
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
        color: "fuchsia",
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
        color: "pink",
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
        color: "rose",
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
        color: "orange",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
        )
    }
];

// Helper to get color classes
const getColorClasses = (color: string, isActive: boolean) => {
    const colors: Record<string, any> = {
        blue: {
            border: 'border-blue-500',
            bg: 'bg-blue-500/10',
            text: 'text-blue-400',
            bgSolid: 'bg-blue-500',
            gradient: 'from-blue-500/5'
        },
        indigo: {
            border: 'border-indigo-500',
            bg: 'bg-indigo-500/10',
            text: 'text-indigo-400',
            bgSolid: 'bg-indigo-500',
            gradient: 'from-indigo-500/5'
        },
        violet: {
            border: 'border-violet-500',
            bg: 'bg-violet-500/10',
            text: 'text-violet-400',
            bgSolid: 'bg-violet-500',
            gradient: 'from-violet-500/5'
        },
        purple: {
            border: 'border-purple-500',
            bg: 'bg-purple-500/10',
            text: 'text-purple-400',
            bgSolid: 'bg-purple-500',
            gradient: 'from-purple-500/5'
        },
        fuchsia: {
            border: 'border-fuchsia-500',
            bg: 'bg-fuchsia-500/10',
            text: 'text-fuchsia-400',
            bgSolid: 'bg-fuchsia-500',
            gradient: 'from-fuchsia-500/5'
        },
        pink: {
            border: 'border-pink-500',
            bg: 'bg-pink-500/10',
            text: 'text-pink-400',
            bgSolid: 'bg-pink-500',
            gradient: 'from-pink-500/5'
        },
        rose: {
            border: 'border-rose-500',
            bg: 'bg-rose-500/10',
            text: 'text-rose-400',
            bgSolid: 'bg-rose-500',
            gradient: 'from-rose-500/5'
        },
        orange: {
            border: 'border-orange-500',
            bg: 'bg-orange-500/10',
            text: 'text-orange-400',
            bgSolid: 'bg-orange-500',
            gradient: 'from-orange-500/5'
        }
    };

    return colors[color];
};

export default function Structure() {
    const [activeStep, setActiveStep] = useState(steps[0]);
    const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setActiveStep(steps[index]);
                    }
                });
            },
            {
                root: null,
                rootMargin: '-45% 0px -45% 0px',
                threshold: 0
            }
        );

        stepRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const activeColors = getColorClasses(activeStep.color, true);

    return (
        <section className="bg-black py-24 px-4">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    The Structure
                </h2>
                <p className="mb-16 text-center text-zinc-400">
                    Structured Hardwork beats talent
                </p>

                <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                    {/* Left Column: List of Steps */}
                    <div className="flex flex-col gap-32 lg:w-1/3 lg:gap-2">
                        {steps.map((step, index) => {
                            const isActive = activeStep.id === step.id;
                            const colors = getColorClasses(step.color, isActive);

                            return (
                                <button
                                    key={step.id}
                                    ref={(el) => { stepRefs.current[index] = el; }}
                                    data-index={index}
                                    onMouseEnter={() => setActiveStep(step)}
                                    onClick={() => setActiveStep(step)}
                                    className={`group flex items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${isActive
                                            ? `${colors.border} ${colors.bg}`
                                            : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50'
                                        }`}
                                >
                                    <div className={`flex-shrink-0 transition-colors duration-300 ${isActive ? colors.text : 'text-zinc-500 group-hover:text-zinc-300'
                                        }`}>
                                        {step.icon}
                                    </div>
                                    <span className={`font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-400 group-hover:text-white'
                                        }`}>
                                        {step.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column: Detail Card */}
                    <div className="relative flex-1 lg:h-auto">
                        <div className="sticky top-24 h-full min-h-[300px] rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all lg:min-h-[500px] lg:p-12">
                            <div className={`absolute inset-0 bg-gradient-to-br ${activeColors.gradient} via-transparent to-transparent transition-colors duration-500`} />

                            <div className="relative z-10 flex h-full flex-col justify-center">
                                <div className={`mb-8 flex h-20 w-20 items-center justify-center rounded-2xl ${activeColors.bg} ${activeColors.text} transition-all duration-500`}>
                                    {React.cloneElement(activeStep.icon as React.ReactElement, { className: "h-10 w-10" })}
                                </div>

                                <h3 className="mb-4 text-3xl font-bold text-white">
                                    {activeStep.title}
                                </h3>

                                <p className="text-xl leading-relaxed text-zinc-400">
                                    {activeStep.description}
                                </p>

                                <div className={`mt-8 flex items-center gap-2 text-sm font-medium ${activeColors.text} transition-colors duration-500`}>
                                    <span>Step {activeStep.id} of {steps.length}</span>
                                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-zinc-800">
                                        <div
                                            className={`h-full ${activeColors.bgSolid} transition-all duration-500`}
                                            style={{ width: `${(activeStep.id / steps.length) * 100}%` }}
                                        />
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
