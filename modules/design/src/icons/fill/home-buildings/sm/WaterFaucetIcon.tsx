import type { SVGProps } from "react";

export const WaterFaucetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M7 2H16V4H7V2Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 2H10V5H3V2Z" fill="currentColor" data-color="color-2" />
      <path d="M3 7V22H10V18C10 14.6863 12.6863 12 16 12H23V10.5C23 8.567 21.433 7 19.5 7H3Z" fill="currentColor" />
    </svg>
  );
};
