"use client";
import React from "react";
import { api } from "~/trpc/react";
import SingleJob from "./SingleJob";

const ListJob = () => {
  const { data: jobs, isLoading } = api.job.getAll.useQuery();
 
  if (isLoading) return <h2>Loading</h2>;

  if (!jobs) return null;

  return (
    <div className="grid md:grid-cols-2 gap-10  mt-8 ml-14 mr-10">
      {jobs.map((job) => {
        return <SingleJob key={job.id} job={job} />;
      })}
    </div>
  );
};

export default ListJob;
