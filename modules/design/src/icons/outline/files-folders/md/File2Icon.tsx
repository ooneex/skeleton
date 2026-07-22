import type { SVGProps } from "react";

export const File2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M19 30V21H28" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M7 30H18.7574C19.553 30 20.3161 29.6839 20.8787 29.1213L27.1213 22.8787C27.6839 22.3161 28 21.553 28 20.7574V5C28 3.34315 26.6569 2 25 2H7C5.34315 2 4 3.34315 4 5V27C4 28.6569 5.34315 30 7 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
