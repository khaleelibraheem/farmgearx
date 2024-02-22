import React from "react";

const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="w-[300px] h-[250px] bg-gray-300 rounded"></div>
    <div className="mt-5 h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="mt-2 h-6 bg-gray-300 rounded w-1/2"></div>
    <div className="mt-2 h-4 bg-gray-300 rounded w-1/4"></div>
    <div className="mt-2 h-6 bg-gray-300 rounded w-1/3"></div>
  </div>
);

export default function ProductCardSkeleton() {
  return (
    <div className="mt-7 flex flex-wrap justify-start items-center gap-4 mb-20">
      {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
