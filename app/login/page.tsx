"use client"

import * as React from "react"

export interface InputFieldProps {
    placeholder: string;
    type: string;
    id: string;
    name: string;
  }
  
  export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }
  
  export interface LinkTextProps {
    children: React.ReactNode;
    className?: string;
  }
const InputField: React.FC<InputFieldProps> = ({ placeholder, type, id, name }) => {
    return (
      <>
        <label htmlFor={id} className="sr-only">{placeholder}</label>
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          className="px-4 py-4 mt-3.5 text-sm whitespace-nowrap bg-white rounded border border-solid border-neutral-200 text-neutral-400 w-full"
          aria-label={placeholder}
        />
      </>
    );
  };



 const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-16 py-4 text-xs leading-loose text-center rounded border border-solid ${className}`}
    >
      {children}
    </button>
  );
};

const LinkText: React.FC<LinkTextProps> = ({ children, className }) => {
  return (
    <span className={`underline ${className || ""}`}>
      {children}
    </span>
  );
};



 export default function LoginForm(){
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col px-7 py-8 text-xs bg-white max-w-[380px] ml-[500px]" role="main">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d995461904706066ea1cc1b8a1d3911700da9d882be378868f39acc74ac24d9?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
      alt="Nike logo"
      className="object-contain w-full aspect-[19.23]"
    />
    
    <h1 className="mt-6 text-lg font-bold leading-7 text-center text-neutral-900">
      YOUR ACCOUNT FOR EVERYTHING NIKE
    </h1>

    <form onSubmit={handleSubmit}>
      <InputField
        type="email"
        id="email"
        name="email"
        placeholder="Email address"
      />
      
      <InputField
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      />

      <div className="flex gap-10 mt-6 w-full">
        <div className="flex flex-1 gap-3.5 leading-none text-neutral-400">
          <input
            type="checkbox"
            id="keepSignedIn"
            className="w-5 h-5"
            aria-label="Keep me signed in"
          />
          <label htmlFor="keepSignedIn">Keep me signed in</label>
        </div>
        <button className="grow shrink w-28 text-right text-stone-300">
          Forgotten your password?
        </button>
      </div>

      <div className="self-center mt-7 leading-4 text-center text-neutral-400">
        By logging in, you agree to Nike's{" "}
        <LinkText>Privacy Policy</LinkText> and{" "}
        <LinkText>Terms of Use</LinkText>.
      </div>

      <Button className="w-full mt-8 text-white bg-black border-black">
        SIGN IN
      </Button>

      <div className="self-center mt-6 leading-none text-center text-neutral-400">
        Not a Member?{" "}
        <LinkText className="text-neutral-900">Join Us.</LinkText>
      </div>
    </form>
  </div>
  );
};