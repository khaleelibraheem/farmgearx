import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="container mx-auto mt-8 animate-pulse">
      <div className="px-4 lg:px-20">
        {/* Breadcrumb Skeleton */}
        <div className="h-4 bg-gray-300 rounded w-3/4 sm:w-1/4 mb-8"></div>
      </div>
      <div className="mt-8 flex flex-wrap md:flex-nowrap gap-10 pb-16 px-4 lg:px-20">
        {/* Image Skeleton */}
        <div className="w-full md:w-[60%] h-[200px] sm:h-[320px] md:h-[450px] lg:h-[570px] bg-gray-300 rounded-md"></div>

        {/* Details Skeleton */}
        <div className="w-full md:w-[35%] space-y-4">
          <div className="h-4 bg-gray-300 rounded w-full sm:w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 sm:w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 sm:w-2/3"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2 sm:w-1/4"></div>
          {/* Specifications Skeleton */}
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-4 bg-gray-300 rounded w-full"></div>
            ))}
          </div>
          {/* Button Skeleton */}
          <div className="mt-8 h-10 bg-gray-300 rounded w-1/2 sm:w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
