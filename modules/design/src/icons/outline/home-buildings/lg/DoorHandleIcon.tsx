import type { SVGProps } from "react";

export const DoorHandleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M20 34V38" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M30 14L30 8C30 5.23858 27.7614 3 25 3L15 3C12.2386 3 10 5.23858 10 8L10 40C10 42.7614 12.2386 45 15 45L25 45C27.7614 45 30 42.7614 30 40L30 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M19.5 22L43.5 22C44.8807 22 46 20.8807 46 19.5L46 16.5C46 15.1193 44.8807 14 43.5 14L19.5 14C18.1193 14 17 15.1193 17 16.5L17 19.5C17 20.8807 18.1193 22 19.5 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 31C17 29.3431 18.3431 28 20 28C21.6569 28 23 29.3431 23 31C23 32.6569 21.6569 34 20 34C18.3431 34 17 32.6569 17 31Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
