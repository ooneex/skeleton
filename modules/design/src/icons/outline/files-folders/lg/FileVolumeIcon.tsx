import type { SVGProps } from "react";

export const FileVolumeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M20 3V16H7" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M41 21C41 16.1377 41 11.4865 41 7.99777C41 5.23635 38.7614 3 36 3H20.2426C19.447 3 18.6839 3.31607 18.1213 3.87868L7.87868 14.1213C7.31607 14.6839 7 15.4424 7 16.2381C7 20.4779 7 32.8718 7 40.0084C7 42.7699 9.23858 45 12 45H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M31.5 30H27C25.8954 30 25 30.8954 25 32V38C25 39.1046 25.8954 40 27 40H31.5L38 44V26L31.5 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M43 31V39"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
