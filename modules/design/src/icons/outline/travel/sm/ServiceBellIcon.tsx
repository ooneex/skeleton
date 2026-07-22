import type { SVGProps } from "react";

export const ServiceBellIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 11C10.3642 11 8.91184 11.7856 7.99963 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M12 3V6.96985" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M12 7C7.02944 7 3 11.0294 3 16V17H21V16C21 11.0294 16.9706 7 12 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
