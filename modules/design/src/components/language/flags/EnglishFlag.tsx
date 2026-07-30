import type { SVGProps } from "react";

export const EnglishFlag = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" {...props}>
      <title>uk</title>
      <g>
        <path
          d="M46,6H2A2,2,0,0,0,0,8V40a2,2,0,0,0,2,2H46a2,2,0,0,0,2-2V8A2,2,0,0,0,46,6Z"
          fill="var(--color-flag-english-navy)"
        />
        <path
          d="M48,8a2,2,0,0,0-2-2H40.839L28,15.876V6H20v9.876L7.161,6H2A2,2,0,0,0,0,8v2.586L12.239,20H0v8H12.239L0,37.415V40a2,2,0,0,0,2,2H7.161L20,32.124V42h8V32.124L40.839,42H46a2,2,0,0,0,2-2V37.415L35.761,28H48V20H35.761L48,10.586Z"
          fill="var(--color-flag-english-white)"
        />
        <polygon
          points="48 22 26 22 26 6 22 6 22 22 0 22 0 26 22 26 22 42 26 42 26 26 48 26 48 22"
          fill="var(--color-flag-english-red)"
        />
        <path
          d="M20,27.723,1.582,41.955A2.051,2.051,0,0,0,2,42H4.386L20,29.935Z"
          fill="var(--color-flag-english-red)"
        />
        <path
          d="M28,20.277,46.418,6.045A2.058,2.058,0,0,0,46,6H43.614L28,18.066Z"
          fill="var(--color-flag-english-red)"
        />
        <path d="M18.006,20,.615,6.562A1.989,1.989,0,0,0,0,8v.3L15.144,20Z" fill="var(--color-flag-english-red)" />
        <path
          d="M29.994,28,47.385,41.438A1.989,1.989,0,0,0,48,40v-.3L32.856,28Z"
          fill="var(--color-flag-english-red)"
        />
      </g>
    </svg>
  );
};

EnglishFlag.displayName = "EnglishFlag";
