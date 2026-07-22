import type { SVGProps } from "react";

export const GrenadeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M26 7.96456C26.1633 7.98791 26.3302 8 26.5 8C28.433 8 30 6.433 30 4.5C30 2.567 28.433 1 26.5 1C24.567 1 23 2.567 23 4.5C23 5.0368 23.1208 5.54537 23.3368 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M29 19C29 13.6491 27.8476 9.38027 24.7681 6.6256C24.2886 6.19671 23.6527 6 23.0094 6H18H18.2851"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 11L12 7.5L10 6.5L10 3H18V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M5 21H25" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M15 30C20.5228 30 25 25.5229 25 20C25 15.8994 22.3162 12.5431 18.7844 11L11.2199 11C7.68812 12.5431 5 15.8994 5 20C5 25.5229 9.47715 30 15 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};
