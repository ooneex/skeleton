import type { SVGProps } from "react";

export const Image2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15.5813 5.36377L9.89249 15.19L6.925 11.2333L0.195801 22.0001H23.5913L15.5813 5.36377Z"
        fill="currentColor"
      />
      <path
        d="M6 2C4.34315 2 3 3.34315 3 5C3 6.65685 4.34315 8 6 8C7.65685 8 9 6.65685 9 5C9 3.34315 7.65685 2 6 2Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
