import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface InterviewCardProps {
  interview: any; // Replace 'any' with the actual type if known
}

const InterviewCard = ({ interview }: InterviewCardProps) => {
  const normalizedType = /mix/gi.test(interview.type)
    ? "Mixed"
    : interview.type;
  const formateDate = dayjs(interview.createdAt).format("MMM D YYYY");
  const coverImg =
    interview.coverImage.trim() === "" ? "/vercel.svg" : interview.coverImage;
  return (
    <div className="border p-4 space-y-2 rounded-lg shadow-md w-[360px] h-[400px] max-sm:m-2 bg-blue-950 flex flex-col">
      {/* Type tag */}
      <div className="bg-blue-800 text-white px-2 py-1 rounded-bl-lg rounded-tr-lg self-end">
        <p className="font-semibold">{interview.type}</p>
      </div>
      <Image
        src={coverImg}
        alt="coverLogo"
        width={60}
        height={60}
        className="rounded-full mx-auto object-fill size-[60px] bg-black p-2 my-3"
      ></Image>

      <h1 className="font-semibold text-2xl text-center">
        {interview.role} Interview
      </h1>
      <p>
        <strong>Tech Stack:</strong> {interview.techstack?.join(", ")}
      </p>
      <p>
        <strong>Level:</strong> {interview.level}
      </p>
      <p className="text-sm text-white/70">
        You haven't taken this interview yet. take it now to{" "}
        <strong>prepare effectively</strong>.
      </p>
      <Link href={"/"} className="mt-auto flex justify-center mb-2">
        <Button className="cursor-pointer text-md rounded-2xl left-1/4 w-[200px]">
          Take Interview
        </Button>
      </Link>
    </div>
  );
};

export default InterviewCard;
