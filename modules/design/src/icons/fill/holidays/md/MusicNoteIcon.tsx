import type { SVGProps } from "react";

export const MusicNoteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 2L19.9333 4.2C21.4912 5.3684 23.386 6 25.3333 6H27V12H24.2868C22.6312 12 20.9969 11.6263 19.5058 10.9067L19 10.6626V24H17V2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 24C6 20.5987 9.00197 18 12.5 18C15.998 18 19 20.5987 19 24C19 27.4013 15.998 30 12.5 30C9.00197 30 6 27.4013 6 24Z"
        fill="currentColor"
      />
    </svg>
  );
};
