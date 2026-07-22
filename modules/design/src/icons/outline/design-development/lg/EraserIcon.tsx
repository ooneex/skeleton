import type { SVGProps } from "react";

export const EraserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 10L12 5.49999C12 4.11928 13.1193 2.99999 14.5 2.99999L33.5 2.99999C34.8807 2.99999 36 4.11928 36 5.49999L36 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 38L12 42.5C12 43.8807 13.1193 45 14.5 45L33.5 45C34.8807 45 36 43.8807 36 42.5L36 38"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10 10L10 38L38 38L38 10L10 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16.5 31.5V24"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
