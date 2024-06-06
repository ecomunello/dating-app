'use client'
import React from "react";
import { MaskHapplyIcon } from "@/components/icon/MaskHapplyIcon";
import { HeartIcon } from "@/components/icon/HeartIcon";
import { UserIcon } from "@/components/icon/UserIcon";
import { ChartIcon } from "@/components/icon/ChartIcon";
import { LogoutIcon } from "@/components/icon/LogoutIcon";
import { usePathname } from 'next/navigation'
import { useParams } from 'next/navigation'




const BottomBarNav = () =>{
  const pathname = usePathname()
  const activeClass = "active bg-slate-800 text-secondary"
  const disableCLass  = "bg-slate-200 text-slate-600"
  const params = useParams<{ id: string }>()
  
  return (
      <div className="btm-nav">
     
      <a role="button" href={`/dating/${params.id}`} className={`${pathname.includes("/dating") ? activeClass : disableCLass } text-primary `}>
        <HeartIcon className="text-2xl" />
        <span className="btm-nav-label">Dating</span>
      </a>
      <a role="button" href={`/dashboard/${params.id}`} className={`${pathname.includes("/dashboard") ? activeClass : disableCLass } text-primary`}>
        <ChartIcon className="text-2xl" />
        <span className="btm-nav-label">Dashboard</span>
      </a>
      <a role="button" href={`/profile/${params.id}`} className={`${pathname.includes("/profile") ? activeClass : disableCLass } text-primary`}>
        <UserIcon className="text-2xl" />
        <span className="btm-nav-label">Profile</span>
      </a>
      <a role="button" href="/" className="bg-slate-200 text-red-600">
        <LogoutIcon className="text-2xl" />
        <span className="btm-nav-label">Logout</span>
      </a>
    </div>
  )
}

export default BottomBarNav 