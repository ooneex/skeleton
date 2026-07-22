import type { SVGProps } from "react";

export const ChessTowerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21 23H3V21.5C3 20.1193 4.11929 19 5.5 19H18.5C19.8807 19 21 20.1193 21 21.5V23Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M17.6875 17H6.3125L8.1875 11H15.8125L17.6875 17Z" fill="currentColor" />
      <path d="M9 5H10L11 2H13L14 5H15L16 2H18V7L16.333 9H7.66699L6 7V2H8L9 5Z" fill="currentColor" />
    </svg>
  );
};
