import React from "react";
import { api } from "~/trpc/server";
import BarChart from "../_components/BarChart";



const page = async () => {
  const result = await api.job.getStat.query();
  const data = result.map(item => {
    return {
      "label" : item.status, 
      "value":item._count.status,
    }
  })
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-2 m-4">
        {result.map((item) => {
          return (
            <div className="col-span-1 bg-slate-200 p-8 ">
              <h1 className="text-6xl">{item._count.status}</h1>
              <h2 className="py-4 text-2xl">{item.status}</h2>
            </div>
          );
        })}
      </div>
        <BarChart data={data}/>
    </div>
  );
};

export default page;
