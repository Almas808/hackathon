
import * as React from 'react';
import ProductCard, { ShowCard } from './ShoeCard';
import { Button } from './Button';

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const shoeData = [
  {
    name: 'Nike Air Max Pulse',
    category: "Women's Shoes",
    price: '₹ 13 995',
    imageSrc: '/shoe2.png',
    productName: 'Nike Air Max Pulse',
  },
  {
    name: 'Nike Air Max Pulse',
    category: "Men's Shoes",
    price: '₹ 13 995',
    imageSrc: '/shoe1.png',
    productName: 'Nike Air Max Pulse',
  },
  {
    name: 'Nike Air Max 97 SE',
    category: "Men's Shoes",
    price: '₹ 16 995',
    imageSrc: '/shoe1.png',
    productName: 'Nike Air Max 97 SE',
  },
  // {
  //   name: 'Nike Air Max SYSTM',
  //   category: "Women's Shoes",
  //   price: 'Price Not Available', // Fallback for missing price
  //   imageSrc: 'https://example.com/image4.jpg',
  //   productName: 'Nike Air Max SYSTM',
  // },
];

const ProductImage: React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain ${className}`}
    />
  );
};

const NikeShowcase: React.FC = () => {
  return (
    <main className="flex flex-col items-center pl-12 w-full max-md:pl-5 max-md:max-w-full">
      {/* Section: Product Introduction */}
      <section aria-label="Product Introduction">
        <h2 className="mt-12 text-base font-medium leading-relaxed text-center text-neutral-900 max-md:mt-10">
          First Look
        </h2>
        <h1 className="mt-1 text-6xl font-medium leading-none text-center uppercase text-neutral-900 max-md:max-w-full max-md:text-4xl">
          Nike Air Max Pulse
        </h1>
        <p className="pr-64 pl-64 mt-6 text-base leading-6 text-center text-neutral-900 max-md:px-5 max-md:max-w-full">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          <br />
          —designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex flex-wrap gap-1.5 items-start pt-1.5 pr-96 pl-96 mt-6 max-md:px-5 max-md:max-w-full">
          <Button>Notify Me</Button>
          <Button>Shop Air Max</Button>
        </div>
      </section>

      {/* Section: Best of Air Max */}
      <section aria-label="Best of Air Max" className="w-full">
        <div className="flex flex-wrap gap-10 self-start mt-20 w-full font-medium max-w-[1344px] text-neutral-900 max-md:mt-10 max-md:max-w-full">
          <h2 className="my-auto text-2xl leading-none">Best of Air Max</h2>
          <div className="flex flex-1 gap-3 items-center pl-2 text-base leading-relaxed whitespace-nowrap ">
            <div className="self-stretch my-auto ml-auto">Shop</div>
            <ProductImage
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe039c88f88b73ad3dc9b103b2b1c7573a18dec0c236ebfb9d9d0e78eba5bb7d?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
              alt="Air Max Navigation Item 1"
              className="shrink-0 self-stretch my-auto w-12 rounded-3xl aspect-square"
            />
            <ProductImage
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f224ec19f208d447b08c9e85d345bf436672226bf9e149af68000fadd58dcc08?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
              alt="Air Max Navigation Item 2"
              className="shrink-0 self-stretch my-auto w-12 rounded-3xl aspect-square"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-5 justify-between self-stretch mt-5 w-full text-base leading-relaxed max-md:max-w-full">
          {shoeData.map((shoe, index) => (
            <ShowCard key={index} {...shoe} />
          ))}
        </div>
      </section>

      {/* Section: Featured Content */}
      <section aria-label="Featured Content">
        <h2 className="self-start mt-32 text-2xl font-medium leading-none text-neutral-900 max-md:mt-10">
          Featured
        </h2>
        <ProductImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09fa63d68cf17195a60291d60bd9714db2319ccf0dc19c24ea35075706d20f4e?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
          alt="Featured Nike Air Max"
          className="object-contain self-start mt-7 w-full aspect-[1.92] max-w-[1344px] max-md:max-w-full"
        />
        <h2 className="mt-12 text-6xl font-medium leading-none text-center uppercase text-neutral-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Step into what feels good
        </h2>
        <p className="mt-6 text-base leading-relaxed text-center text-neutral-900 max-md:max-w-full">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <div className='ml-[550px] mt-10'>
          <Button>Find Your Shoe</Button>
        </div>
      </section>
    </main>
  );
};

export default NikeShowcase;
