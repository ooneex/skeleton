import type { SVGProps } from "react";

export const MagnetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M2 16V11H11.6667V16C11.6667 18.3932 13.6068 20.3333 16 20.3333C18.3932 20.3333 20.3333 18.3932 20.3333 16V11H30V16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16Z"
        fill="currentColor"
      />
      <path d="M2 2V9H11.6667V2H2Z" fill="currentColor" data-color="color-2" />
      <path d="M29.9999 9V2H20.3333V9H29.9999Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
