import Link from "next/link";
import React from "react";
import { RouterOutputs } from "~/trpc/shared";

type Job = RouterOutputs["job"]["getAll"][0];

const SingleJob = ({ job }: { job: Job }) => {
  return (
    <div className="col-span-1 mt-8 shadow-lg ">
      <div className="white flex w-90 flex-col bg-white p-2">
        <div className="mb-3 flex gap-10 border-b-2 px-2 ">
          <div className="h-14 w-14 rounded-sm bg-sky-400">
            <h2 className="flex h-full items-center justify-center text-2xl">
              {job.position.charAt(0)}
            </h2>
          </div>
          <div className="mb-6">
            <h2 className="font-bold">{job.position}</h2>
            <p>{job.company}</p>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 p-1">
            <h2 className="p-2">{job.location}</h2>
            <h2 className="p-2">{job.createdAt.toLocaleDateString()}</h2>
            <h2 className="p-2">{job.type}</h2>
            <h2 className="p-2">{job.status}</h2>
          </div>
          <div>
            <button className="m-2 rounded-sm bg-sky-300 px-2 py-1">
              <Link href={`/editJob/${job.id}`}> Edit</Link>
            </button>
            <button className="m-2 rounded-sm bg-sky-300 px-2 py-1">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
