"use client";
import React from "react";
import Link from "next/link";

// Types
interface NavigationItemProps {
  text: string;
  showDivider?: boolean;
  link: string;
}

interface NavigationData {
  items: NavigationItemProps[];
}

// NavigationItem Component
const NavigationItem: React.FC<NavigationItemProps> = ({ text, showDivider, link }) => {
  return (
    <div className="flex gap-3.5 items-start self-stretch py-3 pr-1">
      <Link href={link} className="text-xs font-medium leading-none">
        {text}
      </Link>
      {showDivider && <div className="text-xs leading-none">|</div>}
    </div>
  );
};

// Navigation Data
const navigationData: NavigationData = {
  items: [
    { text: "Find a Store", link: "/AllProduct", showDivider: true },
    { text: "Help", link: "/ContactUsPage", showDivider: true },
    { text: "Join Us", link: "/JoinUsPage", showDivider: true },
    { text: "Sign In", link: "/login", showDivider: false }
  ]
};

// TopNavigation Component
const TopNavigation: React.FC = () => {
  return (
    <nav className="flex flex-wrap items-center gap-20 text-neutral-900" aria-label="Top navigation">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1793e94d4bb15824ddccdb914ec912a0869c3c14e962267ce799ea3c57cc5136?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
        className="object-contain shrink-0 my-auto w-6 aspect-square"
        alt="Logo"
      />
      <div className="flex items-center ml-auto">
        {navigationData.items.map((item, index) => (
          <NavigationItem
            key={index}
            text={item.text}
            link={item.link}
            showDivider={item.showDivider}
          />
        ))}
      </div>
    </nav>
  );
};

export default TopNavigation;
