import Link from 'next/link'
import React from 'react'

const items = [
   { name: "All Job", path: "allJobs" },
   { name: "Add Job", path: "addJob" },
   { name: "Stats", path: "stats" },
   { name: "Profile", path: "profile" }
 ]
 
const SideBar = () => {
  return (
    <div className='bg-slate-100 p-3 flex flex-col h-screen sticky top-0 pt-16'>
      {items.map((item,index)=>{
         return <Link href={`/${item.path}`} key={index} className='p-2 hover:bg-slate-600 rounded-md'>{item.name}</Link>
      })}
    </div>
  )
}

export default SideBar