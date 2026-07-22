import type { SVGProps } from "react";

export const TypeScaleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M9 3V21H7V3H9Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 3H15V5H1V3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 10V21H16V10H18Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 10H22V12H12V10Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
