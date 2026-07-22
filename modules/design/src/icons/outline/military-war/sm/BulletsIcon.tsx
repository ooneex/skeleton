import type { SVGProps } from "react";

export const BulletsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 15.7121L17.1962 17.5574L16.8908 17.3811"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M14 11.0933L14.5 10.2272L16.616 8.56218L17.8734 6.38437C18.669 5.00626 19.9795 4.00067 21.5166 3.58881L21.8481 3.5L21.9369 3.83145C22.3487 5.36853 22.1331 7.00626 21.3375 8.38437L20.0801 10.5622L19.6962 13.2272L15.1962 21.0215L14 20.3309"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M4 17H10" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M4 12V21H10V12L9 9.5V6.98528C9 5.39398 8.36786 3.86786 7.24264 2.74264L7 2.5L6.75736 2.74264C5.63214 3.86786 5 5.39398 5 6.98528V9.5L4 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
