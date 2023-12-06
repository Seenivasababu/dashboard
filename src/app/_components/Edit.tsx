"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { api } from "~/trpc/react";
import { RouterOutputs } from "~/trpc/shared";

type Job = RouterOutputs["job"]["getAll"][0];

const Edit = ({ job }: { job: Job }) => {
  const router = useRouter();
  const [position, setPosition] = useState(job.position);
  const [company, setCompany] = useState(job.company);
  const [location, setLocation] = useState(job.location);
  const [status, setStatus] = useState(job.status);
  const [type, setType] = useState(job.type);

  const editJob = api.job.edit.useMutation();

  const handleSubmit = () => {
    editJob.mutate(
      { id: job.id, position, company, location, status, type },
      {
        onSuccess: () => {
          toast("Job Edited");
          router.push("/")
        },
        onError: () => {
          toast("Something went wrong");
        },
      },
    );
  };

  return (
    <div className="flex w-full flex-col bg-white px-10 py-16">
      <h2>Edit Job</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="col-span-1 mt-3 flex flex-col">
          <label className="py-2 text-gray-600">Position</label>
          <input
            className="rounded-md border-red-400 bg-slate-200 p-2"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className="col-span-1 mt-3 flex flex-col">
          <label className="py-2 text-gray-600">Company</label>
          <input
            className="rounded-md  bg-slate-200 p-2"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="col-span-1 mt-3 flex flex-col">
          <label className="py-2 text-gray-600">Job location</label>
          <input
            className="rounded-md  bg-slate-200 p-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="col-span-1 mt-3 flex flex-col">
          <label className="py-2 text-gray-600">Job status</label>
          <select
            className="rounded-md bg-slate-200 p-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value={"Pending"}>Pending</option>
            <option value={"Interview"}>Interview</option>
            <option value={"Declined"}>Declined</option>
          </select>
        </div>
        <div className="col-span-1 mt-3 flex flex-col">
          <label className="py-2 text-gray-600">Job type</label>
          <select
            className="rounded-md bg-slate-200 p-2"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value={"Full time"}>Full time</option>
            <option value={"Part time"}>Part time</option>
            <option value={"Internship"}>Internship</option>
          </select>
        </div>

        <div className="col-span-1 mt-3 flex flex-col">
          <label className="py-2 text-gray-600 ">
            You can click here to Update
          </label>
          <button className="rounded-md bg-sky-300 p-2" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
