"use client"
import { motion } from "framer-motion"
import { Flame, BookOpen, TrendingUp, Clock } from "lucide-react"
import { STUDENT } from "./Sidebar"

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
}

const HeroTile = () => {
    return (
        <motion.article
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="shadow-md overflow-hidden bg-[#13131a] border border-[#2a2a2e] rounded-[12px] p-5"
        >

            <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                    <h1 className="text-[18px] font-medium text-[#e0dff5] mb-1">
                        Welcome back, {STUDENT.name} 👋
                    </h1>
                    <p className="text-[12px] text-[#555]">
                        {STUDENT.institute} ·
                    </p>
                </div>

                <div className=" flex items-center gap-[6px] shrink-0 bg-[#1e1c2e] border border-[#3a3768] rounded-full px-3 py-[5px]">
                    <Flame size={14} className="text-[#f0a030]" />
                    <span className="text-[11px] text-[#9f9de8]">
                        {STUDENT.streak} day streak
                    </span>
                </div>
            </div>

            <div className="flex gap-3">

                <div className=" flex items-center gap-2bg-[#0f0f11] border border-[#2a2a2e] rounded-[8px] px-3 py-2 flex-1 ">
                    <BookOpen size={14} className="text-[#9f9de8] shrink-0" />
                    <div>
                        <div className="text-[14px] font-medium text-[#9f9de8]">
                            {STUDENT.activeCourses}
                        </div>
                        <div className="text-[10px] text-[#555]">Active Courses</div>
                    </div>
                </div>

                <div className=" flex items-center gap-2 bg-[#0f0f11] border border-[#2a2a2e] rounded-[8px] px-3 py-2 flex-1
        ">
                    <TrendingUp size={14} className="text-[#3da870] shrink-0" />
                    <div>
                        <div className="text-[14px] font-medium text-[#3da870]">
                            {STUDENT.avgProgress}%
                        </div>
                        <div className="text-[10px] text-[#555]">Avg Progress</div>
                    </div>
                </div>

                <div className=" flex items-center gap-2 bg-[#0f0f11] border border-[#2a2a2e] rounded-[8px] px-3 py-2 flex-1">
                    <Clock size={14} className="text-[#5ba0d8] shrink-0" />
                    <div>
                        <div className="text-[14px] font-medium text-[#5ba0d8]">
                            {STUDENT.hoursThisWeek}h
                        </div>
                        <div className="text-[10px] text-[#555]">This Week</div>
                    </div>
                </div>

            </div>

        </motion.article >
    )
}

export default HeroTile
