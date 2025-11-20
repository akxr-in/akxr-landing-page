
export default function About() {
    return (
        <section className="bg-black py-24 px-4">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Who are we?
                </h2>

                <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm sm:p-12">
                    <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
                        <div className="flex-shrink-0 rounded-full bg-blue-500/10 p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-16 w-16 text-blue-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                            </svg>
                        </div>

                        <div className="text-left">
                            <p className="text-lg leading-relaxed text-zinc-300">
                                We are a bunch of <span className="font-semibold text-white">engineers</span> graduated from a tier-2 college who loves to solve problems.
                                We are passionate about teaching and we have been doing it for the past 3 years
                                (yes we were serious when we said we love teaching).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
