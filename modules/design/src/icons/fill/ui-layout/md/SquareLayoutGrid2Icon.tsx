import type { SVGProps } from "react";

export const SquareLayoutGrid2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M5 3C2.79086 3 1 4.79086 1 7V11H31V7C31 4.79086 29.2091 3 27 3H5Z" fill="currentColor" />
      <path d="M1 25V13H10V29H5C2.79086 29 1 27.2091 1 25Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 13V25C31 27.2091 29.2091 29 27 29H12V27H27C28.1046 27 29 26.1046 29 25V13H31Z"
        fill="currentColor"
      />
    </svg>
  );
};
