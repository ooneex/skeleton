import type { SVGProps } from "react";

export const RulerArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 26L46 42L2 42L2 26L46 26ZM18 29L15 29L15 33L18 33L18 29ZM11 29L8 29L8 36L11 36L11 29ZM22.5 29L25.5 29L25.5 36L22.5 36L22.5 29ZM30 29L30 33L33 33L33 29L30 29ZM37 29L37 36L40 36L40 29L37 29Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 14H4V11H44V14Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1213 6.49998L6.1213 12.5L12.1213 18.5L9.99998 20.6213L1.87866 12.5L9.99998 4.37866L12.1213 6.49998Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.8787 6.49998L41.8787 12.5L35.8787 18.5L38 20.6213L46.1213 12.5L38 4.37866L35.8787 6.49998Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
