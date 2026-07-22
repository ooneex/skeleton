import type { SVGProps } from "react";

export const FillIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M40 31C42.619 32.9566 44.5 35.32 44.5 38.2738C44.5 40.8839 42.4851 43 40 43C37.5149 43 35.5 40.8839 35.5 38.2738C35.5 35.32 37.381 32.9566 40 31Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7.5 18.5L7.95002 18.8326C15.0052 24.0473 23.892 26.1367 32.5317 24.6121L36 24"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M39 20.9706L22.0294 4L5.76599 20.2635C3.81337 22.2161 3.81337 25.3819 5.76599 27.3345L15.6655 37.234C17.6181 39.1866 20.7839 39.1866 22.7366 37.234L39 20.9706Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
