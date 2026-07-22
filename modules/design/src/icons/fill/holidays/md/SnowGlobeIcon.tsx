import type { SVGProps } from "react";

export const SnowGlobeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 21V25H15V21H17Z" fill="currentColor" data-color="color-2" />
      <path d="M29 24V29H3V24H29Z" fill="currentColor" />
      <path d="M22.2367 22H9.76303L16.0003 8.63574L22.2367 22Z" fill="currentColor" data-color="color-2" />
      <path d="M9.58579 9L11 7.58579L12.4239 9.00967L11.0097 10.4239L9.58579 9Z" fill="currentColor" />
      <path d="M19.5858 9L21 7.58579L22.4239 9.00967L21.0097 10.4239L19.5858 9Z" fill="currentColor" />
      <path d="M22.5858 15L24 13.5858L25.4239 15.0097L24.0097 16.4239L22.5858 15Z" fill="currentColor" />
      <path d="M6.58579 15L8 13.5858L9.42388 15.0097L8.00967 16.4239L6.58579 15Z" fill="currentColor" />
      <path
        d="M28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16V28H28V16ZM30 30H2V16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16V30Z"
        fill="currentColor"
      />
    </svg>
  );
};
