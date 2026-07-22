import type { SVGProps } from "react";

export const Globe2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 22V18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 22H15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M11 14C13.7614 14 16 11.7614 16 9C16 6.23858 13.7614 4 11 4C8.23858 4 6 6.23858 6 9C6 11.7614 8.23858 14 11 14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M18 2L17.364 2.63605C20.8787 6.15077 20.8787 11.8493 17.364 15.364C13.8492 18.8787 8.15075 18.8787 4.63603 15.364L4 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
