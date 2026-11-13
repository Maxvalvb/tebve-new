import React from 'react';

interface FebbyLogoProps {
  className?: string;
}

export const FebbyLogo: React.FC<FebbyLogoProps> = ({ className = '' }) => {
  return (
    <a
      href="#top"
      className={`inline-flex items-center gap-2.5 select-none group whitespace-nowrap shrink-0 ${className}`}
    >
      <span className="w-8 h-8 rounded-xl bg-[#C4FB18] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="text-[#11161A]"
        >
          <path
            d="M4 10.5L12 4L20 10.5V19.5C20 20.0523 19.5523 20.5 19 20.5H5C4.44772 20.5 4 20.0523 4 19.5V10.5Z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 20.5V14.5C9.5 13.9477 9.94772 13.5 10.5 13.5H13.5C14.0523 13.5 14.5 13.9477 14.5 14.5V20.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-['Unbounded',sans-serif] font-extrabold text-[22px] tracking-tight text-[#11161A] lowercase leading-none">
        febby
      </span>
    </a>
  );
};
