import type { SVGProps } from "react";

export const ButtonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M31.5 26.5C30.1193 26.5 29 25.3807 29 24C29 22.6193 30.1193 21.5 31.5 21.5C32.8807 21.5 34 22.6193 34 24C34 25.3807 32.8807 26.5 31.5 26.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16.5 26.5C15.1193 26.5 14 25.3807 14 24C14 22.6193 15.1193 21.5 16.5 21.5C17.8807 21.5 19 22.6193 19 24C19 25.3807 17.8807 26.5 16.5 26.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M26.5 16.5C26.5 17.8807 25.3807 19 24 19C22.6193 19 21.5 17.8807 21.5 16.5C21.5 15.1193 22.6193 14 24 14C25.3807 14 26.5 15.1193 26.5 16.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M26.5 31.5C26.5 32.8807 25.3807 34 24 34C22.6193 34 21.5 32.8807 21.5 31.5C21.5 30.1193 22.6193 29 24 29C25.3807 29 26.5 30.1193 26.5 31.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
