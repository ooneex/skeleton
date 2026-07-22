import type { SVGProps } from "react";

export const ToiletIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M26.9964 20H5.00366C5.11104 23.3455 7.57763 26.1464 10.875 26.6815V30H21.125V26.6815C24.4224 26.1464 26.889 23.3455 26.9964 20Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6V13L25 13L25 6C25 3.79086 23.2091 2 21 2H11C8.79086 2 7 3.79086 7 6ZM21 8V6H17V8H21Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M7 15C5.89543 15 5 15.8954 5 17V18H27V17C27 15.8954 26.1046 15 25 15L7 15Z" fill="currentColor" />
    </svg>
  );
};
