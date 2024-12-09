// import React from "react";

// export interface HeroImageProps {
//     src: string;
//     alt: string;
//   }
  
//   export interface CTAButtonProps {
//     label: string;
//     onClick?: () => void;
//   }

//   export interface CategoryCardProps {
//     title: string;
//     imageSrc: string;
//   }
  
//   export interface CategoryData {
//     title: string;
//     imageSrc: string;
//   }

// const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => (
//     <img
//       loading="lazy"
//       src={src}
//       alt={alt}
//       className="object-contain self-stretch mt-7 w-full aspect-[1.92] max-md:max-w-full"
//     />
//   );

//   const CTAButton: React.FC<CTAButtonProps> = ({ label, onClick }) => (
//     <button
//       onClick={onClick}
//       className="overflow-hidden py-2 pr-6 pl-5 mt-8 text-center text-white whitespace-nowrap bg-neutral-900 rounded-[30px] max-md:px-5"
//       aria-label={label}
//     >
//       {label}
//     </button>
//   );

//   const EssentialsSection: React.FC = () => {
//     const categories: CategoryData[] = [
//       {
//         title: "Men's",
//         imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6c00cc2605d33fdadf6ebeb5a150befe48645d01d0a9ab3a05945efc18f93de?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
//       },
//       {
//         title: "Women's",
//         imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/002859e532bfabc533fffcba14319e15d20033e2ab9755d6e1cb605d68f0c69f?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
//       },
//       {
//         title: "Kids'",
//         imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/24188e8c2b0d2e45e75e34b2e55c1611c690f578ae295bdb5dc56aa6cd41570f?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
//       }
//     ];
// }

//     const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageSrc }) => {
//         return (
//           <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
//             <div className="flex relative flex-col items-start px-12 pt-96 pb-12 w-full text-base font-medium leading-relaxed whitespace-nowrap min-h-[540px] text-neutral-900 max-md:px-5 max-md:pt-24 max-md:mt-3 max-md:max-w-full">
//               <img
//                 loading="lazy"
//                 src={imageSrc}
//                 alt={`${title} category`}
//                 className="object-cover absolute inset-0 size-full"
//               />
//               <div 
//                 role="button"
//                 tabIndex={0}
//                 className="overflow-hidden relative px-6 py-2 bg-white rounded-[30px] max-md:px-5"
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter' || e.key === ' ') {
//                     e.preventDefault();
//                   }
//                 }}
//               >
//                 {title}
//               </div>
//             </div>
//           </div>
//         );

// export default function LastSection(){
//     return(
//         <div>

// <section className="flex flex-col items-center text-base font-medium leading-relaxed text-neutral-900" aria-labelledby="section-title">
//       <h2 id="section-title" className="self-start text-2xl leading-none">
//         Don't Miss
//       </h2>
      
//       <HeroImage
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2b64b5e2dab6531c428fa629ecc1c0fa1d6d864ef5a960813c926c529cfa8f3?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
//         alt="Flight essentials collection showcase"
//       />
      
//       <h1 className="mt-12 text-5xl leading-none text-center uppercase max-md:mt-10 max-md:max-w-full max-md:text-4xl">
//         FLIGHT ESSENTIALS
//       </h1>
      
//       <p className="mt-6 text-center max-md:max-w-full">
//         Your built-to-last, all-week wears—but with style only Jordan Brand can
//         deliver.
//       </p>
      
//       <CTAButton label="Shop" />
//     </section>


//     <section aria-label="Essential Categories" className="flex flex-col">
//       <h2 className="self-start text-2xl font-medium leading-none text-neutral-900">
//         The Essentials
//       </h2>
//       <div className="mt-7 w-full max-md:max-w-full">
//         <div className="flex gap-5 max-md:flex-col">
//           {categories.map((category, index) => (
//             <CategoryCard
//               key={index}
//               title={category.title}
//               imageSrc={category.imageSrc}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//         </div>
//     )
// }


import React from "react";

// Interfaces
export interface HeroImageProps {
  src: string;
  alt: string;
}

export interface CTAButtonProps {
  label: string;
  onClick?: () => void;
}

export interface CategoryCardProps {
  title: string;
  imageSrc: string;
}

export interface CategoryData {
  title: string;
  imageSrc: string;
}

// Components
const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain self-stretch mt-7 w-full aspect-[1.92] max-md:max-w-full"
  />
);

const CTAButton: React.FC<CTAButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="overflow-hidden py-2 pr-6 pl-5 mt-8 text-center text-white whitespace-nowrap bg-neutral-900 rounded-[30px] max-md:px-5"
    aria-label={label}
  >
    {label}
  </button>
);

// Data for categories
const categories: CategoryData[] = [
  {
    title: "Men's",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6c00cc2605d33fdadf6ebeb5a150befe48645d01d0a9ab3a05945efc18f93de?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d",
  },
  {
    title: "Women's",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/002859e532bfabc533fffcba14319e15d20033e2ab9755d6e1cb605d68f0c69f?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d",
  },
  {
    title: "Kids'",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/24188e8c2b0d2e45e75e34b2e55c1611c690f578ae295bdb5dc56aa6cd41570f?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d",
  }
];

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageSrc }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col items-start px-12 pt-96 pb-12 w-full text-base font-medium leading-relaxed whitespace-nowrap min-h-[540px] text-neutral-900 max-md:px-5 max-md:pt-24 max-md:mt-3 max-md:max-w-full">
        <img
          loading="lazy"
          src={imageSrc}
          alt={`${title} category`}
          className="object-cover absolute inset-0 size-full"
        />
        <div 
          role="button"
          tabIndex={0}
          className="overflow-hidden relative px-6 py-2 bg-white rounded-[30px] max-md:px-5"
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default function LastSection() {
  return (
    <div>
      <section className="flex flex-col items-center text-base font-medium leading-relaxed text-neutral-900" aria-labelledby="section-title">
        <h2 id="section-title" className="self-start text-2xl leading-none">
          Don't Miss
        </h2>
        
        <HeroImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2b64b5e2dab6531c428fa629ecc1c0fa1d6d864ef5a960813c926c529cfa8f3?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
          alt="Flight essentials collection showcase"
        />
        
        <h1 className="mt-12 text-5xl leading-none text-center uppercase max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          FLIGHT ESSENTIALS
        </h1>
        
        <p className="mt-6 text-center max-md:max-w-full">
          Your built-to-last, all-week wears—but with style only Jordan Brand can
          deliver.
        </p>
        
        <CTAButton label="Shop" />
      </section>

      <section aria-label="Essential Categories" className="flex flex-col">
        <h2 className="self-start text-2xl font-medium leading-none text-neutral-900">The Essentials</h2>
        <div className="mt-7 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                imageSrc={category.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
