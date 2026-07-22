import type { SVGProps } from "react";

export const RulerTriangleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M5 38H9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M5 28H9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M5 18H9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M5 33H7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M5 23H7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M5 13H7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M5 43V5L43 43H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M14 34V26L22 34H14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
