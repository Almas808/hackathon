// "use client"

// import * as React from 'react';

// export interface ProductCardProps {
//     image: string;
//     tag: string;
//     title: string;
//     subtitle: string;
//     colors: number;
//     price: string;
//   }
  
//   export interface SocialLinkProps {
//     icon: string;
//     alt: string;
//   }
  
//   export interface FooterLinkProps {
//     text: string;
//   }
  
//   export interface CategoryLinkProps {
//     text: string;
//   }
// interface ProductGridProps {
//     products: Array<{
//       image: string;
//       tag: string;
//       title: string;
//       subtitle: string;
//       colors: number;
//       price: string;
//     }>;
//   }
  
//   export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
//     return (
//       <div className="flex gap-5 max-md:flex-col">
//         {products.map((product, index) => (
//           <ProductCard key={index} {...product} />
//         ))}
//       </div>
//     );
//   };

//   export const ProductCard: React.FC<ProductCardProps> = ({
//     image,
//     tag,
//     title,
//     subtitle,
//     colors,
//     price
//   }) => {
//     return (
//       <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
//         <div className="flex flex-col grow items-start text-base max-md:mt-4">
//           <img
//             loading="lazy"
//             src={image}
//             alt={title}
//             className="object-contain self-stretch w-full aspect-square"
//           />
//           <div className="flex flex-col mt-2.5">
//             <div className="font-medium leading-7 text-orange-800">
//               {tag}
//             </div>
//             <div className="flex flex-col pr-1 leading-relaxed">
//               <div className="font-medium text-neutral-900">
//                 {title}
//               </div>
//               <div className="text-neutral-500">{subtitle}</div>
//             </div>
//           </div>
//           <div className="mt-2 leading-relaxed text-center text-neutral-500">
//             {colors} {colors === 1 ? 'Colour' : 'Colours'}
//           </div>
//           {price && (
//             <div className="mt-6 font-medium leading-loose text-neutral-900">
//               MRP : {price}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

// export default function Sidebar(){
//     return (
//       <div className="flex gap-3 self-start text-base text-neutral-900">
//         <div className="flex flex-col py-1 bg-white">
//           <nav className="flex flex-col items-start pr-8 pl-2 text-base font-medium leading-none max-md:pr-5">
//             <ul>
//               <li><a href="#shoes" className="block mt-0">Shoes</a></li>
//               <li><a href="#sports-bras" className="block mt-5">Sports Bras</a></li>
//               <li><a href="#tops" className="block mt-5">Tops & T-Shirts</a></li>
//               <li><a href="#hoodies" className="block mt-5">Hoodies & Sweatshirts</a></li>
//               <li><a href="#jackets" className="block mt-5">Jackets</a></li>
//               <li><a href="#trousers" className="block mt-5">Trousers & Tights</a></li>
//               <li><a href="#shorts" className="block mt-5">Shorts</a></li>
//               <li><a href="#tracksuits" className="block mt-5">Tracksuits</a></li>
//               <li><a href="#jumpsuits" className="block mt-5">Jumpsuits & Rompers</a></li>
//               <li><a href="#skirts" className="block mt-4">Skirts & Dresses</a></li>
//               <li><a href="#socks" className="block mt-5">Socks</a></li>
//               <li><a href="#accessories" className="block mt-5 text-base leading-6">Accessories & Equipment</a></li>
//             </ul>
//           </nav>
//           <div className="flex flex-col items-start px-0.5 py-6 mt-14 w-full whitespace-nowrap border-t border-b border-neutral-200 max-md:mt-10">
//             <div className="flex gap-5 justify-between self-stretch font-medium">
//               <div>Gender</div>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2a2f099d62e496bce315875bf5edae9ae55369621f1e6e0bd59dca389147fb5?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
//                 alt=""
//                 className="object-contain shrink-0 w-3.5 aspect-square"
//               />
//             </div>
//             <div className="flex gap-1.5 mt-7 text-base leading-relaxed">
//               <input type="checkbox" id="men" className="flex shrink-0 w-5 h-5 rounded border border-solid border-stone-300" />
//               <label htmlFor="men" className="my-auto">Men</label>
//             </div>
//             <div className="flex gap-1.5 mt-2">
//               <input type="checkbox" id="women" className="flex shrink-0 w-5 h-5 rounded border border-solid border-stone-300" />
//               <label htmlFor="women" className="my-auto">Women</label>
//             </div>
//             <div className="flex gap-1.5 mt-2">
//               <input type="checkbox" id="unisex" className="flex shrink-0 w-5 h-5 rounded border border-solid border-stone-300" />
//               <label htmlFor="unisex" className="my-auto">Unisex</label>
//             </div>
//           </div>
//         </div>
//         <div className="flex shrink-0 self-start bg-black rounded-lg h-[329px] w-[7px]" aria-hidden="true" />
//       </div>
//     );
//   };


// const products = [
//   {
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/10eef71f259384eb53391d0c439a8a013ee32ec60b74ef38850cf16547d78ef1?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d",
//     tag: "Just In",
//     title: "Nike Air Force 1 Mid '07",
//     subtitle: "Men's Shoes",
//     colors: 1,
//     price: "₹ 10 795.00"
//   },
//   // ... rest of product data
// ];

// export const NikeStore: React.FC = () => {
//   return (
//     <main className="flex flex-col">
//       <section className="self-end mr-14 w-full max-w-[1076px] max-md:mr-2.5 max-md:max-w-full">
//         <ProductGrid products={products} />
//       </section>
      
//       <div className="flex z-10 flex-col px-11 mt-0 w-full max-md:px-5 max-md:mt-0 max-md:max-w-full">
//         <Sidebar />
        
//         <section className="self-end mt-16 w-full max-w-[1076px] max-md:mt-10 max-md:max-w-full">
//           <ProductGrid products={products.slice(3, 6)} />
//         </section>
        
//         {/* Additional product grids */}
//       </div>
      
      
//     </main>
//   );
// };

"use client";

import * as React from "react";

interface ProductCardProps {
  image: string;
  label: string;
  title: string;
  subtitle: string;
  colors: number;
  price: string;
}

interface SidebarProps {
  categories: string[];
}

interface ProductGridProps {
  products: ProductCardProps[];
}

const Sidebar: React.FC<SidebarProps> = ({ categories }) => (
  <div className="flex flex-col gap-4 bg-white p-4 w-1/4 ">
    <nav className="text-base font-medium">
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mt-2">
            <a href={`#${category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}>
              {category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <div className="mt-10 border-t pt-4">
      <div className="font-medium">Gender</div>
      {["Men", "Women", "Unisex"].map((gender) => (
        <label key={gender} className="flex items-center gap-2 mt-2">
          <input type="checkbox" className="w-5 h-5 border-gray-300 rounded" />
          {gender}
        </label>
      ))}
    </div>
  </div>
);

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  label,
  title,
  subtitle,
  colors,
  price,
}) => (
  <div className="flex flex-col w-full max-w-[30%] max-md:max-w-full p-2">
    <img src={image} alt={title} className="object-contain w-full aspect-square" />
    <div className="mt-2 text-orange-800 font-medium">{label}</div>
    <div className="mt-1 text-neutral-900 font-medium">{title}</div>
    <div className="text-neutral-500">{subtitle}</div>
    <div className="mt-2 text-neutral-500">{colors} {colors === 1 ? "Colour" : "Colours"}</div>
    <div className="mt-2 text-neutral-900 font-medium">MRP : ₹ {price}</div>
  </div>
);

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => (
  <div className="flex flex-wrap gap-4 w-3/4 max-md:w-full">
    {products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </div>
);

const NikeStore: React.FC = () => {
  const categories = [
    "Shoes",
    "Sports Bras",
    "Tops & T-Shirts",
    "Hoodies & Sweatshirts",
    "Jackets",
    "Trousers & Tights",
    "Shorts",
    "Tracksuits",
    "Jumpsuits & Rompers",
    "Skirts & Dresses",
    "Socks",
    "Accessories & Equipment",
  ];

  const products = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/10eef71f259384eb53391d0c439a8a013ee32ec60b74ef38850cf16547d78ef1",
      label: "Just In",
      title: "Nike Air Force 1 Mid '07",
      subtitle: "Men's Shoes",
      colors: 1,
      price: "10,795.00",
    },
    {
      image: "/shoe1.png",
      label: "Trending",
      title: "Nike Court Vision Low Next Nature",
      subtitle: "Women's Activewear",
      colors: 3,
      price: "86,95.00",
    },
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/10eef71f259384eb53391d0c439a8a013ee32ec60b74ef38850cf16547d78ef1",
        label: "Just In",
        title: "Nike Air Force 1 Mid '07",
        subtitle: "Men's Shoes",
        colors: 1,
        price: "10,795.00",
      },
    {
        image: "/shoe1.png",
        label: "Trending",
        title: "Nike Court Vision Low Next Nature",
        subtitle: "Women's Activewear",
        colors: 3,
        price: "86,95.00",
      },
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/10eef71f259384eb53391d0c439a8a013ee32ec60b74ef38850cf16547d78ef1",
        label: "Just In",
        title: "Nike Air Force 1 Mid '07",
        subtitle: "Men's Shoes",
        colors: 1,
        price: "10,795.00",
      },
      {
        image: "/shoe1.png",
        label: "Trending",
        title: "Nike Court Vision Low Next Nature",
        subtitle: "Women's Activewear",
        colors: 3,
        price: "86,95.00",
      },  
    ]
  return (
    <main className="flex  gap-6 p-4">
      <Sidebar categories={categories} />
      <ProductGrid products={products} />
    </main>
  );
};

export default NikeStore;
