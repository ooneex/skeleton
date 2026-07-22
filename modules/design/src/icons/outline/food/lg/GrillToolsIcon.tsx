import type { SVGProps } from "react";

export const GrillToolsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 30L13 21" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M34 30V5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M41 5H27V21H41V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M30 30H38V40C38 42.2091 36.2091 44 34 44C31.7909 44 30 42.2091 30 40V30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9 30H17V40C17 42.2091 15.2091 44 13 44C10.7909 44 9 42.2091 9 40V30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19 5V15C19 18.3137 16.3137 21 13 21V21C9.68629 21 7 18.3137 7 15V5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
