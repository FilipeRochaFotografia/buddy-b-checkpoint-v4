import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  success?: boolean;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, success, helperText, className = '', ...props }, ref) => {
    
    // Base Styles
    const containerClasses = "relative flex flex-col gap-1 w-full text-left";
    
    // AJUSTE: p-3 no mobile, p-4 no desktop (md:p-4)
    // AJUSTE: text-sm no mobile
    let inputClasses = "w-full p-3 md:p-4 rounded-card border-[2px] outline-none transition-all duration-200 font-body text-sm md:text-base text-text-title placeholder-gray-300";
    
    let labelClasses = "font-heading text-xs md:text-sm font-semibold mb-1 ml-1";
    let statusIcon = null;

    if (error) {
      inputClasses += " border-error bg-error-light focus:border-error text-error";
      labelClasses += " text-error";
      statusIcon = (
        <svg className="absolute right-3 top-[38px] md:top-[42px]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF4901" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      );
    } else if (success) {
      inputClasses += " border-success bg-success-light focus:border-success text-text-title";
      labelClasses += " text-success";
      statusIcon = (
        <svg className="absolute right-3 top-[38px] md:top-[42px]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#20CE66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      );
    } else {
      inputClasses += " border-gray-200 bg-white focus:border-primary focus:shadow-sm";
      labelClasses += " text-text-title";
    }

    return (
      <div className={`${containerClasses} ${className}`}>
        <label htmlFor={props.id} className={labelClasses}>
          {label} {props.required && <span className="text-error">*</span>}
        </label>
        
        <input 
          ref={ref}
          {...props}
          className={inputClasses}
        />

        {statusIcon}

        {error && (
          <span className="text-[10px] md:text-xs text-error font-semibold flex items-center gap-1 mt-1 ml-1">
             {error}
          </span>
        )}
        
        {!error && helperText && (
          <span className="text-[10px] md:text-xs text-text-muted mt-1 ml-1">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;