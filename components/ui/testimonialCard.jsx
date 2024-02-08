import Image from "next/image";

export default function TestimonialCard({ data }) {
  return (
    <div className="border bg-gray-50 flex text-center flex-col gap-5 p-9 items-center">
      <Image
        src={data.imageUrl}
        alt="farmer"
        className="w-16 rounded-full h-16 object-cover object-center"
      />
      <div>
        <p className="text-sm tracking-tight mb-3">&quot;{data.text}&quot;</p>
        <h3 className="font-bold tracking-tight">{data.farmerName} </h3>
      </div>
    </div>
  );
}
