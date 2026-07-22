import type { SVGProps } from "react";

export const TreasureChestIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M17 21H7V11H10V14C10 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14V11H17V21Z"
        fill="currentColor"
      />
      <path
        d="M18 3C20.7614 3 23 5.23858 23 8V9H1V8C1 5.23858 3.23858 3 6 3H18Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M23 18C23 19.6569 21.6569 21 20 21H19V11H23V18Z" fill="currentColor" />
      <path d="M5 21H4C2.34315 21 1 19.6569 1 18V11H5V21Z" fill="currentColor" />
    </svg>
  );
};
