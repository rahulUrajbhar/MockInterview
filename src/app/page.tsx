import HeroSection from "@/components/herosection/HeroSection";
import InterviewSection from "@/components/homeInterviewSection/InterviewSection";
import React from "react";

const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section>
        <InterviewSection type={"Your Complited Interview"}/>
      </section>
      <section>
        <InterviewSection type={"Pick Your Interview"}/>
      </section>
    </>
  );
};

export default page;
