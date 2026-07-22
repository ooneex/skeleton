import type { SVGProps } from "react";

export const SinkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 17V22H15V17" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M12 5H14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M12 9V4C12 2.89543 11.1046 2 10 2V2C8.89543 2 8 2.89543 8 4V4"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9 17L15 17C18.3137 17 21 14.3137 21 11C21 9.89543 20.1046 9 19 9L5 9C3.89543 9 3 9.89543 3 11C3 14.3137 5.68629 17 9 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
