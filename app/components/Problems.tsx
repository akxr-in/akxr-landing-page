
const problems = [
    {
        title: "Networking",
        description: "Lack of meaningful connections with peers and mentors in the industry.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S12 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S12 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        )
    },
    {
        title: "Abundance of resources",
        description: "Overwhelmed by too many tutorials and courses without a clear path.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-purple-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
        )
    },
    {
        title: "Unaccountability",
        description: "Starting courses but never finishing them due to lack of structure.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
        )
    },
    {
        title: "Unknowns about unknowns",
        description: "You don't know what you don't know. Missing out on crucial industry skills.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
        )
    }
];

export default function Problems() {
    return (
        <section className="bg-black py-24 px-4">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Problems today
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900 hover:shadow-lg hover:shadow-blue-900/10"
                        >
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-800/50 transition-transform group-hover:scale-110 group-hover:bg-zinc-800">
                                {problem.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-white">
                                {problem.title}
                            </h3>
                            <p className="text-zinc-400">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
