'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  href,
  target,
  rel,
  className = '',
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles = 'group relative overflow-hidden rounded-full px-8 py-3 text-sm font-bold transition-transform hover:scale-105 active:scale-95 uppercase tracking-wider';
  
  const variantStyles = {
    primary: 'bg-white text-black',
    secondary: 'border border-zinc-800 bg-black/50 text-white backdrop-blur-sm hover:bg-zinc-900'
  };

  const widthStyles = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`.trim();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      window.open(href, target || '_self', rel ? `noreferrer noopener` : undefined);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button 
      className={buttonClasses}
      onClick={handleClick}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full bg-zinc-300 transition-transform duration-500 group-hover:translate-x-0" />
      )}
    </button>
  );
}

