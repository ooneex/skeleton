import type { SVGProps } from "react";

export const Lightbulb3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 31V37" stroke="currentColor" strokeWidth="2" data-color="color-2" fill="none" data-cap="butt" />
      <path
        d="M24 37C33.3888 37 41 29.3888 41 20C41 10.6112 33.3888 3 24 3C14.6112 3 7 10.6112 7 20C7 29.3888 14.6112 37 24 37Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M13 20C13 13.9249 17.9249 9 24 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 35L17.1875 43H18.2792C18.7097 43 19.0918 43.2754 19.2279 43.6838L20 46H28L28.7721 43.6838C28.9082 43.2754 29.2903 43 29.7208 43H31L32 35"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M20 27L24 31L28 27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
