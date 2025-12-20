import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'white';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  icon,
  ...props 
}) => {
  // Ajustado: rounded-pill (30px) conforme System B
  const baseStyles = "font-heading font-bold text-[18px] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 rounded-pill py-3 px-8 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark hover:shadow-system border-2 border-transparent",
    white: "bg-white text-primary hover:bg-gray-50 hover:shadow-system border-2 border-transparent",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/5",
    ghost: "bg-transparent text-text-body hover:text-primary hover:bg-gray-100 border-2 border-transparent",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="flex items-center">{icon}</span>}
    </button>
  );
};

export default Button;