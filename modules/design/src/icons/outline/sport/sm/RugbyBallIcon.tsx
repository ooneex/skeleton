import type { SVGProps } from "react";

export const RugbyBallIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M14 2.5L21.5 10" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M2.32208 14.3221L9.69394 21.6939" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M3.00316 21.0165C1.17628 19.1897 1.57479 11.3513 6.46696 6.45439C11.3191 1.60105 19.2087 1.17309 21.0228 2.98782C22.8368 4.80255 22.3654 12.7381 17.5568 17.5485C12.7054 22.4026 4.8072 22.822 3.00316 21.0165Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M9 15L15 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 9L15 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9 12L12 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
