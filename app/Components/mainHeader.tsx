import * as React from 'react';

export interface NavLinkProps {
  text: string;
}

export interface IconButtonProps {
  src: string;
  alt: string;
}

export interface SearchBarProps {
  placeholder: string;
}


const navLinks = [
  "New & Featured",
  "Men",
  "Women",
  "Kids",
  "Sale",
  "SNKRS"
];


const NavLink: React.FC<NavLinkProps> = ({ text }) => (
  <div 
    role="menuitem" 
    tabIndex={0}
    className="leading-relaxed text-base font-medium"
  >
    {text}
  </div>
);

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => (
  <div className="flex gap-1.5 p-0.5 my-auto bg-neutral-100 rounded-[100px]">
    <div className="flex overflow-hidden items-start px-2 py-1.5 rounded-[100px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/51d0e7045a5508def5a208327c24896e0e6f5b22054c47d60be52b544a80b189?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
        alt="Search icon"
        className="object-contain w-6 aspect-square"
      />
    </div>
    <div 
      role="searchbox"
      tabIndex={0}
      aria-label="Search"
      className="my-auto text-base font-medium basis-auto text-stone-300"
    >
      {placeholder}
    </div>
  </div>
);


 const IconButton: React.FC<IconButtonProps> = ({ src, alt }) => (
  <div
    role="button"
    tabIndex={0}
    className="flex overflow-hidden items-start p-1.5 w-9 rounded-[100px]"
  >
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain w-6 aspect-square"
    />
  </div>
);



export const NavigationBar: React.FC = () => {
  return (
    <nav className="flex gap-72 items-center px-10 bg-white max-md:px-5" role="navigation">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3b4b74e1b7e3380f922c3e7559e90e707321a0866dcdccdfd1d1e8e71ebc476?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
        alt="Company logo"
        className="object-contain shrink-0 self-stretch aspect-square w-[79px]"
      />
      
      <div 
        role="menu"
        className="flex gap-8 self-stretch my-auto text-base font-medium text-center text-neutral-900 max-md:max-w-full"
      >
        {navLinks.map((text, index) => (
          <NavLink key={index} text={text} />
        ))}
      </div>

      <div className="flex gap-5 self-stretch my-auto ">
        <SearchBar placeholder="Search" />
        <div className="flex gap-3 items-start py-3">
          <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cdab62b695fc83dcc178f8b70a938a919e3130a58833453b88f97c9d2ca290b?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d" alt="Favorite" />
          <IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fe5dffdfa66c58ddfa62c501a4e242154c6578a1b3dd337ea1a8a7bbe83b892?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d" alt="Shopping cart" />
        </div>
      </div>
    </nav>
  );
}