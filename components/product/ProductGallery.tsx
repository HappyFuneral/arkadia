"use client";

import { useState } from "react";

export default function ProductGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(images[0]);

  return (
    <div>
      {/* Main Image */}
      <div className="w-full rounded-xl bg-zinc-900 overflow-hidden">
        <img
          src={active}
          alt="Termék kép"
          className="w-full h-96 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 overflow-x-auto">
        {images.map((img) => (
          <div
            key={img}
            className={`flex-shrink-0 h-20 w-20 rounded-lg cursor-pointer overflow-hidden border-2 transition-all duration-300 ${
              active === img
                ? "border-orange-500 scale-105 shadow-lg"
                : "border-transparent hover:scale-105 hover:shadow-md"
            }`}
            onClick={() => setActive(img)}
          >
            <img
              src={img}
              alt="Thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
