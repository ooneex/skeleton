import type { SVGProps } from "react";

export const BaloonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 27V30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12.2896 27H19.7104C20.1231 27 20.3581 26.5282 20.1094 26.1988L18.1429 23.5936C22.636 22.5718 26 18.4035 26 13.4167C26 7.6637 21.5228 3 16 3C10.4772 3 6 7.6637 6 13.4167C6 18.4035 9.36403 22.5718 13.8571 23.5936L11.8906 26.1988C11.6419 26.5282 11.8769 27 12.2896 27Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10 13.0698C10 9.71756 12.6863 7 16 7"
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
