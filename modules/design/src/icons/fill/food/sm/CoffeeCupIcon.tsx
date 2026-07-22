import type { SVGProps } from "react";

export const CoffeeCupIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 10V8H19V6H24V10C24 11.6569 22.6569 13 21 13H18.5V11H21C21.5523 11 22 10.5523 22 10Z"
        fill="currentColor"
      />
      <path d="M20 20V22H3V20H20Z" fill="currentColor" data-color="color-2" />
      <path d="M20 10C20 14.9088 16.2542 19 11.5 19C6.74577 19 3 14.9088 3 10V6H20V10Z" fill="currentColor" />
      <path d="M10.5 0H12.5V4H10.5V0Z" fill="currentColor" data-color="color-2" />
      <path d="M15 1H17V4H15V1Z" fill="currentColor" data-color="color-2" />
      <path d="M6 1H8V4H6V1Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
