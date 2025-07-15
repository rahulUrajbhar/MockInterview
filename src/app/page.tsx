import HeroSection from "@/components/HeroSection";
import InterviewSection from "@/components/homeInterviewSection/InterviewSection";
import React from "react";

const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section>
        <InterviewSection type={"Your Complited Interviews"}/>
      </section>
      <section>
        <InterviewSection type={"Pick Your Interviews"}/>
      </section>
    </>
  );
};

export default page;
