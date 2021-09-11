import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onPress?(): void;
}

export const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(({ children, onPress, ...props }, ref) => {
  return (
    <a
      ref={ref}
      {...props}
      onClick={onPress}
      className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-sky-blue-500 hover:bg-gray-800 active:bg-sky-blue-300 transition ease-in-out duration-150"
    >
      {children}
    </a>
  );
});

Button.displayName = 'Button';
