import type { SVGProps } from "react";

export const FoodScaleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 20H17V25H18V27H15V20Z" fill="currentColor" data-color="color-2" />
      <path d="M17 8V12H15V8H17Z" fill="currentColor" />
      <path
        d="M29 4C29 6.76142 26.7614 9 24 9H8C5.23858 9 3 6.76142 3 4V2H29V4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 11C22.6274 11 28 16.3726 28 23V30H4V23C4 16.3726 9.37258 11 16 11ZM16 16C12.134 16 9 19.134 9 23V24H23V23C23 19.134 19.866 16 16 16Z"
        fill="currentColor"
      />
    </svg>
  );
};
