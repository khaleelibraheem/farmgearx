import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ equipment }) {
  return (
    <div className="max-w-[320px] rounded-md p-2 sm:p-4 border">
      <Link href={`/equipments/${equipment.id}`}>
        <Image
          src={equipment.image}
          alt={equipment.name}
          className="w-[300px] h-[310px] object-cover object-center rounded"
        />
        <h2 className="text-[12px] md:text-md uppercase font-semibold mt-5 text-gray-600">
          {equipment.name}
        </h2>
        <h2 className="text-lg font-bold tracking-tight">{equipment.model}</h2>
        <h3 className="mt-1 text-gray-500 text-sm tracking-tight">
          Starting at
        </h3>
        <h3 className="mt-1 font-semibold tracking-tight text-xl">
          {equipment.price}/day
        </h3>
      </Link>
    </div>
  );
}
