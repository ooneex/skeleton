import type { SVGProps } from "react";

export const ChurchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 21V17C10 15.8954 10.8954 15 12 15V15C13.1046 15 14 15.8954 14 17V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M18 14L22 15.5V21H18" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M6 14L2 15.5V21H6" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M12 1V7.0134V6.5134" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 7L6 11V21H18V11L12 7Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M10 3H14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
