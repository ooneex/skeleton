import type { SVGProps } from "react";

export const BooleanExcludeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 10H14V12H4V28H20V18H22V30H2V10Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10 2H30V22H18V20H28V4H12V14H10V2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 16.0002L20 12.0001L16 12.0001L16 10.0001L22 10.0001L22 16.0002L20 16.0002Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 16L12 20.0002L16 20.0002L16 22.0002L10 22.0002L10 16L12 16Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
