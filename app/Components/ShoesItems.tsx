"use client"
import * as React from "react";

// Define props interfaces
interface ShoeCardProps {
  name: string;
  category: string;
  price?: string;
}

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
}

// ShoeCard Component
const ShoeCard: React.FC<ShoeCardProps> = ({ name, category, price }) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-md w-[300px] h-[400px] items-start justify-between">
      <div className="flex flex-col pr-2">
        <div className="font-medium text-neutral-900 text-lg mb-2">{name}</div>
        <div className="text-neutral-500 text-sm mb-4">{category}</div>
        {price && (
          <div className="self-start font-medium text-right text-neutral-900 text-sm">{price}</div>
        )}
      </div>
    </div>
  );
};

// ImageCard Component
const ImageCard: React.FC<ImageCardProps> = ({ src, alt, title }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      {title && (
        <div className="self-start ml-2 text-2xl font-medium leading-none text-neutral-900 mb-2">
          {title}
        </div>
      )}
      <img
        loading="lazy"
        src={src}
        alt={alt}
        onError={(e) => {
          e.currentTarget.src = "https://via.placeholder.com/300";
        }}
        className="object-contain w-full aspect-square"
      />
    </div>
  );
};

// Main AirMaxShowcase Component
const shoeData = [
  {
    name: "Nike Air Max Pulse",
    category: "Women's Shoes",
    price: "₹ 13 995",
  },
  {
    name: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: "₹ 13 995",
  },
  {
    name: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    price: "₹ 16 995",
  },
];

const AirMaxShowcase: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Main Showcase Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[1200px]">
        {/* Hero Section */}
        <section className="w-full max-w-[1392px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col justify-between items-center">
            {/* Hero ImageCards */}
            <ImageCard
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/04e60c69a9c525acd3d6bcc51005994335ac7a767f0b6e1a2bcec792141480ce?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
              alt="Best of Air Max"
              title="Best of Air Max"
            />
            <ImageCard
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/871a56cab9ae1c39e891827549fb9108e7e6ef81614c91bcecf82d9a4e2e3a7f?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
              alt="Air Max Featured Model"
            />
            <ImageCard
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/871a56cab9ae1c39e891827549fb9108e7e6ef81614c91bcecf82d9a4e2e3a7f?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
              alt="Air Max Featured Model"
            />
          </div>
        </section>

        {/* Products Section */}
        <section className="flex flex-wrap gap-6 justify-center mt-8 w-full">
          {shoeData.map((shoe) => (
            <ShoeCard
              key={shoe.name} // Use a unique identifier
              name={shoe.name}
              category={shoe.category}
              price={shoe.price}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default AirMaxShowcase;
