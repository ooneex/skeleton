import type { SVGProps } from "react";

export const MessageBubbleUserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M41 24V36C41 38.7614 38.7614 41 36 41H7C4.23858 41 2 38.7614 2 36V17C2 14.2386 4.23858 12 7 12L19 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M43.5 2H26.5C25.1193 2 24 3.11929 24 4.5V16.5C24 17.8807 25.1193 19 26.5 19H29V23.5L36 19H43.5C44.8807 19 46 17.8807 46 16.5V4.5C46 3.11929 44.8807 2 43.5 2Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M16.5 29C18.9853 29 21 26.9853 21 24.5C21 22.0147 18.9853 20 16.5 20C14.0147 20 12 22.0147 12 24.5C12 26.9853 14.0147 29 16.5 29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M25.5 41C25.5 36.0294 21.4706 32 16.5 32C11.5294 32 7.5 36.0294 7.5 41"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
