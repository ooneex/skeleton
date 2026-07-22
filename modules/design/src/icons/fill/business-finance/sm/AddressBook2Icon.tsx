import type { SVGProps } from "react";

export const AddressBook2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="22" y="4" width="2" height="6" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="2" y="1" width="3" height="22" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m17,1H7v22h10c1.654,0,3-1.346,3-3V4c0-1.654-1.346-3-3-3Zm0,13h-7v-2h7v2Zm0-4h-7v-4h7v4Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
