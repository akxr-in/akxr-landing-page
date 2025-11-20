import Background from './Background';

export default function Pricing() {
    return (
        <section className="relative overflow-hidden bg-black py-24 px-4">
            {/* Background confined to this section, or we can make it global but let's keep it contained for effect */}
            <div className="absolute inset-0 opacity-30">
                <Background mode="urgent" />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl text-center">
                <div className="relative overflow-hidden rounded-3xl border border-red-900/30 bg-zinc-900/80 p-8 backdrop-blur-md sm:p-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10" />

                    <div className="relative z-10">
                        <h2 className="mb-6 text-3xl font-bold text-white">
                            Pricing
                        </h2>

                        <div className="mb-8 flex flex-col items-center justify-center gap-2">
                            <span className="text-5xl font-bold text-white">Free</span>
                            <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm font-medium text-red-400 animate-pulse">
                                Limited Time Offer
                            </span>
                        </div>

                        <p className="mb-8 text-lg text-zinc-300">
                            All this is for free for a limited time. <br />
                            From <span className="font-semibold text-red-400">August 2026</span> it will be <span className="font-semibold text-white">1500 rupees</span> per month subscription.
                        </p>

                        <button className="w-full rounded-full bg-gradient-to-r from-red-600 to-orange-600 py-4 text-lg font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:px-12 shadow-lg shadow-red-900/20">
                            Start Learning Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
