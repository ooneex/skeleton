import type { SVGProps } from "react";

export const StairClimberIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 43H11.5562L35 27.8254" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M5 38V32H17V23H29V15H43V25.7063C43 27.7577 41.9519 29.6669 40.2213 30.7683L21 43H19.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M5 27V22.9918C5 21.9743 5.51571 21.0262 6.36986 20.4733L33.3699 2.99696C35.3659 1.70496 38 3.13771 38 5.51542V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5 43H43"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
