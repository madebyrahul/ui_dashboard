

import ActivityTile from "@/components/ActivityTile";
import CourseCard from "@/components/CourseCard";
import HeroTile from "@/components/HeroTile";
import Sidebar from "@/components/Sidebar";
import { Course } from "@/lib/interfaces";
import { dataBase } from "@/lib/supabase";
import { motion , Variants} from "framer-motion"

export default async function Home() {

  const supabase = await dataBase()
  const { data, error } = await supabase.from("courses").select("*").order("created_at", { ascending: true })
  const courses: Course[] = data || []  

  return (
    <div className="flex flex-col-reverse md:flex-row h-screen bg-[#0f0f11]">
      <Sidebar />
      <main className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-5 pb-10 md:pb-5">
        <p className="text-[11px] text-[#7b7575] font-bold mb-3">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        {error && (
          <div className="text-red-400 text-sm mb-3">
            Failed to load courses: {error.message}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-3 md:gap-[10px] text-white">
          <div className="flex flex-col gap-3 md:gap-[10px] flex-1">
            <HeroTile />
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-[10px]">
              {
                courses.map((course, index) => (
                  <CourseCard key={course.id} course={course} index={index} />
                ))
              }
            </div>
          </div>

          <div className="w-full lg:w-[260px] shrink-0">
            <ActivityTile />
          </div>
        </div>
      </main>
    </div>
  );
}
