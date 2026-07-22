import type { SVGProps } from "react";

export const PinStarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M26.5 15.8287C26.8177 14.8197 27 13.8219 27 12.8607C27 5.93648 21.362 1.99995 16 1.99995C10.638 1.99995 5 5.93648 5 12.8607C5 18.9214 12.2887 26.4719 15 29.0708"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8C13.7909 8 12 9.79086 12 12C12 14.2091 13.7909 16 16 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M23 18L25.0092 21.9501L29.5 22.584L26.25 25.6588L27.017 30L23 27.9501L18.983 30L19.75 25.6588L16.5 22.584L20.9908 21.9501L23 18Z"
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
