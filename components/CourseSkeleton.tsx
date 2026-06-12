// components/CoursesSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton"

export default function CoursesSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-[10px]">
      {[0,1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-[#13131a] border border-[#2a2a2e] rounded-[12px] p-4 flex flex-col gap-3"
        >
          <Skeleton className="w-[30px] h-[30px] rounded-[8px] bg-[#1e1c35]" />
          <Skeleton className="h-[11px] w-[80%] bg-[#1e1c35]" />
          <Skeleton className="h-[11px] w-[50%] bg-[#1e1c35]" />
          <Skeleton className="h-[4px] w-full bg-[#1e1c35]" />
        </div>
      ))}
    </div>
  )
}