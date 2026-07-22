import type { SVGProps } from "react";

export const SubtitlesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 42C43.3137 42 46 39.3137 46 36L46 12C46 8.68629 43.3137 6 40 6L8 6C4.68629 6 2 8.68629 2 12L2 36C2 39.3137 4.68629 42 8 42L40 42ZM11 31H27V34H11V31ZM30 31V34H37V31H30ZM37 24H21V27H37V24ZM11 24V27H18V24H11Z"
        fill="currentColor"
      />
    </svg>
  );
};
