import type { SVGProps } from "react";

export const BillboardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M43 5H5V43"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M15 15V12.5C15 11.1193 16.1193 10 17.5 10V10C18.8807 10 20 11.1193 20 12.5V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M33 15V12.5C33 11.1193 34.1193 10 35.5 10V10C36.8807 10 38 11.1193 38 12.5V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M17.5 10V5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M35.5 10V5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M43 15H10V36H43V15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15 28.0714L15.9165 28.4285C17.1076 28.8926 18.1194 29.7249 18.8043 30.8042L18.9286 31H34.0714L34.1957 30.8042C34.8806 29.7249 35.8924 28.8926 37.0835 28.4285L38 28.0714V22.9286L37.0835 22.5715C35.8924 22.1074 34.8806 21.2751 34.1957 20.1958L34.0714 20H18.9286L18.8043 20.1958C18.1194 21.2751 17.1076 22.1074 15.9165 22.5715L15 22.9286V28.0714Z"
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
