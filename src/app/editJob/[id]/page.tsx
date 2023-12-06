"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Edit from "~/app/_components/Edit";
import { api } from "~/trpc/react";

const page = ({ params }: { params: { id: string } }) => {
  const { data: job, isLoading } = api.job.getJobById.useQuery({
    id: params.id,
  });

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (!job) {
    return <h2>Data not found</h2>;
  }

  if (job) {
    return <Edit job={job} />;
  }

  return null
};

export default page;
