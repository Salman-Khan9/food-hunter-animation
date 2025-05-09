"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowDown } from "lucide-react"; // Optional icons
import FoodArc from "./foodArc";

export default function Hero({ bgIndex, setBgIndex }) {
  const bgColors = ["#C2FF87", "#FF9C70", "#FFEB93", "#A0D2FF"];
  return (
    <section className="flex flex-col md:flex-row min-h-screen items-center gap-5 md:gap-0 md:justify-between bg-white mt-4 md:mt-0">
      {/* Left Text */}
      <div className="md:w-1/2 px-2 md:px-10 ">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className=" text-4xl font-bold mb-2"
          style={{ color: bgColors[bgIndex] }}
        >
          Delicious
        </motion.h1>
        <h2 className="text-2xl font-semibold mb-4">Quench the Hunger</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <button
          className=" px-6 py-2 rounded-full text-white font-semibold text-[18px] shadow-md transition"
          style={{ backgroundColor: bgColors[bgIndex] }}
        >
          Quench now
        </button>
      </div>

      {/* Right Food Arc */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative md:w-1/2 flex items-center justify-center"
      >
        <div className="absolute -top-20  z-0"></div>

        <FoodArc bgIndex={bgIndex} setBgIndex={setBgIndex} />
      </motion.div>
    </section>
  );
}
