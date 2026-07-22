import type { SVGProps } from "react";

export const MenuArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="14" y="26" width="15" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="14" y="4" width="15" height="2" strokeWidth="0" fill="currentColor" />
      <polygon
        points="10.414 10 9 8.586 1.586 16 9 23.414 10.414 22 5.414 17 29 17 29 15 5.414 15 10.414 10"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
