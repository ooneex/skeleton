import type { SVGProps } from "react";

export const Copy2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M2 4C2 2.34315 3.34315 1 5 1H17C18.6569 1 20 2.34315 20 4V7H15C12.2386 7 10 9.23858 10 12V23H5C3.34315 23 2 21.6569 2 20V4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 9C13.3431 9 12 10.3431 12 12V28C12 29.6569 13.3431 31 15 31H27C28.6569 31 30 29.6569 30 28V12C30 10.3431 28.6569 9 27 9H15ZM17 19H25V21H17V19ZM17 15V17H22V15H17Z"
        fill="currentColor"
      />
    </svg>
  );
};
