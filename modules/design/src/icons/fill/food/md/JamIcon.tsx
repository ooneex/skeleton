import type { SVGProps } from "react";

export const JamIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 27C27 28.6569 25.6569 30 24 30H8C6.34315 30 5 28.6569 5 27V15H27V27ZM10 18V25H22V18H10Z"
        fill="currentColor"
      />
      <path
        d="M25 2C26.6569 2 28 3.34315 28 5C28 5.76947 27.7077 6.46897 27.2314 7H4.76855C4.29228 6.46897 4 5.76947 4 5C4 3.34315 5.34315 2 7 2H25Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M28.5703 13H3.42969L5.2959 9H26.7041L28.5703 13Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
