import type { SVGProps } from "react";

export const SubmachineGunIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M1 11V8H5.01492H4.86694" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M23 8V6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M16 12V13V13.5279C16 16.2687 17.5485 18.7743 20 20V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M21 12V15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M5 8V11L7 12.5L5.5 17.5L9.5 19L11.5 12H12.5L13.5 13H16V12H23V8H19V7H7L5 8Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
