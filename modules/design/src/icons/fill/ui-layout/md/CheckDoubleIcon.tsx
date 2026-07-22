import type { SVGProps } from "react";

export const CheckDoubleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="7.484 27.518 .09 18.892 1.608 17.59 7.516 24.482 24.421 5.588 25.912 6.921 7.484 27.518"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="13.484 27.518 11.233 24.892 12.751 23.59 13.516 24.482 30.421 5.588 31.912 6.921 13.484 27.518"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
