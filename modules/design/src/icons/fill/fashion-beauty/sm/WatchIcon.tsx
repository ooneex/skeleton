import type { SVGProps } from "react";

export const WatchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10H19.5C20.3284 10 21 10.6716 21 11.5V12.5C21 13.3284 20.3284 14 19.5 14H18V10Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M7.71729 21.9921L8.21925 24H15.7808L16.2828 21.9921C16.1892 21.9973 16.0949 22 16 22H8.00001C7.90513 22 7.81086 21.9973 7.71729 21.9921Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M7.71729 2.00786L8.21925 0H15.7808L16.2828 2.00786C16.1892 2.00264 16.0949 2 16 2H8.00001C7.90513 2 7.81086 2.00264 7.71729 2.00786Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7ZM13 8H11V13H17V11H13V8Z"
        fill="currentColor"
      />
    </svg>
  );
};
