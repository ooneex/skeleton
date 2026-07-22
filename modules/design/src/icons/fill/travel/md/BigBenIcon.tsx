import type { SVGProps } from "react";

export const BigBenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.823677L20 5.77943V8H18V6.89314L12 3.17633L6 6.89314V8H4V5.77943L12 0.823677Z"
        fill="currentColor"
      />
      <path d="M6 22H18V31H13V26H11V31H6V22Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 7V1H20V20H4V1H6V7H18ZM12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 18V22V31H28H25H23H20V22H23V18H25V22H28V18H30Z"
        fill="currentColor"
      />
    </svg>
  );
};
