import type { SVGProps } from "react";

export const SoySauceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8 22H24" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M12 11C12 18.3333 7 17.6215 7 30H25C25 17.6215 20 18.3333 20 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20.1566 7H11.846L11 2H21L20.1566 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
