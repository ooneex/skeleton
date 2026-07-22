import type { SVGProps } from "react";

export const FrameIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fill="currentColor"
        d="M25,6H7C6.447,6,6,6.448,6,7v18c0,0.552,0.447,1,1,1h18c0.553,0,1-0.448,1-1V7C26,6.448,25.553,6,25,6z"
      />
      <rect data-color="color-2" y="6" fill="currentColor" width="4" height="2" />
      <rect data-color="color-2" x="6" fill="currentColor" width="2" height="4" />
      <rect
        data-color="color-2"
        x="28"
        y="6"
        transform="matrix(-1 4.479249e-11 -4.479249e-11 -1 60 14)"
        fill="currentColor"
        width="4"
        height="2"
      />
      <rect
        data-color="color-2"
        x="24"
        y="0"
        transform="matrix(-1 4.501987e-11 -4.501987e-11 -1 50 4)"
        fill="currentColor"
        width="2"
        height="4"
      />
      <rect data-color="color-2" y="24" fill="currentColor" width="4" height="2" />
      <rect data-color="color-2" x="6" y="28" fill="currentColor" width="2" height="4" />
      <rect
        data-color="color-2"
        x="28"
        y="24"
        transform="matrix(-1 -4.479274e-11 4.479274e-11 -1 60 50)"
        fill="currentColor"
        width="4"
        height="2"
      />
      <rect
        data-color="color-2"
        x="24"
        y="28"
        transform="matrix(-1 -4.502011e-11 4.502011e-11 -1 50 60)"
        fill="currentColor"
        width="2"
        height="4"
      />
    </svg>
  );
};
