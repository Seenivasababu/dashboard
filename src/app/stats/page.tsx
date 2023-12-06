import React from "react";
import { api } from "~/trpc/server";

const page = () => {
  const result = api.job.getStat.query();

  
  return <div>
   
  </div>;
};

export default page;
