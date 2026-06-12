import { Course } from '@/lib/interfaces'
import { dataBase } from '@/lib/supabase'
import CourseCard from './CourseCard'

const CoursesGrid = async () => {

    const supabase = await dataBase()
    const { data, error } = await supabase.from("courses").select("*").order("created_at", { ascending: true })
    const courses: Course[] = data || []

    if (error) {
        return (

            <p className="text-red-400 text-sm ">
                Failed to load courses: {error.message}
            </p>

        )
    }

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-[10px]">
            {
                courses.map((course, index) => (
                    <CourseCard key={course.id} course={course} index={index} />
                ))
            }
        </div>
    )
}

export default CoursesGrid
