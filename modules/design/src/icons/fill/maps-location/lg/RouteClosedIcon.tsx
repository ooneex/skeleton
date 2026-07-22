import type { SVGProps } from "react";

export const RouteClosedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 24C9 15.7157 15.7157 9 24 9C32.2843 9 39 15.7157 39 24C39 32.2843 32.2843 39 24 39C15.7157 39 9 32.2843 9 24ZM19 16.8787L24 21.8787L29 16.8787L31.1213 19L26.1213 24L31.1213 29L29 31.1213L24 26.1213L19 31.1213L16.8787 29L21.8787 24L16.8787 19L19 16.8787Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M42 22.5H47V25.5H42V22.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 22.5H6V25.5H1V22.5Z" fill="currentColor" />
    </svg>
  );
};
