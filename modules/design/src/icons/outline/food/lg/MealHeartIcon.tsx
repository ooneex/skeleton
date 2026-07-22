import type { SVGProps } from "react";

export const MealHeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 3V10" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M31.5 21.113C31.5 24.9969 25.6637 29.2349 24 30C22.3363 29.2349 16.5 24.9969 16.5 21.113C16.5 18.841 18.3087 17 20.5387 17C21.9448 17 23.0129 17.8601 23.8846 18.859H24.1154C24.9871 17.8601 26.0552 17 27.4613 17C29.6913 17 31.5 18.841 31.5 21.113Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M18 3H30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M45 35H3V41H45V35Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M6 30V28C6 18.0589 14.0589 10 24 10C33.9411 10 42 18.0589 42 28V30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
