"use client";
import Nav from "./components/nav";
import Hero from "./components/hero";
import FoodArc from "./components/foodArc";
import { useState } from "react";

export default function Home() {
  const bgColors = ["#C2FF87", "#FF9C70", "#FFEB93", "#A0D2FF"];
  const [bgIndex, setBgIndex] = useState(0);
  return (
    <main>
      <Nav bgColor={bgColors[bgIndex]} />
      <Hero bgIndex={bgIndex} setBgIndex={setBgIndex} />
    </main>
  );
}
