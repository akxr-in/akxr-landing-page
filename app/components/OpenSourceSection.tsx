import { FaGithub, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function OpenSourceSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 px-4">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Open Source, Always
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-zinc-400 font-light">
          All AKXR products are{" "}
          <span className="font-semibold text-white">open-source</span>. We
          believe in the power of the open-source ecosystem and actively support
          OSS communities. Our team uses open-source tools internally to
          collaborate, build, and grow.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="relative flex flex-col items-center bg-zinc-900/70 border border-zinc-700 rounded-xl p-6 transition-all :shadow-lg ">
            <div className="absolute inset-0 pointer-events-none rounded-xl bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
            <Image
              src="/png-transparent-zulip-logo-thumbnail-tech-companies-thumbnail-removebg-preview.png"
              alt="Zulip"
              width={50}
              height={50}
              className="relative z-10 mb-2"
            />
            <h3 className="relative z-10 font-semibold text-lg mb-2 text-white">
              Zulip
            </h3>
            <p className="relative z-10 text-sm leading-relaxed text-zinc-500 font-mono">
              We use <span className="font-semibold text-white">Zulip</span> for
              internal team communication.
            </p>
          </div>
          <div className="relative flex flex-col items-center bg-zinc-900/70 border border-zinc-700 rounded-xl p-6 transition-all  ">
            <div className="absolute inset-0 pointer-events-none rounded-xl bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
            <Image
              src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/docmost.png"
              alt="Docmost"
              width={30}
              height={30}
              className="relative z-10 mb-2"
            />
            <h3 className="relative z-10 font-semibold text-lg mb-2 text-white">
              Docmost
            </h3>
            <p className="relative z-10 text-sm leading-relaxed text-zinc-500 font-mono">
              We use <span className="font-semibold text-white">Docmost</span>{" "}
              for internal documentation and knowledge sharing.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative flex flex-col items-center bg-zinc-900/70 border border-zinc-700 rounded-xl p-6 transition-all  ">
            <div className="absolute inset-0 pointer-events-none rounded-xl bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
            <FaGithub className="relative z-10 text-3xl mb-2 text-white transition-all hover:text-blue-400 " />
            <h3 className="relative z-10 font-semibold text-lg mb-2 text-white">
              Open-Source Productshover
            </h3>
            <p className="relative z-10 text-sm leading-relaxed text-zinc-500 font-mono">
              Every AKXR product is released under an open-source license.
            </p>
          </div>
          <div className="relative flex flex-col items-center bg-zinc-900/70 border border-zinc-700 rounded-xl p-6 transition-all  ">
            <div className="absolute inset-0 pointer-events-none rounded-xl bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
            <FaCheckCircle className="relative z-10 text-3xl mb-2 text-blue-400 transition-all  " />
            <h3 className="relative z-10 font-semibold text-lg mb-2 text-white">
              OSS Support
            </h3>
            <p className="relative z-10 text-sm leading-relaxed text-zinc-500 font-mono">
              We contribute to and advocate for the open-source ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
