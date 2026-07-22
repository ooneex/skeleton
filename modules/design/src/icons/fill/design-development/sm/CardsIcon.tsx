import type { SVGProps } from "react";

export const CardsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 1V17H15V1H3Z" fill="currentColor" />
      <path
        d="M7.01445 19L6.65002 20.3601L19.2071 23.7248L23.607 7.30403L17 5.53369V17C17 18.1046 16.1046 19 15 19H7.01445Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
