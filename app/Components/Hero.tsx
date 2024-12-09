"use client"

import * as React from "react";

export interface BannerProps {
  title: string;
  description: string;
  callToAction: string;
}

interface HeroImageProps {
  src: string;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, callToAction }) => {
  return (
    <section 
      className="flex overflow-hidden flex-col items-center px-20 pt-3 text-center bg-neutral-100 text-neutral-900 max-md:px-5"
      role="banner"
      aria-label="Nike App Banner"
    >
      <div className="flex flex-col max-w-full w-[324px]">
        <h1 className="self-center text-base font-medium leading-none">
          {title}
        </h1>
        <p className="pr-3 pl-3 text-xs leading-6">
          {description}{" "}
          <button 
            className="font-medium underline"
            onClick={() => window.location.href = '/download'}
            tabIndex={0}
          >
            {callToAction}
          </button>
        </p>
      </div>
    </section>
  );
};

const HeroImage: React.FC<HeroImageProps> = ({ src, className = "" }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt=""
      className={`object-contain w-full aspect-[1.92] ${className}`}
      role="presentation"
    />
  );
}

export const Hero: React.FC = () => {
  return (
    // Banner section
    <div>
    <main>
      <Banner
        title="Hello Nike App"
        description="Download the app to access everything Nike."
        callToAction="Get Your Great"
      />
    </main>


    {/* //  Hero Section */}

    <section aria-label="Hero Section">
      <HeroImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c80b50a904d265870b34d2286c5112b047c9b9d67c8789278d1c52f33c890d4?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d" />
    </section>
</div>
  );
};

export default Hero;