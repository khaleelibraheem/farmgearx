import { ChevronRight } from "lucide-react";

export default function Breadcrum({ category, equipment }) {
  return (
    <div className="flex items-center">
      <p className="text-gray-500 tracking-tight text-[15px]">{category}</p>
      <ChevronRight size={18} />
      <p className="text-gray-500 tracking-tight text-[15px]">
        {equipment.name}
      </p>
      <ChevronRight size={18} />
      <p className="text-[15px]">{equipment.model}</p>
    </div>
  );
}
