import type { SVGProps } from "react";

export const LadderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M26 33H42" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M5.5 36H25.3399" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M7.75928 25H27.5001" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M10 15H29.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M29.9286 5H32H16.057C13.6925 5 11.6513 6.65623 11.1642 8.96995L4 43H4.09882"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24.2174 43H24L31.4984 5.00806C31.4993 5.00338 31.5034 5 31.5082 5H31.943C34.3075 5 36.3487 6.65623 36.8358 8.96995L44 43H43.9092"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
