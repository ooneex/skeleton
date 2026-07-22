import type { SVGProps } from "react";

export const SmokingBanIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M36 27V34" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M22 34H40.5C41.8807 34 43 32.8807 43 31.5V29.5C43 28.1193 41.8807 27 40.5 27H17"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M10 18L29 43"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M10.5 27H5L5 34H16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M43 22V18C43 12.4772 38.5228 8 33 8V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M38 22V21C38 18.2386 35.7614 16 33 16V16C30.2386 16 28 13.7614 28 11V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
