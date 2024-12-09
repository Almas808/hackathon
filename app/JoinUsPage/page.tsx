"use client"

import * as React from 'react';

export interface InputFieldProps {
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export interface GenderButtonProps {
    label: string;
    selected?: boolean;
    onClick?: () => void;
  }

const InputField: React.FC<InputFieldProps> = ({
    label,
    type = "text",
    placeholder,
    value,
    onChange
  }) => {
    const id = React.useId();
    
    return (
      <div className="mt-3.5 first:mt-0">
        <label htmlFor={id} className="sr-only">{label}</label>
        <input
          id={id}
          type={type}
          placeholder={label}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-4 leading-none bg-white rounded border border-solid border-neutral-200"
          aria-label={label}
        />
      </div>
    );
  };

const GenderButton: React.FC<GenderButtonProps> = ({
    label,
    selected,
    onClick
  }) => {
    return (
      <button
        onClick={onClick}
        className={`px-14 py-4 bg-white rounded border border-solid ${
          selected ? 'border-black' : 'border-neutral-200'
        }`}
        aria-pressed={selected}
      >
        {label}
      </button>
    );
  };

export default function MemberSignup() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col px-7 py-8 mx-auto w-full text-sm bg-white max-w-[480px] text-neutral-400">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d21c511078fabb3f0f5b8de542dfec0045c59d165d76c2b2cb674740e80965c?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
        alt="Nike logo"
        className="object-contain aspect-[19.23] w-[324px]"
      />
      
      <h1 className="self-center mt-10 text-lg font-bold leading-none text-center text-neutral-900">
        BECOME A NIKE MEMBER
      </h1>
      
      <p className="self-center mt-10 leading-6 text-center">
        Create your Nike Member profile and get first access to the very best of
        Nike products, inspiration and community.
      </p>

      <form onSubmit={handleSubmit} className="mt-6">
        <InputField label="Email address" type="email" />
        <InputField label="Password" type="password" />
        <InputField label="First Name" />
        <InputField label="Last Name" />
        <InputField label="Date of Birth" type="date" />
        
        <p className="self-center mt-2.5 text-xs text-center">
          Get a Nike Member Reward every year on your Birthday.
        </p>

        <button
          type="button"
          className="flex gap-5 justify-between w-full py-4 pr-2 pl-4 mt-5 leading-none bg-white rounded border border-solid border-neutral-200"
        >
          <span>India</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2026eb5902d950a0278ba613d10c209fce9bbbc0ec88716e4f24ce8d12913d7?placeholderIfAbsent=true&apiKey=1313bff9f6a74268bff46d480ddb683d"
            alt=""
            className="object-contain shrink-0 my-auto w-2.5 aspect-[1.43]"
          />
        </button>

        <div className="flex gap-4 mt-2.5 text-sm text-center">
          <GenderButton label="Male" />
          <GenderButton label="Female" />
        </div>

        <div className="flex gap-9 items-start mt-5 text-xs leading-4">
          <label className="flex items-start">
            <input
              type="checkbox"
              className="mr-4 w-5 h-5 rounded border border-solid border-stone-300"
            />
            <span className="w-[247px]">
              Sign up for emails to get updates from Nike on products, offers and
              your Member benefits
            </span>
          </label>
        </div>

        <p className="self-center mt-6 text-xs leading-4 text-center">
          By creating an account, you agree to Nike's{" "}
          <a href="#" className="font-medium underline">Privacy Policy</a> and{" "}
          <a href="#" className="font-medium underline">Terms of Use</a>.
        </p>

        <button
          type="submit"
          className="w-full px-16 py-3 mt-8 text-base leading-none text-center text-white bg-black rounded border border-black border-solid"
        >
          JOIN US
        </button>
      </form>

      <p className="self-center mt-6 text-xs leading-none text-center">
        Already a Member?{" "}
        <a href="#" className="font-medium underline text-neutral-900">
          Sign In.
        </a>
      </p>
    </div>
  );
};