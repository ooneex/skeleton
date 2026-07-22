import type { SVGProps } from "react";

export const CursorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4.49997 4.50003L16.5 7.50003L13.4981 10.6698L20 17.1715L17.1716 19.9999L10.6697 13.4982L7.49994 16.5001L4.49997 4.50003Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
