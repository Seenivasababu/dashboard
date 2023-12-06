import Link from "next/link";
import CreateJob from "./_components/CreateJob";
import { Toaster } from "react-hot-toast";
import ListJob from "./_components/ListJob";

export default async function Home() {
  return (
    <div className=" bg-slate-200">
      <div className="">
        <Toaster/>
        <CreateJob />
        <ListJob/>
      </div>
    </div>
  );
}
