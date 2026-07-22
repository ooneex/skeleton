import type { SVGProps } from "react";

export const Box2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 2H4.27924L2.27924 8H11V2Z" fill="currentColor" data-color="color-2" />
      <path d="M19.7208 2L21.7208 8H13V2H19.7208Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 10H2V19C2 20.6569 3.34315 22 5 22L19 22C20.6569 22 22 20.6569 22 19L22 10H13V12V13H11V12V10Z"
        fill="currentColor"
      />
    </svg>
  );
};
