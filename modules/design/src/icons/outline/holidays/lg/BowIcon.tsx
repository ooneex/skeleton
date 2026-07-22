import type { SVGProps } from "react";

export const BowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11.5 17L17 19V21L11.5 23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M36.5 17L31 19V21L36.5 23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M28.5 25.5L36 40L31.5 39.5L28.9137 43L24 32.5L19 43L16.5 39.5L12 40L19.5 25.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <circle cx="24" cy="20" r="7" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22 20C22 18.8954 22.8954 18 24 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M29.0588 15L39.6879 7.47105C42.337 5.59465 46 7.48888 46 10.7351V29.2649C46 32.5111 42.337 34.4053 39.6879 32.529L29.0588 25"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M19 15.0417L8.31207 7.47105C5.66304 5.59465 2 7.48888 2 10.7351V29.2649C2 32.5111 5.66304 34.4053 8.31207 32.529L19 24.9583"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
