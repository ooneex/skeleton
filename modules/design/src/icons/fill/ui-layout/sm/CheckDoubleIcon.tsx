import type { SVGProps } from "react";

export const CheckDoubleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="6.067 18.481 .586 13 2 11.586 5.933 15.519 15.872 3.592 17.408 4.872 6.067 18.481"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="12.067 18.481 9.586 16 11 14.586 11.933 15.519 21.872 3.592 23.408 4.872 12.067 18.481"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
