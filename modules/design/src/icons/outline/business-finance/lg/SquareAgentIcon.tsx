import type { SVGProps } from "react";

export const SquareAgentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 21C21.513 21 19.5 18.987 19.5 16.5C19.5 14.013 21.513 12 24 12C26.487 12 28.5 14.013 28.5 16.5C28.5 18.987 26.487 21 24 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22.5 25L20.25 36L24 39L27.75 36L25.5 25"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M38 5L10 5C7.23857 5 5 7.23857 5 10L5 38C5 40.7614 7.23857 43 10 43L38 43C40.7614 43 43 40.7614 43 38L43 10C43 7.23858 40.7614 5 38 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M37 43L34.9027 29.5818C34.6151 27.7418 33.3349 26.1824 31.5158 25.7838C26.7464 24.7388 21.2536 24.7387 16.4842 25.7837C14.6651 26.1823 13.3849 27.7418 13.0973 29.5817L11 43"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
