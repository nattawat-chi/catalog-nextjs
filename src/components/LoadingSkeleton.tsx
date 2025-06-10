import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface LoadingSkeletonProps {
  count?: number;
}

export const LoadingSkeleton = ({ count = 12 }: LoadingSkeletonProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(count)].map((_, index) => (
        <Card key={index} className="mb-4 min-w-64 max-w-105">
          <CardHeader>
            <Skeleton className="h-[250px] w-[250px] mx-auto" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};
