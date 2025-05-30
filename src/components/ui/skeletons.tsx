import { Skeleton } from "@/components/ui/skeleton";

export function HomePageSkeleton() {
  return (
    <div className="min-h-screen">
      <section className="py-10 md:py-14 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
          <Skeleton className="h-24 w-full max-w-2xl mx-auto mb-12" />
          <div className="flex flex-col space-y-8 items-center">
            <Skeleton className="h-10 w-full max-w-md" />
            <div className="flex gap-4 flex-wrap justify-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-24" />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-muted/30">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ProductsPageSkeleton() {
  return (
    <div className="container py-8">
      <Skeleton className="h-8 w-48 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Skeleton className="h-[400px] w-full" />
        </div>
        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
