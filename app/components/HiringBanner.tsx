import { FaArrowRightLong } from "react-icons/fa6"

const HiringBanner = () => {
  return (
    <div className="relative z-20 w-full flex justify-center mb-4 animate-fade-in-up">
        <a
          href="/careers"
          className="flex items-center gap-2 bg-black border border-zinc-700 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          🚀 We&apos;re hiring! Apply Now
          <FaArrowRightLong className="ml-2 text-lg shrink-0 animate-move-right" />
        </a>
      </div>
  )
}

export default HiringBanner