import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="flex max-md:flex-col-reverse items-center justify-between mx-auto max-w-[1200px] max-md:px-4 max-sm:m-2 max-xl:m-10 md:my-10 lg:pl-10 md:pr-2 md:pl-4 bg-blue-950 rounded-2xl">
      {/* Left Side: Text Content */}
      <div className="space-y-6 py-2 flex-1">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center md:text-left">
          Get Interview-Ready with AI-Powered Practice & Feedback
        </h1>
        <p className="text-white/80 text-center md:text-left">
          Practice real interview questions, receive feedback, and improve
          yourself to go into the interview with confidence.
        </p>
        <Button className="max-md:w-full md:items-start cursor-pointer rounded-2xl mx-auto md:mx-0 max-md:mb-4">
          Start an Interview
        </Button>
      </div>

      {/* Right Side: Image */}
      <img
        src="/herosection.png"
        alt="Herosection"
        className="w-full h-auto max-w-[400px] lg:max-w-full flex-1"
      />
    </div>
  );
};

export default HeroSection;
