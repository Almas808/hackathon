import * as React from "react";

type NavigationItemProps = {
    title: string;
    items: string[];
  };
  
  type NavigationSectionProps = {
    items: NavigationItemProps[];
  };
  
  export type { NavigationItemProps, NavigationSectionProps };

const NavigationItem: React.FC<NavigationItemProps> = ({ title, items }) => {
    return (
      <div className="flex flex-col grow text-base font-medium leading-relaxed text-neutral-500 max-md:mt-10">
        <div className="self-start text-neutral-900">{title}</div>
        {items.map((item, index) => (
          <div
            key={item}
            className={`${index === 0 ? "mt-9" : "mt-6"} self-start`}
            role="menuitem"
            tabIndex={0}
          >
            {item}
          </div>
        ))}
      </div>
    );
  };

const navigationData = [
  {
    title: "Icons",
    items: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"]
  },
  {
    title: "Shoes",
    items: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"]
  },
  {
    title: "Clothing",
    items: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"]
  },
  {
    title: "Kids'",
    items: [
      "Infant & Toddler Shoes",
      "Kids' Shoes",
      "Kids' Jordan Shoes",
      "Kids' Basketball Shoes"
    ]
  }
];

 export default function LastIcons(){
    return(
    <nav className="max-w-[855px] ml-[300px] mt-[100px]" role="navigation" aria-label="Main navigation">
      <div className="flex gap-5 max-md:flex-col">
        {navigationData.map((section, index) => (
          <div
            key={section.title}
            className={`flex flex-col ${
              index === 0 ? "w-[15%]" : index === 1 ? "w-[22%]" : index === 2 ? "w-[29%]" : "w-[33%]"
            } ${index !== 0 ? "ml-5" : ""} max-md:ml-0 max-md:w-full`}
          >
            <NavigationItem title={section.title} items={section.items} />
          </div>
        ))}
      </div>
    </nav>
  );
};