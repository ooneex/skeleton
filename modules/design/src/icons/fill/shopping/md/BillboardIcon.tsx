import type { SVGProps } from "react";

export const BillboardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H30V4H4V30H2V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 6V11H10V6H12Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M25 6V11H23V6H25Z" fill="currentColor" />
      <path d="M6 9H29V24H6V9Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
