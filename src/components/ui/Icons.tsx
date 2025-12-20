import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const Logo: React.FC<IconProps> = ({ size = 40, className, ...props }) => (
  <svg width={size * 3} height={size} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Placeholder Logo Path */}
    <rect x="0" y="5" width="30" height="30" rx="8" fill="#9B80FF" />
    <path d="M10 20L15 25L25 15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="38" y="28" fontFamily="Cy, sans-serif" fontSize="24" fill="#424242" fontWeight="bold">buddy</text>
    <rect x="108" y="8" width="12" height="12" rx="3" fill="#9B80FF" />
    <text x="110.5" y="17" fontFamily="sans-serif" fontSize="8" fill="white" fontWeight="bold">B</text>
  </svg>
);

export const Check: React.FC<IconProps> = ({ size = 24, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M20 6L9 17L4 12" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowRight: React.FC<IconProps> = ({ size = 24, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M5 12H19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Dashboard: React.FC<IconProps> = ({ size = 24, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1" stroke={color} strokeWidth="2"/>
    <rect x="14" y="3" width="7" height="7" rx="1" stroke={color} strokeWidth="2"/>
    <rect x="14" y="14" width="7" height="7" rx="1" stroke={color} strokeWidth="2"/>
    <rect x="3" y="14" width="7" height="7" rx="1" stroke={color} strokeWidth="2"/>
  </svg>
);

export const Security: React.FC<IconProps> = ({ size = 24, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Chart: React.FC<IconProps> = ({ size = 24, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M3 3V21H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 17L13 8L9 14L4 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Warning: React.FC<IconProps> = ({ size = 24, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
     <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
     <path d="M12 8V12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
     <path d="M12 16H12.01" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const Close: React.FC<IconProps> = ({ size = 24, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="12" cy="12" r="10" fill={color} fillOpacity="0.1" />
    <path d="M15 9L9 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9L15 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);