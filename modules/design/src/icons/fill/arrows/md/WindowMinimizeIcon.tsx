import type { SVGProps } from "react";

export const WindowMinimizeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 7C1 4.79086 2.79086 3 5 3H27C29.2091 3 31 4.79086 31 7V25C31 27.2091 29.2091 29 27 29H5C2.79086 29 1 27.2091 1 25V7ZM27 27C28.1046 27 29 26.1046 29 25V10H3V25C3 26.1046 3.89543 27 5 27H27Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0001 14.5858L6.29299 22.2929L7.7072 23.7071L15.4143 16L14.0001 14.5858Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M8 15V22H15V24H6V15H8Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
