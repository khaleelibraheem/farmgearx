import Image from "next/image";
import { Button } from "./button";

export default function ProductCard({ equipment }) {
  return (
    <div className="max-w-[320px] rounded-md p-2 sm:p-4 border">
      <Image
        src={equipment.image}
        alt={equipment.name}
        width={300}
        className="rounded"
      />
      <h2 className="font-bold text-lg mt-5">{equipment.name}</h2>
      <p className="text-sm text-gray-500">{equipment.description}</p>
      <h3 className="mt-2 font-bold">{equipment.price}</h3>
      <Button className="mt-3 bg-[#4CAF50] hover:bg-[#45a049]">Book</Button>
    </div>
  );
}
