import type { SVGProps } from "react";

export const MenuArrowRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="19" width="10" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="3" width="10" height="2" strokeWidth="0" fill="currentColor" />
      <polygon
        points="16 5.586 14.586 7 18.586 11 2 11 2 13 18.586 13 14.586 17 16 18.414 22.414 12 16 5.586"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
