import type { SVGProps } from "react";

export const UndoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M30 18.717C26.3925 15.1805 21.4509 12.9998 16 12.9998C10.5491 12.9998 5.6075 15.1805 2 18.717L2.11554 18.6046"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3.99994 8.99957L1.41174 18.6589L11.071 21.247"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
