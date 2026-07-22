import type { SVGProps } from "react";

export const PlayingCardsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M28 4H30V28H28V4Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2061 1.00488C24.3194 1.11211 26 2.85996 26 5V27C26 29.2091 24.2091 31 22 31H7C4.79086 31 3 29.2091 3 27V5C3 2.79086 4.79086 1 7 1H22L22.2061 1.00488ZM19 25V27H22V25H19ZM17.5 11C16.2814 11 15.355 11.7674 14.5996 12.6582H14.4004C13.645 11.7674 12.7186 11 11.5 11C9.56745 11.0001 8 12.6421 8 14.668C8.00019 18.1314 13.058 21.9104 14.5 22.5928C15.942 21.9104 20.9998 18.1314 21 14.668C21 12.6421 19.4326 11.0001 17.5 11ZM7 7H10V5H7V7Z"
        fill="currentColor"
      />
    </svg>
  );
};
