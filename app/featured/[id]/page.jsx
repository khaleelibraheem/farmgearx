"use client";

import SectionTitle from "@/components/ui/sectionTitle";
import { equipments, featuredEquipments } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/ui/productCard";
import Breadcrum from "@/components/ui/breadcrum";
import ProductDetailsSkeleton from "../../equipments/skeleton";
import { useState, useEffect } from "react";

function getEquipment(id) {
  const equipment = featuredEquipments.find((equipment) => id == equipment.id);

  return {
    details: equipment || null,
  };
}

export default function FeaturedEquipment({ params }) {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = getEquipment(params.id);
      setTimeout(() => {
        setDetails(data.details);
        setLoading(false);
      }, 2000); // Simulate a loading time of 2 seconds
    }
    fetchData();
  }, [params.id]);

  if (loading) {
    return <ProductDetailsSkeleton />;
  }
  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="lg:px-20">
          <Breadcrum category="Featured" equipment={details} />
        </div>
        <div className="mt-8 flex flex-wrap md:flex-nowrap gap-10 pb-16 lg:px-20">
          <div className="md:w-[60%]">
            <Image
              src={details.image}
              alt={details.name}
              className="h-[400px] md:h-[570px] object-cover rounded-md"
            />
          </div>

          <div className="md:w-[35%]">
            <h2 className="text-sm md:text-md uppercase font-semibold mb-2">
              {details.name}
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {details.model}
            </h1>
            <p className="mt-3">{details.rating}</p>

            <p className="text-gray-600 mt-4 mb-2 tracking-tight">
              {details.description}
            </p>

            <div className="mb-4 mt-5">
              <h3 className="text-sm md:text-md uppercase font-semibold mb-2">
                RATE
              </h3>
              <h3 className="mt-1 font-semibold tracking-tight text-3xl">
                {details.price}/day
              </h3>
            </div>
            <div>
              <h2 className="text-sm md:text-md uppercase font-semibold mb-2">
                Specifications
              </h2>

              {details.specifications.map((specification, id) => (
                <ul key={id} className=" list-disc pl-4">
                  <li className="text-gray-600 tracking-tight text-[16px]">
                    {specification}
                  </li>
                </ul>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/browse"
                className="inline-block py-[8px] px-[15px] tracking-tight bg-[#4CAF50] text-white rounded-[5px] hover:bg-[#45a049] transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Related Equipment Section */}
        <div>
          <SectionTitle title="Related Equipments" />

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mt-14 mb-10 mx-7"
          >
            <CarouselContent>
              {equipments.map((equipment) => (
                <CarouselItem
                  key={equipment.id}
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <ProductCard
                    className="max-w-[320px] rounded-md p-2 sm:p-4 border"
                    equipment={equipment}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
