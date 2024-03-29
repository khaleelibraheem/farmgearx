"use client";

import * as React from "react";
import Link from "next/link";
import { featuredEquipments } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";
import Testimonials from "./testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionTitle from "./ui/sectionTitle";
import Faqs from "./faqs";
import FeaturedProductCard from "./ui/featuredProductCard";

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section>
      <div className="cover-bg bg-[url(/banner.jpg)] bg-center bg-no-repeat bg-cover rounded-lg mt-3 h-[600px] text-white">
        <div className="text-center flex flex-column items-center justify-center m-auto">
          <div className="max-w-[800px] mt-20 sm:mt-40 tracking-tighter">
            <h1 className="text-[35px] sm:text-[50px] font-bold mb-[20px] tracking-tighter">
              Empowering Farmers Through Smart Equipment Rentals
            </h1>
            <p className="text-[15px] sm:text-[1.1rem] mb-[50px] sm:mb-[30px] tracking-tighter">
              Your one-stop solution for renting top-quality farming equipment.
              Explore a wide range of tools to boost your agricultural
              productivity.
            </p>
            <Link
              href="/browse"
              className="inline-block py-[15px] px-[30px] text-[1.2rem] bg-[#4CAF50] text-white rounded-[5px] hover:bg-[#45a049] transition-colors"
            >
              Browse Equipment
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Equipments Section */}

      <div className=" mt-28">
        <SectionTitle title="Featured Equipments" />

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="mt-14 mb-10 mx-7"
        >
          <CarouselContent>
            {featuredEquipments.map((equipment) => (
              <CarouselItem
                key={equipment.id}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <FeaturedProductCard equipment={equipment} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Frequently asked questions */}
      <Faqs />
    </section>
  );
}
