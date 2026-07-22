import type { SVGProps } from "react";

export const OctagonInfoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2132 1H9.78679L1 9.78679V22.2132L9.78679 31H22.2132L31 22.2132V9.78679L22.2132 1ZM16 7C15.1716 7 14.5 7.67157 14.5 8.5C14.5 9.32843 15.1716 10 16 10C16.8284 10 17.5 9.32843 17.5 8.5C17.5 7.67157 16.8284 7 16 7ZM14.5 12H12V14H14.5C14.7757 14 15 14.2243 15 14.5V24H17V14.5C17 13.1197 15.8803 12 14.5 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
