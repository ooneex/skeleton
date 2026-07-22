import type { SVGProps } from "react";

export const BucketIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6 11.1407L10.5 38.3334C11.0373 41.7608 17.2229 44 24 44C30.7771 44 37.0612 41.6837 37.5 38.3334L42 11.152"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M24 17C33.9411 17 42 14.3137 42 11C42 7.68629 33.9411 5 24 5C14.0589 5 6 7.68629 6 11C6 14.3137 14.0589 17 24 17Z"
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
