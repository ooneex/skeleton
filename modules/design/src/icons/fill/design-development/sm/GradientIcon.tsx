import type { SVGProps } from "react";

export const GradientIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 22L12 2L1 2L1 22L12 22Z" fill="currentColor" />
      <path d="M19 22L19 2L14 2L14 22L19 22Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 2L23 22L21 22L21 2L23 2Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
