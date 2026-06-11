"use client"

import { Course } from "@/lib/interfaces"
import { motion, Variants } from "framer-motion"
interface CourseCardProps {
    course: Course,
    index: number,
}
import {
    Atom,
    Database,
    Server,
    Box
} from "lucide-react";

const CourseCard = ({ course, index }: CourseCardProps) => {

    const item: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.15,
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        },
    };

    const cardStyles = [
        {
            iconBg: "#1e1c35",
            iconColor: "#9f9de8",
            barColor: "#534AB7",
            glowColor: "#534AB7",
        },
        {
            iconBg: "#1a2820",
            iconColor: "#3da870",
            barColor: "#3da870",
            glowColor: "#3da870",
        },
        {
            iconBg: "#1a2535",
            iconColor: "#5ba0d8",
            barColor: "#5ba0d8",
            glowColor: "#5ba0d8",
        },
        {
            iconBg: "#221a1a",
            iconColor: "#d86b6b",
            barColor: "#d86b6b",
            glowColor: "#d86b6b",
        },
    ]

    const style = cardStyles[index % cardStyles.length]
    const icons = {
        Atom,
        Database,
        Server,
        Box,
    };

    const Icon = icons[course.icon_name as keyof typeof icons];

    return (
        <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.02 }}
        >
            <article className="relative overflow-hidden bg-[#13131a] border border-[#2a2a2e] rounded-[12px] p-4 flex flex-col gap-3">
                <div
                    className="w-[30px] h-[30px] rounded-[8px] flex items-center justify-center"
                    style={{ background: style.iconBg }}
                >
                    <Icon color={style.iconColor} />
                </div>

                <p className="text-[11px] font-medium text-[#ccc] leading-snug">
                    {course.title}
                </p>

                <div>
                    <div className="h-[4px] bg-[#1e1c35] rounded-[2px] overflow-hidden">
                        <motion.div
                            className="h-full rounded-[2px]"
                            style={{ background: style.barColor }}
                            initial={{ width: "0%" }}
                            animate={{ width: `${course.progress}%` }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        />
                    </div>
                    <div className="flex justify-between mt-1">
                        <span className="text-[10px] text-[#555]">Progress</span>
                        <span className="text-[10px]" style={{ color: style.iconColor }}>
                            {course.progress}%
                        </span>
                    </div>
                </div>
            </article>
        </motion.div>
    )
}

export default CourseCard
