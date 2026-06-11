"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
    LayoutDashboard,
    BookOpen,
    BarChart2,
    Calendar,
    Settings,
    Zap,
    User,
    House,
} from "lucide-react"

const navItemsForOtherDevices = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "progress", label: "Progress", icon: BarChart2 },
    { id: "schedule", label: "Schedule", icon: Calendar },
]

const navItemsForMobile = [
    { id: "home", label: "Home", icon: House },
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "progress", label: "Progress", icon: BarChart2 },
    { id: "profile", label: "Profile", icon: User }
]

export const STUDENT = {
  name: "Rahul",
  institute: "IIT Roorkee",
  streak: 12,
  activeCourses: 4,
  avgProgress: 58,
  hoursThisWeek: 14,
}

const Sidebar = () => {

    const [activeOtherDevice, setActiveOtherDevice] = useState("dashboard")
    const [active, setActive] = useState("home")

    return (
        <>
            {/* for desktop and tablets */}
            <nav className="hidden md:flex flex-col w-[48px] lg:w-[200px]  bg-[#13131a] border-r-[3px] border-[#2a2a2e] py-4 shrink-0 transition-all duration-300">

                {/* logo */}
                <div className=" flex items-center gap-2 px-3 lg:px-4 pb-4 mb-2 border-b-[2px] border-[#2a2a2e]">
                    <div className=" w-6 h-6 rounded-[7px] bg-[#534AB7] flex items-center justify-center shrink-0">
                        <Zap size={13} className="text-white" />
                    </div>
                    <span className="hidden lg:block text-[13px] font-medium text-[#e0dff5] ">
                        LearnOS
                    </span>
                </div>

                {/* navItems */}
                <div className="flex flex-col gap-1 px-2 flex-1">
                    {
                        navItemsForOtherDevices.map((item) => {
                            const Icon = item.icon
                            const isActive = item.id === activeOtherDevice
                            return (
                                <button key={item.id} onClick={() => setActiveOtherDevice(item.id)} className="relative flex items-center gap-[9px] px-2 lg:px-3 py-2 rounded-[7px] w-full
                                "
                                >
                                    <Icon size={16} className={`z-10 shrink-0 ${isActive ? "text-[#9f9de8]" : "text-[#555]"}`} />
                                    <span className={` hidden lg:block z-10 text-[12px] ${isActive ? "text-[#9f9de8]" : "text-[#666]"} `}>
                                        {item.label}
                                    </span>
                                    {isActive && (
                                        <div className=" hidden lg:block  z-10 w-1 h-1 rounded-full bg-[#9f9de8]" />
                                    )}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-nav"
                                            className="absolute inset-0 bg-[#1e1c35] rounded-[7px]"
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 20,
                                            }}
                                        />
                                    )}
                                </button>
                            )
                        })
                    }
                    <button className="flex items-center gap-[9px] px-2 lg:px-3 py-2 rounded-[7px] w-full">
                        <Settings size={16} className="text-[#555] shrink-0" />
                        <span className="hidden lg:block text-[12px] text-[#666]">
                            Settings
                        </span>
                    </button>
                </div>

                <div className="px-2 py-2 lg:px-3 lg:py-3 w-full my-3 border-t-[3px] flex items-center gap-5 border-[#2a2a2e]">
                    <div className=" w-[26px] h-[26px] rounded-full bg-[#1e1c35] flex items-center justify-center text-[11px] font-medium text-[#9f9de8] shrink-0 ">
                        {STUDENT.name[0]}
                    </div>
                    <div>
                        <div className="text-[11px] text-[#ccc]">{STUDENT.name}</div>
                        <div className="text-[9px] text-[#555]">{STUDENT.institute}</div>
                    </div>
                </div>

            </nav>

            {/* for mobile */}
            <nav className="flex md:hidden w-full h-16 fixed bottom-0 left-0 right-0 bg-[#13131a] z-50 border-t-[3px] border-[#2a2a2e]">
                {
                    navItemsForMobile.map((item) => {
                        const Icon = item.icon
                        const isActive = item.id === active
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActive(item.id)}
                                className="flex flex-col flex-1 items-center justify-center gap-2 relative"
                            >
                                <Icon
                                    size={20}
                                    className={isActive ? "text-[#9f9de8] z-10" : "text-[#555]"}
                                />
                                <span className={`z-10 text-[9px] ${isActive ? "text-[#9f9de8]" : "text-[#555]"}`}>
                                    {item.label}
                                </span>
                                {
                                    isActive && (
                                        <motion.div
                                            layoutId="active-nav"
                                            className="absolute z-0 inset-0 top-1 bottom-1 left-3 right-3 bg-[#1e1c35] rounded-[7px]"
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 20,
                                            }}
                                        />
                                    )
                                }
                            </button>
                        )
                    })
                }
            </nav>
        </>
    )
}

export default Sidebar
