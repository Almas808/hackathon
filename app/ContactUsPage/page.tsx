"use client"

import * as React from 'react';

interface ContactSectionProps {
    methods: ContactMethod[];
  }
  interface FAQSectionProps {
    faqs: FAQItem[];
  }

  export interface FAQItem {
    question: string;
    answer: string;
  }
  
  export interface RelatedLink {
    text: string;
  }
  
  export interface ContactMethod {
    icon: string;
    title: string;
    description: string[];
  }
  
  export const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
    return (
      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="mt-7 text-xl font-medium leading-tight text-neutral-900">
          FAQs
        </h2>
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="mt-5 text-base font-bold leading-7 text-neutral-900">
              {faq.question}
            </h3>
            <p className="self-stretch mt-2 text-base leading-7 text-neutral-900 max-md:mr-2.5 max-md:max-w-full">
              {faq.answer}
            </p>
          </div>
        ))}
      </section>
    );
  };

  export const ContactSection: React.FC<ContactSectionProps> = ({ methods }) => {
    return (
      <section aria-labelledby="contact-heading" className="flex flex-col grow items-center pt-1.5 pb-40 pl-12 w-full text-base text-center bg-white bg-opacity-0 text-neutral-900 max-md:pb-24 max-md:mt-10">
        <h2 id="contact-heading" className="ml-6 text-3xl font-medium leading-none">
          CONTACT US
        </h2>
        {methods.map((method, index) => (
          <div key={index} className="flex flex-col items-center w-full mt-10">
            <img
              loading="lazy"
              src={method.icon}
              alt=""
              className="object-contain w-16 aspect-square"
            />
            <div className="flex flex-col items-center px-px mt-7 w-full">
              <div className="font-medium">{method.title}</div>
              {method.description.map((desc, i) => (
                <div key={i} className="max-w-full leading-7">
                  {desc}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    );
  };

  export const faqData: FAQItem[] = [
    {
      question: "Does my card need international purchases enabled?",
      answer: "Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled."
    },
    {
      question: "Can I pay for my order with multiple methods?",
      answer: "No, payment for Nike orders can't be split between multiple payment methods."
    },
    {
      question: "What payment method is accepted for SNKRS orders?",
      answer: "You can use any accepted credit card to pay for your SNKRS order."
    },
    {
      question: "Why don't I see Apple Pay as an option?",
      answer: "To use Apple Pay in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com."
    }
  ];
  
  export const relatedLinks: RelatedLink[] = [
    { text: "WHAT ARE NIKE'S DELIVERY OPTIONS?" },
    { text: "HOW DO I GET FREE DELIVERY ON NIKE ORDERS?" }
  ];
  
  export const contactMethods: ContactMethod[] = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/28bebe28f8b804357e793bb3faac9bf45c240b06b6a807396d6983663b99235c?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d",
      title: "000 800 919 0566",
      description: ["Products & Orders: 24 hours a day, 7 days a week", "Company Info & Enquiries: 07:30 - 16:30, Monday - Friday"]
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/27f456b98ce352ae397c634ede7c1330dcc9ee4bdeba35ccea63bad0fd27e8df?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d",
      title: "24 hours a day",
      description: ["7 days a week"]
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6d1770de076438b6eea109c2cfc63c437a9c3f7ad4df4392bdf4ac588cad40d?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d",
      title: "We'll reply within",
      description: ["five business days"]
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/788102ead639c3370a92e12648902e7b08f3fc368c9020d9ef8ad07d59daa929?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d",
      title: "STORE LOCATOR",
      description: ["Find Nike retail stores near you"]
    }
  ];

export default function HelpCenter() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-3xl font-medium leading-none text-center text-neutral-900">
        GET HELP
      </h1>
      
      <div role="search" className="flex gap-5 justify-between px-4 py-5 mt-6 max-w-full text-base leading-relaxed text-center rounded-lg border border-solid border-neutral-500 text-neutral-500 w-[458px]">
        <label htmlFor="helpSearch" className="sr-only">Search help topics</label>
        <input
          type="search"
          id="helpSearch"
          placeholder="What can we help you with?"
          className="w-full bg-transparent border-none focus:outline-none"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7fe0bf9915ff94df7af4cc9cd3f00b422eb6904f16816b6639b235824bdf5f4?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
          alt=""
          className="object-contain shrink-0 w-6 aspect-[1.33]"
        />
      </div>

      <div className="self-stretch p-7 mt-5 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <article className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start mt-1.5 w-full max-md:mt-10 max-md:max-w-full">
              <h2 className="text-3xl font-medium leading-none text-neutral-900 max-md:max-w-full">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </h2>
              
              <p className="self-stretch mt-12 mr-12 text-base leading-loose text-neutral-900 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
              </p>

              <div className="flex flex-col items-start self-stretch px-8 mt-8 text-base leading-loose text-neutral-900 max-md:px-5 max-md:max-w-full">
                <p className="max-md:max-w-full">
                  Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro
                </p>
                <p className="self-stretch mt-7 text-base leading-loose max-md:max-w-full">
                  If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
                </p>
                <p className="mt-7">Apple Pay</p>
              </div>

              <div className="self-stretch mt-9 text-base font-medium leading-7 text-neutral-900 max-md:mr-2.5 max-md:max-w-full">
                Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.
              </div>

              <div className="flex gap-4 mt-5 max-w-full text-base font-medium text-center text-white w-[251px]">
                <button className="py-2 pr-6 pl-5 bg-neutral-900 rounded-[30px] max-md:pr-5">
                  JOIN US
                </button>
                <button className="px-5 py-2 bg-neutral-900 rounded-[30px] max-md:px-5">
                  SHOP NIKE
                </button>
              </div>

              <FAQSection faqs={faqData} />

              <div className="mt-9 text-base leading-loose text-neutral-900">
                Was this answer helpful?
              </div>
              
              <div className="flex mt-1.5">
                <button aria-label="Mark as helpful">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bde4ac83fd8e92cfccf6a5ecd3a3ce650f8a3ebf25feda6f28de5ef23c4aeb91?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
                    alt=""
                    className="object-contain shrink-0 aspect-square w-[30px]"
                  />
                </button>
                <button aria-label="Mark as not helpful">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecf229120c8054e3f5558913ce717397ffdc4271416e78bf3129711ff5583b9b?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
                    alt=""
                    className="object-contain shrink-0 aspect-square w-[30px]"
                  />
                </button>
              </div>

              <div className="mt-4 text-base font-medium text-neutral-500">
                RELATED
              </div>

              <nav aria-label="Related topics" className="flex flex-col mt-8 ml-8 text-base font-medium leading-loose text-neutral-900 max-md:ml-2.5">
                {relatedLinks.map((link, index) => (
                  <a href="#" key={index} className="self-start mt-7 first:mt-0">
                    {link.text}
                  </a>
                ))}
              </nav>
            </div>
          </article>

          <aside className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
            <ContactSection methods={contactMethods} />
          </aside>
        </div>
      </div>
    </main>
  );
};