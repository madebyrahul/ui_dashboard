// components/ActivityTile.tsx
"use client"

import { motion } from "framer-motion"

const weeklyHours = [3, 5, 4, 7, 2, 6, 4]
const weekDays    = ["M", "T", "W", "T", "F", "S", "S"]
const maxHours    = Math.max(...weeklyHours)

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0 },
}

export default function ActivityTile() {
  return (
    <motion.article
      variants={item}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
        relative overflow-hidden
        bg-[#13131a]
        border border-[#2a2a2e]
        rounded-[12px]
        p-4
        flex flex-col gap-3
        h-full
      "
    >
      {/* glow */}
      <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#534AB7] opacity-[0.06] pointer-events-none" />

      {/* title */}
      <h2 className="text-[12px] font-medium text-[#ccc]">Weekly Activity</h2>

      {/* bars */}
      <div className="flex items-end gap-[6px] h-[120px] mt-auto">
        {weeklyHours.map((hours, index) => (
          <div key={index} className="flex flex-col items-center gap-1 flex-1">
            <span className="text-[9px] text-[#555]">{hours}h</span>
            <motion.div
              className="w-full rounded-[3px] bg-[#534AB7]"
              initial={{ height: 0 }}
              animate={{ height: `${(hours / maxHours) * 100}px` }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.05 }}
            />
          </div>
        ))}
      </div>

      {/* day labels */}
      <div className="flex gap-[6px]">
        {weekDays.map((day, index) => (
          <span key={index} className="flex-1 text-center text-[9px] text-[#444]">
            {day}
          </span>
        ))}
      </div>

    </motion.article>
  )
}