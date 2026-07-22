import type { SVGProps } from "react";

export const HotelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2C6.79086 2 5 3.79086 5 6V19.882L3 20.882V30H13V23H19V30H29V20.882L27 19.882V6C27 3.79086 25.2091 2 23 2H9ZM10 17H14V19H10V17ZM18 17V19H22V17H18ZM10 12H14V14H10V12ZM10 7V9H14V7H10ZM18 12H22V14H18V12ZM18 7V9H22V7H18Z"
        fill="currentColor"
      />
    </svg>
  );
};
