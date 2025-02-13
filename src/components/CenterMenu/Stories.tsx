"use client";
import Image from "next/image";
import React, { useRef } from "react";

const Stories = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to handle mouse wheel scrolling
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current) {
      // Prevent the default vertical scroll behavior
      event.preventDefault();
      // Scroll horizontally instead
      scrollContainerRef.current.scrollLeft += event.deltaY;
    }
  };
  return (
    <div
      className="p-4 bg-zinc-900 rounded-lg shadow-md shadow-zinc-600 overflow-x-auto text-xs scrollbarHide snap-mandatory"
      ref={scrollContainerRef}
      onWheel={handleWheel}
      >
      <div
        className="flex px-1 gap-5 w-max pt-1.5 overflow-x-auto scroll-smooth snap-mandatory"
        ref={scrollContainerRef}
        onWheel={handleWheel}
      >
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={"https://profile-candra.vercel.app/_DSC0816%20(4x6%20Jas).png"}
            alt="..."
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Mathilda</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={"https://profile-candra.vercel.app/_DSC0816%20(4x6%20Jas).png"}
            alt="..."
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Lee</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={"https://profile-candra.vercel.app/_DSC0816%20(4x6%20Jas).png"}
            alt="..."
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Polly</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={"https://profile-candra.vercel.app/_DSC0816%20(4x6%20Jas).png"}
            alt="..."
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Herman</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={"https://profile-candra.vercel.app/_DSC0816%20(4x6%20Jas).png"}
            alt="..."
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Timothy</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={"https://profile-candra.vercel.app/_DSC0816%20(4x6%20Jas).png"}
            alt="..."
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Charles</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={"https://profile-candra.vercel.app/_DSC0816%20(4x6%20Jas).png"}
            alt="..."
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Jorge</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
