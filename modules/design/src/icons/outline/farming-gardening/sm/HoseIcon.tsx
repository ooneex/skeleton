import type { SVGProps } from "react";

export const HoseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 21H18C19.1046 21 20 20.1046 20 19V19C20 17.8954 19.1046 17 18 17H8.61994C6.06842 17 4 14.9316 4 12.3801V12.3801C4 10.8866 4.72192 9.4853 5.93795 8.61832L10 5.72223L9.5 6.07871"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14.4462 1.43301L9.00001 4L10 5.73205L11 7.4641L15.9462 4.03109L14.4462 1.43301Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M17 8C18.0388 8.83333 19 9.92628 19 11C19 12.1328 18.1045 13 17 13C15.8955 13 15 12.1328 15 11C15 9.92628 15.9719 8.83333 17 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
