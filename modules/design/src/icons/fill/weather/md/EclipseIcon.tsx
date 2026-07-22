import type { SVGProps } from "react";

export const EclipseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.7493 3.40951C14.1421 4.8527 10 9.9439 10 16C10 22.0561 14.1421 27.1473 19.7493 28.5905L13.3961 30.5274C6.92668 28.8623 2.14532 22.9908 2.14532 16C2.14532 9.00923 6.92668 3.13773 13.3961 1.47263L19.7493 3.40951Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3ZM1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16Z"
        fill="currentColor"
      />
    </svg>
  );
};
