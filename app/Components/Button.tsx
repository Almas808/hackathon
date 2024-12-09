import * as React from 'react';

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
  }
export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="overflow-hidden px-6 py-2 bg-neutral-900 rounded-[30px] text-white text-base font-medium leading-relaxed max-md:px-5"
    >
      {children}
    </button>
  );
};