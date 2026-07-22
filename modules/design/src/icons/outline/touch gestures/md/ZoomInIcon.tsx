import type { SVGProps } from "react";

export const ZoomInIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M1 11L11 1" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M11 5.94979L11 1L6.05016 0.999972"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M1.00004 5.99998L1 10.9498L5.94984 10.9498"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16.5 27.3078L16.5 30H28.8861L30.7794 20.2216C31.1835 18.1347 29.8847 16.0962 27.8225 15.5807L19.5 13.5V7.00003C19.5 5.89546 18.6046 5.00003 17.5 5.00003C16.3954 5.00003 15.5 5.89546 15.5 7.00003V18.5L11.713 16.4344C10.777 15.9238 9.60419 16.2916 9.12737 17.2453C8.75511 17.9898 8.91591 18.8904 9.52283 19.4601L15.5531 25.1205C16.1573 25.6875 16.5 26.4792 16.5 27.3078Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
