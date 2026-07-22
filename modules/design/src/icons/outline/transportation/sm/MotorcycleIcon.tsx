import type { SVGProps } from "react";

export const MotorcycleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16.5 16V16C15.5522 12.8408 13.2156 10.2862 10.1532 9.06128L10 9"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <circle cx="4" cy="17" r="3" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M17.8787 19.1213C19.0503 20.2929 20.9498 20.2929 22.1213 19.1213C23.2929 17.9497 23.2929 16.0502 22.1213 14.8787"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M5.94984 11.6082L1.94116 10.2307L2.5 8.5L7.73338 8.94988C9.87756 9.13421 12.034 8.78333 14.0091 7.92874L15 7.5L14 5L15 4L21.4961 7.71208C21.8077 7.89012 22 8.22146 22 8.58031L22 10.2833C22 10.5533 21.8908 10.8119 21.6972 11.0002L14.5 17.9999H9.99999V17.2825C9.99999 14.7203 8.37297 12.4408 5.94984 11.6082Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
