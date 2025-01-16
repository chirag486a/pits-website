import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import Down from "../assets/icons/down.svg?react";

export default function HeroSection() {
  // HERO SECTION
  return (
    <div className="flex flex-col h-screen text-base-950">
      <TopBar />
      <Navbar />
      <Hero />
      <div className="flex items-end justify-center flex-grow w-full pb-2">
        <Down />
      </div>
    </div>
  );
}
