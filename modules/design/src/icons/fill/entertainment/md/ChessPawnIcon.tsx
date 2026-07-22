import type { SVGProps } from "react";

export const ChessPawnIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18.5 13.6553C18.5 16.2286 19.4024 18.7204 21.0498 20.6973L22.1357 22H9.86426L10.9502 20.6973C12.5976 18.7204 13.5 16.2286 13.5 13.6553V11H18.5V13.6553Z"
        fill="currentColor"
      />
      <path
        d="M16 11.5C13.5147 11.5 11.5 9.48528 11.5 7C11.5 4.51472 13.5147 2.5 16 2.5C18.4853 2.5 20.5 4.51472 20.5 7C20.5 9.48528 18.4853 11.5 16 11.5Z"
        fill="currentColor"
      />
      <path
        d="M28 30H4V28C4 25.7909 5.79086 24 8 24H24C26.2091 24 28 25.7909 28 28V30Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M23.333 10V12H9V10H23.333Z" fill="currentColor" />
    </svg>
  );
};
