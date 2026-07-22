import type { SVGProps } from "react";

export const ApronIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M31 16V18H26V16H31Z" fill="currentColor" data-color="color-2" />
      <path d="M6 16V18H1V16H6Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12H27V30H5V12L10.5 11.5L12 9H20L22 12ZM11 18V20C11 22.7614 13.2386 25 16 25C18.7614 25 21 22.7614 21 20V18H11Z"
        fill="currentColor"
      />
      <path
        d="M18.8887 5.88867C18.8886 4.29328 17.5954 3 16 3C14.4046 3 13.1114 4.29328 13.1113 5.88867V8C13.1113 10.7614 10.8727 12.9999 8.11133 13H6V29H26V13H23.8887C21.1273 12.9999 18.8887 10.7614 18.8887 8V5.88867ZM20.8887 8C20.8887 9.65678 22.2319 10.9999 23.8887 11H28V31H4V11H8.11133C9.76808 10.9999 11.1113 9.65678 11.1113 8V5.88867C11.1114 3.18871 13.3 1 16 1C18.7 1 20.8886 3.18871 20.8887 5.88867V8Z"
        fill="currentColor"
      />
    </svg>
  );
};
