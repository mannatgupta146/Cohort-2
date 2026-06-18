import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800"
        >
          <div className="relative bg-zinc-100/80 dark:bg-zinc-800/40 p-6">
            <Skeleton className="absolute top-3 left-3 h-6 w-20 rounded-full" />

            <Skeleton className="h-56 w-full rounded-xl" />
          </div>

          <div className="p-5">
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-3/4 mb-4" />

            <div className="flex items-center gap-2 mb-4">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-10" />
            </div>

            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-5" />

            <div className="flex items-center justify-between">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-10 w-24 rounded-xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}