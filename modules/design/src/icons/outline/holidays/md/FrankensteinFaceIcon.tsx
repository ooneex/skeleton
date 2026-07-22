import type { SVGProps } from "react";

export const FrankensteinFaceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M4 9H28" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M22 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M28 15H31"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M1 15H4.00001"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M4 3L4 18C4 24.6274 9.37258 30 16 30C22.6274 30 28 24.6274 28 18V3H4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14 17.5C14 18.8807 12.8807 20 11.5 20C10.1193 20 9 18.8807 9 17.5C9 16.1193 10.1193 15 11.5 15C12.8807 15 14 16.1193 14 17.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M23 17.5C23 18.8807 21.8807 20 20.5 20C19.1193 20 18 18.8807 18 17.5C18 16.1193 19.1193 15 20.5 15C21.8807 15 23 16.1193 23 17.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M14 24L18 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
