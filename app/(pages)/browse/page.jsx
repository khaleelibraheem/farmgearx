"use client";

import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ui/productCard";
import { equipments } from "@/lib/data";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Browse() {
  const [inputValue, setInputValue] = useState("");
  const [filteredEquipments, setFilteredEquipments] = useState(equipments);

  function filter(value) {
    const filtered = value
      ? equipments.filter((equipment) =>
          equipment.name.toLowerCase().includes(value.toLowerCase())
        )
      : equipments;

    setFilteredEquipments(filtered);
  }

  function onTyping(e) {
    const value = e.target.value;
    setInputValue(value);
    filter(value);
  }

  return (
    <section className="max-w-[1300px] m-auto px-6">
      <div className="bg-[url(/browse_bg.jpg)] bg-center bg-no-repeat bg-cover rounded-lg mt-3 h-[250px] sm:h-[300px] text-white grid place-content-center">
        <Input
          className="bg-white text-black w-[300px] sm:w-[400px] rounded-md tracking-tight"
          placeholder="Search Equipments"
          value={inputValue}
          onChange={onTyping}
        />
      </div>
      <div className="mt-20 flex justify-between flex-col sm:flex-row gap-5">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {inputValue.length == 0
            ? "All Equipments"
            : ` Search results for "${inputValue}"`}
        </h1>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Sort by Price</SelectItem>
            <SelectItem value="dark">Sort by Name</SelectItem>
            <SelectItem value="system">Sort by Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-wrap gap-4 mt-7 mb-40 justify-center sm:justify-normal">
        {filteredEquipments.length === 0 ? (
          <h1>No equipments found</h1>
        ) : (
          filteredEquipments.map((equipment) => (
            <ProductCard
              className="max-w-[300px] rounded-md p-2 sm:p-4 border sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              key={equipment.id}
              equipment={equipment}
            />
          ))
        )}
      </div>
    </section>
  );
}
