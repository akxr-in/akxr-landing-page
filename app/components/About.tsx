
export default function About() {
    return (
        <section className="bg-black py-32 px-4">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="mb-16 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Who are we?
                </h2>

                <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-8 sm:p-12">
                    {/* Tech grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-transparent to-transparent" />

                    <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
                        <div className="flex-shrink-0 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                        </div>

                        <div className="text-left">
                            <p className="text-lg leading-relaxed text-zinc-400 font-light">
                                We are a bunch of <span className="font-bold text-white">engineers</span> graduated from a tier-2 college who love to solve problems.
                                <br /><br />
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
