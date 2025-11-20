import Background from './Background';

export default function Pricing() {
    return (
        <section className="relative overflow-hidden bg-black py-32 px-4">
            {/* Background confined to this section */}
            <div className="absolute inset-0 opacity-20">
                <Background mode="urgent" />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl text-center">
                <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-8 backdrop-blur-md sm:p-12">
                    {/* Tech grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-transparent to-transparent" />

                    <div className="relative z-10">
                        <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Pricing
                        </h2>

                        <div className="mb-10 flex flex-col items-center justify-center gap-4">
                            <span className="text-6xl font-bold text-white tracking-tighter">
                                Free
                            </span>
                            <span className="rounded-full border border-zinc-700 bg-zinc-900/50 px-4 py-1.5 text-xs font-mono text-zinc-400 uppercase tracking-widest">
                                Limited Time Offer
                            </span>
                        </div>

                        <div className="mb-10 space-y-4">
                            <div className="flex items-center justify-center gap-2 text-sm font-mono text-zinc-500 uppercase tracking-wide">
                                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                Active Now
                            </div>
                            <p className="text-lg text-zinc-400 max-w-lg mx-auto leading-relaxed">
                                All this is for free for a limited time.
                                <br />
                                <span className="text-zinc-600 text-sm mt-2 block">
                                    From August 2026 it will be ₹1500 per month subscription.
                                </span>
                            </p>
                        </div>

                        <button className="group relative w-full overflow-hidden rounded-lg bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-zinc-200 sm:w-auto sm:px-12">
                            <span className="relative z-10 uppercase tracking-wider">Start Learning Now</span>
                            <div className="absolute inset-0 -translate-x-full bg-zinc-300 transition-transform duration-500 group-hover:translate-x-0" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
