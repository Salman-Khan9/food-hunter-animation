"use client";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Nav() {
  const navItems = ["Breakfast", "Lunch", "Dinner"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex items-center justify-between w-full px-6 py-4"
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Logo" width={24} height={24} />
        <span className="font-bold text-base md:text-2xl">Food Hunt</span>
      </div>

      {/* Center: Nav Links */}
      <div className="hidden md:flex items-center gap-10 text-sm md:text-2xl text-gray-700">
        {navItems.map((item) => (
          <a key={item} href="#" className="hover:text-yellow-500 transition">
            {item}
          </a>
        ))}
      </div>

      {/* Right: Lock Icon */}
      <Lock className="text-gray-600 w-5 h-5 md:w-10 md:h-10" />
    </motion.nav>
  );
}
