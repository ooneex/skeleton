import type { SVGProps } from "react";

export const FileHeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M20 3V16H7" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M23.5 45H12C9.23858 45 7 42.7699 7 40.0084C7 32.8718 7 20.4779 7 16.2381C7 15.4424 7.31607 14.6839 7.87868 14.1213L18.1213 3.87868C18.6839 3.31607 19.447 3 20.2426 3H36C38.7614 3 41 5.23705 41 7.99847C41 12.3187 41 18.4214 41 24.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M33 46C35.218 45 43 39.458 43 34.378C43 31.408 40.588 29 37.616 29C35.656 29 34.192 30.228 33 31.606C31.81 30.226 30.344 29 28.384 29C25.41 29 23 31.408 23 34.378C23 39.458 30.782 45 33 46Z"
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
