import type { SVGProps } from "react";

export const CircleCheckPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="24 18 20 18 20 14 18 14 18 18 14 18 14 20 18 20 18 24 20 24 20 20 24 20 24 18"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <polygon
        points="10.049 17.463 5.586 13 7 11.586 9.951 14.537 16.906 6.589 18.411 7.906 10.049 17.463"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m13,23h-1c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11v1h-2v-1c0-4.962-4.037-9-9-9S3,7.038,3,12s4.037,9,9,9h1v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
