import type { SVGProps } from "react";

export const MicrophoneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 25V30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M22 15L22 8C22 4.68629 19.3137 2 16 2C12.6863 2 10 4.68629 10 8L10 15C10 18.3137 12.6863 21 16 21C19.3137 21 22 18.3137 22 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M11 30H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M6 14L6 15C6 20.5228 10.4772 25 16 25V25C21.5228 25 26 20.5228 26 15L26 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
