import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="items-center bg-slate-100 p-4 sticky top-0">
      <Link href="/">
        <h2 className="text-center text-2xl font-bold">Dashboard</h2>
      </Link>
    </div>
  );
};

export default Navbar;
