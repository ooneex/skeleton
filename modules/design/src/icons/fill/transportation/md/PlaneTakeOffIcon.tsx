import type { SVGProps } from "react";

export const PlaneTakeOffIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7.52655 7.79426L12.3822 12.8901L8.21458 15.0756L4.60726 13.5797L0.169535 15.9068L7.24563 21.4829C8.17493 22.2152 9.44786 22.333 10.4957 21.7835L28.7631 12.2042C30.475 11.3065 31.135 9.191 30.2373 7.4791C29.3396 5.76721 27.2241 5.10717 25.5122 6.00488L20.16 8.81149L10.8037 5.14221L7.52655 7.79426Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 26L29 26L29 28L3 28L3 26Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
