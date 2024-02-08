import SectionTitle from "./ui/sectionTitle";
import { testimonials } from "@/lib/data";
import TestimonialCard from "./ui/testimonialCard";
export default function Testimonials() {
  return (
    <div className="mt-36 mb-36">
      <SectionTitle title="Testimonials" />
      <h1 className="text-center text-[30px] sm:text-[40px] font-bold mt-10">
        Plowing Progress: What Farmers Say
      </h1>
      <div className="grid sm:grid-cols-2 gap-6 mt-16">
        {testimonials.map((testimony) => (
          <TestimonialCard data={testimony} key={testimony.farmerName} />
        ))}
      </div>
    </div>
  );
}
