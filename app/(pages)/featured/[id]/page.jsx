import { DatePicker } from "@/components/ui/datePicker";
import { featuredEquipments } from "@/lib/data";
import Image from "next/image";

async function getEquipment(name) {
  const equipment = featuredEquipments.find(
    (equipment) => name === equipment.name
  );

  return {
    details: equipment || null,
  };
}

export default async function FeaturedEquipment({ params }) {
  const { details } = await getEquipment(params.id);
  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="flex flex-wrap md:flex-nowrap gap-10 pb-16">
          <div className="md:w-[65%]">
            <Image
              src={details.image}
              alt={details.name}
              className="h-[400px] md:h-[600px] object-cover rounded-md"
            />
          </div>

          <div className="md:w-[35%]">
            <h2 className="text-2xl font-bold mb-2">{details.name}</h2>

            <p className="text-gray-600 mb-2">{details.description}</p>

            <p>{details.rating}</p>

            <div className="mb-4 mt-2">
              <h3 className="mt-2 text-gray-500 text-lg tracking-tight">
                Starting at
              </h3>
              <h3 className="mt-1 font-semibold tracking-tight text-3xl">
                {details.price}/day
              </h3>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="bg-green-500 text-white py-2 px-4 rounded inline-block"
              >
                Book Now
              </a>
            </div>

            <div className="mt-4">
              <p className="text-lg font-bold">Equipment Owner:</p>
              <p className="text-gray-600">
                John Doe | Location: Farmville, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
