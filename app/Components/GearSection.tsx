import * as React from "react";

export interface ProductCardProps {
    title: string;
    subtitle: string;
    price: string;
    imageUrl: string;
    imageAlt: string;
  }
  
  export interface CategorySectionProps {
    label: string;
    images: Array<{
      src: string;
      alt: string;
    }>;
  }



const ProductCard: React.FC<ProductCardProps> = ({
    title,
    subtitle,
    price,
    imageUrl,
    imageAlt
  }) => {
    return (
      <div className="flex flex-col w-full max-md:mt-3">
        <img
          loading="lazy"
          src={imageUrl}
          alt={imageAlt}
          className="object-contain w-full aspect-square"
        />
        <div className="flex gap-1 self-start mt-5 bg-white">
          <div className="flex flex-col pr-3.5">
            <div className="text-base font-medium leading-relaxed text-neutral-900">
              {title}
            </div>
            <div className="text-base leading-6 text-neutral-500">
              {subtitle}
            </div>
          </div>
          <div className="self-start text-base font-medium leading-relaxed text-right text-neutral-900">
            {price}
          </div>
        </div>
      </div>
    );
  };

  const CategorySection: React.FC<CategorySectionProps> = ({
    label,
    images
  }) => {
    return (
      <div className="flex gap-3">
        <div className="grow my-auto">{label}</div>
        {images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image.src}
            alt={image.alt}
            className="object-contain shrink-0 w-12 rounded-3xl aspect-square"
          />
        ))}
      </div>
    );
  };

const products = [
  {
    title: "Nike Dri-FIT ADV TechKnit Ultra",
    subtitle: "Men's Short-Sleeve Running Top",
    price: "₹ 3 895",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/cf0c6e964bc2aa183bbf1b7033b58487a1f39c083e185db9ad5344c26ea796f9?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d",
    imageAlt: "Nike Dri-FIT ADV TechKnit Ultra Running Top"
  },
  {
    title: "Nike Dri-FIT Challenger",
    subtitle: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: "₹ 2 495",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f9e789b68b34f1ceb801d9ed0ebb1ba9c67aa43d48d31eaeeeb9f726a6ec003?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d",
    imageAlt: "Nike Dri-FIT Challenger Versatile Shorts"
  },
  {
    title: "Nike Dri-FIT ADV Run Division",
    subtitle: "Women's Long-Sleeve Running Top",
    price: "₹ 5 295",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/925c57a9d404f3b91ecb8bc1f25f6f9f5024bf0c8c54535deba30dca910aed7c?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d",
    imageAlt: "Nike Dri-FIT ADV Run Division Running Top"
  },
  {
    title: "Nike Fast",
    subtitle: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
    price: "₹ 3 795",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7425136826756ac1076cc82a07b153fb465f3ce17ded067484bc485c1f78cfc?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d",
    imageAlt: "Nike Fast Running Leggings"
  }
];

const categories = [
  {
    label: "Shop Men's",
    images: [
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd0d5f834cd0d97845ef2d267d9e9f81b716a80e5a913650d332f39c17aa93c1?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d", alt: "Men's category image 1" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b88b2581b040fd9318ed960e8918dd2e4825656c814f961a779fb2283fb7c138?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d", alt: "Men's category image 2" }
    ]
  },
  {
    label: "Shop Women's",
    images: [
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7141f9fd93e5b51385396a4a33057219746326f7eb37fb3df1cde05796ddd152?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d", alt: "Women's category image 1" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d2bbd6a7e8c30ec07ad36f3d6ed129a71b998bec9991307cbbe4b5098baf5f9?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d", alt: "Women's category image 2" }
    ]
  }
];

export default function GearUpPage(){
  return (
    <div className="flex flex-col items-end">
      <h1 className="self-start text-2xl font-medium leading-none text-neutral-900">
        Gear Up
      </h1>
      <div className="flex flex-wrap gap-5 justify-between mt-7 mr-11 max-w-full text-base font-medium leading-relaxed text-neutral-900 w-[882px] max-md:mr-2.5">
        {categories.map((category, index) => (
          <CategorySection
            key={index}
            label={category.label}
            images={category.images}
          />
        ))}
      </div>
      <div className="mt-3 w-full max-w-[1290px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <ProductCard {...products[0]} />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <ProductCard {...products[1]} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <ProductCard {...products[2]} />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <ProductCard {...products[3]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};