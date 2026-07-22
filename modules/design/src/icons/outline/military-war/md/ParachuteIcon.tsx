import type { SVGProps } from "react";

export const ParachuteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 20V13.5V14.1667" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M3 15L3.0479 14.7126C3.30879 13.1473 4.6631 12 6.25 12V12C7.8369 12 9.19121 13.1473 9.4521 14.7126L9.5 15L9.5479 14.7126C9.80879 13.1473 11.1631 12 12.75 12V12C14.3369 12 15.6912 13.1473 15.9521 14.7126L16 15L16.0479 14.7126C16.3088 13.1473 17.6631 12 19.25 12V12C20.8369 12 22.1912 13.1473 22.4521 14.7126L22.5 15L22.5559 14.6647C22.8122 13.127 24.1426 12 25.7015 12V12C27.0741 12 28.2928 12.8783 28.7269 14.1806L29 15"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M23 20.9496L29 14.7985C29 11.4041 27.6304 8.14878 25.1924 5.74859C22.7544 3.34841 19.4478 2 16 2C12.5522 2 9.24558 3.34841 6.80761 5.74859C4.36964 8.14878 3 11.4041 3 14.7985L9 20.9496"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20 24H12V29C12 29.5523 12.4477 30 13 30H19C19.5523 30 20 29.5523 20 29V24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
