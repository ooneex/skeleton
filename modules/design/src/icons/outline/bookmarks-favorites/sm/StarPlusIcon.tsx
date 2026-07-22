import type { SVGProps } from "react";

export const StarPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <line
        x1="19"
        y1="23"
        x2="19"
        y2="15"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <polyline
        points="20.03 11.151 21.836 9.39 15.039 8.403 12 2.245 8.961 8.403 2.164 9.39 7.082 14.185 5.921 20.954 11.076 18.245"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="15"
        y1="19"
        x2="23"
        y2="19"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
    </svg>
  );
};
