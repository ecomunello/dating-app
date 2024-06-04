'use client'
import React from "react";
import { MaskHapplyIcon } from "@/components/icon/MaskHapplyIcon";

import Children from 'react'
import { usePathname } from 'next/navigation'


const BottomBarNav = () =>{
  const pathname = usePathname()
    
  return (
      <div className="btm-nav">
     
      <a role="button" href="/dating"className={`${pathname === "/dating" ? 'active' : ""} text-primary`}>
        <MaskHapplyIcon className="text-2xl" />
        <span className="btm-nav-label">Dating</span>
      </a>
      <a role="button" href="/dashboard" className={`${pathname === "/dashboard" ? 'active' : ""} text-primary`}>
        <MaskHapplyIcon className="text-2xl" />
        <span className="btm-nav-label">Dashboard</span>
      </a>
      <a role="button" href="/" className={`${pathname === "/profile" ? 'active' : ""} text-primary`}>
        <MaskHapplyIcon className="text-2xl" />
        <span className="btm-nav-label">Profile</span>
      </a>
    </div>
  )
}

export default BottomBarNav 