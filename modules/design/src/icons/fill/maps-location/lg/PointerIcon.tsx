import type { SVGProps } from "react";

export const PointerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.53387 6.53394L45.2285 17.7498L26.9313 26.9313L17.7497 45.2285L6.53387 6.53394Z"
        fill="currentColor"
      />
    </svg>
  );
};
