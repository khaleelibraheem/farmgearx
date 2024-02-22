"use client";

import { useEffect, useState } from "react";
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
import ProductCardSkeleton from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

// Debounce function to limit the rate at which a function is executed
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default function Browse() {
  const [inputValue, setInputValue] = useState("");
  const [filteredEquipments, setFilteredEquipments] = useState(equipments);
  const [sortOrder, setSortOrder] = useState("");
  const itemsPerPage = 8;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemsLoaded, setItemsLoaded] = useState(itemsPerPage); // New state to track loaded items

  useEffect(() => {
    // Simulate fetching data
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  function filterAndSort(value, sort) {
    let filtered = equipments.filter((equipment) =>
      equipment.name.toLowerCase().includes(value.toLowerCase())
    );

    if (sort === "price") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "name") {
      filtered.sort((a, b) => a.model.localeCompare(b.model));
    }

    setFilteredEquipments(filtered);
    setItemsLoaded(itemsPerPage); // Reset to initial items per load on new filter
  }

  const debouncedFilter = debounce(filterAndSort, 300);

  function onTyping(e) {
    const value = e.target.value;
    setInputValue(value);
    debouncedFilter(value, sortOrder);
  }

  function onSortChange(value) {
    setSortOrder(value);
    filterAndSort(inputValue, value);
  }

  // Load more items handler
  const loadMoreItems = () => {
    setItemsLoaded((prevItemsLoaded) => prevItemsLoaded + 4);
  };

  // Adjusted logic to slice currentItems based on itemsLoaded
  const currentItems = filteredEquipments.slice(0, itemsLoaded);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="max-w-[1300px] m-auto px-6">
      <div className="bg-[url(/browse_bg.jpg)] bg-center bg-no-repeat bg-cover rounded-lg mt-3 h-[150px] sm:h-[300px] text-white grid place-content-center">
        <Input
          className="bg-white text-black w-[300px] sm:w-[400px] rounded-md tracking-tight"
          placeholder="Search Equipments"
          value={inputValue}
          onChange={onTyping}
        />
      </div>
      <div className="mt-10 sm:mt-20 flex justify-between flex-col sm:flex-row gap-5">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {inputValue.length == 0
            ? "All Equipments"
            : ` Search results for "${inputValue}"`}
        </h1>

        <Select onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="reset">Default</SelectItem>
            <SelectItem value="price">Sort by Price</SelectItem>
            <SelectItem value="name">Sort by Name</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <ProductCardSkeleton />
      ) : (
        <div>
          <div className="flex flex-wrap gap-4 mt-7 mb-20 justify-center sm:justify-normal">
            {currentItems.length === 0 ? (
              <h1>No equipments found</h1>
            ) : (
              currentItems.map((equipment) => (
                <ProductCard
                  className="max-w-[300px] rounded-md p-2 sm:p-4 border sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  key={equipment.id}
                  equipment={equipment}
                />
              ))
            )}
          </div>
          {itemsLoaded < filteredEquipments.length && (
            <div className="grid place-items-center">
              <Button
                onClick={loadMoreItems}
                className="bg-[#4CAF50] rounded-[5px] hover:bg-[#45a049] transition-colors mb-20"
              >
                Load More...
              </Button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
