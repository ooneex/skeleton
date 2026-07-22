import type { SVGProps } from "react";

export const AddressBookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M35 3H7V45H35C37.7614 45 40 42.7614 40 40V8C40 5.23858 37.7614 3 35 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M45 10V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M45 22V28"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M23.5 21C26.2614 21 28.5 18.7614 28.5 16C28.5 13.2386 26.2614 11 23.5 11C20.7386 11 18.5 13.2386 18.5 16C18.5 18.7614 20.7386 21 23.5 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M23.5 26C17.7014 26 13 30.3781 13 35.778C19.9996 37.4073 27.0004 37.4073 34 35.778C34 30.3781 29.2986 26 23.5 26Z"
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
