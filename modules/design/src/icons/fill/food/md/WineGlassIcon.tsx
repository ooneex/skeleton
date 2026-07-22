import type { SVGProps } from "react";

export const WineGlassIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 22V30H15V22H17Z" fill="currentColor" />
      <path
        d="M25 10V13C25 17.9706 20.9706 22 16 22C11.0294 22 7 17.9706 7 13V10H25Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M24 4H8V13C8 17.4183 11.5817 21 16 21C20.4183 21 24 17.4183 24 13V4ZM26 13C26 18.5228 21.5228 23 16 23C10.4772 23 6 18.5228 6 13V2H26V13Z"
        fill="currentColor"
      />
      <path d="M22 29V31H10V29H22Z" fill="currentColor" />
    </svg>
  );
};
