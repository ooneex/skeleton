import type { SVGProps } from "react";

export const ChessTowerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M28 30H4V28C4 25.7909 5.79086 24 8 24H24C26.2091 24 28 25.7909 28 28V30Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M24 8.5L20.9375 12H11.0625L8 8.5V2H10.5L12 6H13.5L14.5 2H17.5L18.5 6H20L21.5 2H24V8.5Z"
        fill="currentColor"
      />
      <path d="M21 14H11L8.33331 22H23.6666L21 14Z" fill="currentColor" />
    </svg>
  );
};
