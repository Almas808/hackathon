"use client"
import * as React from "react";

export interface ProductDetailsProps {
    title: string;
    description: string;
    price: string;
    imageUrl: string;
  }
  
  export interface AddToCartButtonProps {
    iconUrl: string;
    label: string;
    onClick: () => void;
  }

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ iconUrl, label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="flex overflow-hidden items-start px-6 py-2 text-base font-medium leading-6 text-center text-white bg-neutral-900 rounded-[30px] max-md:px-5"
        aria-label={label}
      >
        <img
          loading="lazy"
          src={iconUrl}
          alt=""
          className="object-contain shrink-0 aspect-square w-[29px]"
        />
        <span className="w-[99px]">{label}</span>
      </button>
    );
  };

const ProductDetails: React.FC<ProductDetailsProps> = ({
    title,
    description,
    price,
    imageUrl
  }) => {
    const handleAddToCart = () => {
      // Handle add to cart functionality
    };
  
    return (
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageUrl}
            alt={title}
            className="object-contain grow w-full aspect-[0.94] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:mt-10">
            <h1 className="text-5xl font-medium leading-10 text-neutral-900 max-md:mr-2 max-md:text-4xl max-md:leading-10">
              {title}
            </h1>
            <div className="flex flex-col pt-6 pb-px mt-2.5 w-full">
              <div className="flex flex-col max-w-full text-neutral-900 w-[375px]">
                <p className="text-base leading-7">{description}</p>
                <div className="pt-8 pr-16 pb-6 max-w-full text-4xl font-medium leading-none w-[294px] max-md:pr-5">
                  {price}
                </div>
              </div>
              <AddToCartButton
                iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/fe98e78eb9c4bacf813173b9c10aa6e9c6fe7f1379b09b5dbee4647bac022b3a?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
                label="Add To Cart"
                onClick={handleAddToCart}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default function ProductCard(){
  return (
    <main>
      <ProductDetails
        title="Nike Air Force 1 PLT.AF.ORM"
        description="Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        price="₹ 8 695.00"
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/62f51912c65663e3df46774f1842b11d9fbd19e27cf40a3981d11ed091b1a206?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
      />
    </main>
  );
};