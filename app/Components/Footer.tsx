import * as React from 'react';

export interface FooterLinkProps {
    text: string;
    className?: string;
  }
  
  export interface FooterSectionProps {
    title: string;
    links: FooterLinkProps[];
  }
  
  export interface SocialLinkProps {
    icon: string;
    alt: string;
    href: string;
  }

const FooterLink: React.FC<FooterLinkProps> = ({ text, className = '' }) => (
    <div className={`mt-7 text-xs leading-3 ${className}`} tabIndex={0} role="link">
      {text}
    </div>
  );

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
    <div className="flex flex-col items-start text-xs leading-3 text-zinc-500 max-md:mt-10">
      <div className="text-xs tracking-wide leading-loose text-white uppercase">
        {title}
      </div>
      {links.map((link, index) => (
        <FooterLink key={index} {...link} />
      ))}
    </div>
  );

const helpLinks = [
  { text: "Order Status" },
  { text: "Delivery", className: "leading-loose" },
  { text: "Returns", className: "leading-loose" },
  { text: "Payment Options" },
  { text: "Contact Us On Nike.com Inquiries" },
  { text: "Contact Us On All Other Inquiries" }
];

const aboutLinks = [
  { text: "News" },
  { text: "Careers" },
  { text: "Investors", className: "leading-3" },
  { text: "Sustainability", className: "leading-3" }
];

const memberLinks = [
  { text: "Find A Store" },
  { text: "Become A Member" },
  { text: "Sign Up for Email" },
  { text: "Send Us Feedback", className: "leading-loose text-center" },
  { text: "Student Discounts" }
];

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col px-10 pt-10 pb-4 bg-neutral-900 max-md:px-5" role="contentinfo">
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <div className="flex-auto mt-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-1 text-xs leading-3 text-white max-md:mt-10">
                {memberLinks.map((link, index) => (
                  <FooterLink key={index} {...link} />
                ))}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[51%] max-md:ml-0 max-md:w-full">
              <FooterSection title="Get Help" links={helpLinks} />
            </div>
            <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
              <FooterSection title="About Nike" links={aboutLinks} />
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2288a272d48fdc7f6e6a1dc158cf5b81d713dc8a79a14801c9f18f6f1b42ada?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
          alt=""
          className="object-contain shrink-0 max-w-full aspect-[9.09] w-[337px]"
        />
      </div>
      <div className="flex flex-wrap gap-5 justify-between items-start mt-14 w-full max-md:mt-10 max-md:mr-2 max-md:max-w-full">
        <div className="flex gap-4">
          <div className="flex gap-2 items-end self-start pr-2 text-xs leading-none text-white whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/793f520b3bc44392aa2a7c35f6206d4d1578a60888000643545347c167c82a51?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
              alt="India location icon"
              className="object-contain shrink-0 aspect-[1.2] w-[18px]"
            />
            <div>India</div>
          </div>
          <div className="text-xs leading-none basis-auto text-zinc-500">
            © 2023 Nike, Inc. All Rights Reserved
          </div>
        </div>
        <nav className="flex gap-7 mt-2 text-xs leading-loose text-right text-zinc-500">
          <div tabIndex={0} role="link">Guides</div>
          <div tabIndex={0} role="link">Terms of Sale</div>
          <div tabIndex={0} role="link">Terms of Use</div>
          <div tabIndex={0} role="link" className="text-xs leading-3">Nike Privacy Policy</div>
        </nav>
      </div>
    </footer>
  );
};