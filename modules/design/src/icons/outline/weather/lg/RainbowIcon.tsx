import type { SVGProps } from "react";

export const RainbowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M46 34C46 21.8497 36.1503 12 24 12C11.8497 12 2 21.8497 2 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M40 34C40 25.1634 32.8366 18 24 18C15.1634 18 8 25.1634 8 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M34 34C34 28.4772 29.5228 24 24 24C18.4772 24 14 28.4772 14 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M28 34C28 31.7909 26.2091 30 24 30C21.7909 30 20 31.7909 20 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
