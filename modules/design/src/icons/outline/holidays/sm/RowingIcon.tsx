import type { SVGProps } from "react";

export const RowingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13 5C14.1046 5 15 4.10457 15 3C15 1.89543 14.1046 1 13 1C11.8954 1 11 1.89543 11 3C11 4.10457 11.8954 5 13 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M6 11H9.51938C9.82316 11 10.1105 10.8619 10.3002 10.6247L11.5576 9.05296C12.5766 7.77921 14.6098 8.19538 15.0464 9.76706L16.5 15H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M15.5 19H19C20.6569 19 22 17.6569 22 16V15H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5 19V19C3.34315 19 2 17.6569 2 16V15H7L13 22.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
