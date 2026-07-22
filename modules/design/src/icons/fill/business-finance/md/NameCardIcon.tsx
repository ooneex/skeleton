import type { SVGProps } from "react";

export const NameCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 21V30H15V21H17Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 28H23V30H9V28Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 7C1 4.79086 2.79086 3 5 3H27C29.2091 3 31 4.79086 31 7V19C31 21.2091 29.2091 23 27 23H19V21C19 19.8954 18.1046 19 17 19H15C13.8954 19 13 19.8954 13 21V23H5C2.79086 23 1 21.2091 1 19V7ZM18 12H8V14H18V12ZM20 12V14H24V12H20Z"
        fill="currentColor"
      />
    </svg>
  );
};
