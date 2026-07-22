import type { SVGProps } from "react";

export const LoveCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M3 11V41H40C42.7614 41 45 38.7614 45 36V16C45 13.2386 42.7614 11 40 11H3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M38 11V6.02726C38 3.45522 35.6076 1.55164 33.1013 2.12953L3 9.07018V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M24 35C26.218 34 34 28.458 34 23.378C34 20.408 31.588 18 28.616 18C26.656 18 25.192 19.228 24 20.606C22.81 19.226 21.344 18 19.384 18C16.41 18 14 20.408 14 23.378C14 28.458 21.782 34 24 35Z"
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
