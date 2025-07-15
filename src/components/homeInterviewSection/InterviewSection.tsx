import React from "react";
import InterviewCard from "@/components/homeInterviewSection/InterviewCard";

interface InterviewSectionProps {
  type: string;
}
const dummyInterviewData = [
  {
    id: 1,
    userId: "user1",
    role: "Full Stack Developer",
    type: "mixed",
    techstack: ["Node.js", "Express", "MongoDG", "React"],
    level: "Senior",
    question: ["what is Node.js?"],
    finalized: false,
    coverImage: "",
    createdAt: "2024-03-12",
  },
  {
    id: 2,
    userId: "user2",
    role: "Frontend Developer",
    type: "mixed",
    techstack: ["CSS", "Javascript", "React"],
    level: "Senior",
    question: ["what is react js?"],
    finalized: false,
    coverImage: "",
    createdAt: "2024-03-14",
  },
    {
    id: 3,
    userId: "user1",
    role: "Full Stack Developer",
    type: "mixed",
    techstack: ["Node.js", "Express", "MongoDG", "React"],
    level: "Senior",
    question: ["what is Node.js?"],
    finalized: false,
    coverImage: "",
    createdAt: "2024-03-12",
  },
  {
    id: 4,
    userId: "user2",
    role: "Frontend Developer",
    type: "mixed",
    techstack: ["CSS", "Javascript", "React"],
    level: "Senior",
    question: ["what is react js?"],
    finalized: false,
    coverImage: "",
    createdAt: "2024-03-14",
  }
];
const InterviewSection = ({ type }: InterviewSectionProps) => {
  return (
    <div className="flex flex-col mx-auto max-w-[1250px] max-md:px-4 max-lg:m-2 md:my-10 md:pr-2 md:pl-8">
      <div className="font-bold max-md:text-center text-2xl md:text-3xl mt-4">{type}</div>
      <div className="flex flex-wrap items-center justify-center gap-4 my-4">
        {dummyInterviewData.map((interview) => {
          return (
            <div key={interview.id}>
              <InterviewCard interview={interview} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InterviewSection;
