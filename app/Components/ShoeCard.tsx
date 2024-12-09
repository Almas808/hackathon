export interface ProductCardProps {
  imageSrc: string;
  productName: string;
  category: string;
  price: string;
}

import * as React from "react";

export const ShowCard: React.FC<ProductCardProps> = ({
  imageSrc,
  productName,
  category,
  price
}) => {
  return (
    <article className="flex flex-col text-base leading-relaxed max-w-[350px]">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${productName} - ${category}`}
        className="object-contain w-full aspect-square"
      />
      <div className="flex gap-10 self-start mt-5 bg-white">
        <div className="flex flex-col pr-1">
          <h2 className="font-medium text-neutral-900">{productName}</h2>
          <p className="text-neutral-500">{category}</p>
        </div>
        <div className="self-start font-medium text-right text-neutral-900">
          {price}
        </div>
      </div>
    </article>
  );
}

export default ShowCard;