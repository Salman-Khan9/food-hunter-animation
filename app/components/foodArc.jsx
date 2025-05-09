"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const foodItems = [
  "/images/food1.png",
  "/images/food3.png",
  "/images/food4.png",
  "/images/food2.png",
];
const mainItems = [
  "/images/main1.png",
  "/images/main2.png",
  "/images/main3.png",
  "/images/main4.png",
];
const bg = ["#C2FF87", "#FF9C70", "#FFEB93", "#A0D2FF"];

export default function FoodArc({ setBgIndex }) {
  const [isMobile, setIsMobile] = useState(false);
  const radius = isMobile ? 90 : 190;

  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0); // The item on top

  const itemCount = foodItems.length;

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % itemCount;
    setRotation((prev) => prev + 360 / itemCount);
    setActiveIndex((prev) => (prev + 1) % itemCount);
    setBgIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + itemCount) % itemCount;
    setRotation((prev) => prev - 360 / itemCount);
    setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount);
    setBgIndex(prevIndex);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize); // check on resize

    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="relative w-max h-max mx-auto flex flex-col items-center z-10  rounded-full"
        style={{ backgroundColor: bg[activeIndex] }}
      >
        <div className="absolute w-[190px] h-[190px] md:w-[400px] md:h-[400px]  mix-blend-multiply top-14 md:top-12">
          <Image
            src="/images/circle.png"
            objectFit="cover"
            layout="fill"
            alt="circle"
          />
        </div>
        {/* Rotating Arc */}
        <div className="relative w-[310px] h-[310px] md:w-[500px] md:h-[500px]">
          <motion.div
            animate={{ rotate: rotation }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="origin-center absolute top-0 left-0 w-full h-full"
          >
            {foodItems.map((src, i) => {
              const angle = (360 / itemCount) * i - 90; // -90 to place the first one on top
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="relative w-[75px] h-[75px]  md:w-[100px] md:h-[100px] rounded-full overflow-hidden z-20">
                    <Image
                      src={src}
                      alt={`Food ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Center Image */}
          <motion.div
            key={mainItems[activeIndex]}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] md:w-[160px] md:h-[160px] rounded-full  overflow-hidden z-20"
          >
            <Image
              src={mainItems[activeIndex]}
              alt="Main Food"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Buttons */}
      </div>
      <div className="mt-6 flex gap-6">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full  text-white shadow-md transition"
          style={{ backgroundColor: bg[activeIndex % bg.length] }}
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full  text-white shadow-md transition"
          style={{ backgroundColor: bg[activeIndex % bg.length] }}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
