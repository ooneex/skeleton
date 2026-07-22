import type { SVGProps } from "react";

export const SwipeLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 13.0001V3.5C5 2.67157 5.67157 2 6.5 2C7.32843 2 8 2.67157 8 3.5V9L13.5876 10.3476C15.1135 10.7156 16.0977 12.1974 15.8452 13.7466L14.4999 22.0001H4.99994V20.0001C4.99994 19.351 4.78943 18.7194 4.39998 18.2001L2.39997 15.5333C2.14035 15.1871 2 14.7661 2 14.3334V11.0001C2 9.89555 2.89543 9.00011 4 9.00011H4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M22 4.5L13 4.5L13.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 7.49999L13 4.5L16 1.49998"
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
