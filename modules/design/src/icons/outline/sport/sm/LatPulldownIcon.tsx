import type { SVGProps } from "react";

export const LatPulldownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 22H15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M18 14V18H6V14H18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M12 10V2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 7.1367L19.8861 4.92645C19.3201 4.3347 18.5369 4 17.718 4H6.28197C5.46314 4 4.67989 4.3347 4.11393 4.92645L2 7.1367"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
