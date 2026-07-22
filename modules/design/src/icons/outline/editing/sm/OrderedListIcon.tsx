import type { SVGProps } from "react";

export const OrderedListIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6 10V2H5.33333L3 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8 22H3V21.75L6.89846 18.8818C7.59105 18.3723 8 17.5637 8 16.7039V16.5C8 15.1193 6.88071 14 5.5 14V14C4.11929 14 3 15.1193 3 16.5V16.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M12 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 4H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
