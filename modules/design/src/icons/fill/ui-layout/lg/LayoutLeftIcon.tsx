import type { SVGProps } from "react";

export const LayoutLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 6C43.3137 6 46 8.68629 46 12V36C46 39.3137 43.3137 42 40 42H8C4.68629 42 2 39.3137 2 36V12C2 8.68629 4.68629 6 8 6H40ZM17 12L17 36H8V12L17 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
