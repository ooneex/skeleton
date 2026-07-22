import type { SVGProps } from "react";

export const PuzzlePieceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M31 16C31 13.7909 29.2091 12 27 12V3H20C20 5.20914 18.2091 7 16 7C13.7909 7 12 5.20914 12 3H5V12C2.79086 12 1 13.7909 1 16C1 18.2091 2.79086 20 5 20L5 29H12C12 26.7909 13.7909 25 16 25C18.2091 25 20 26.7909 20 29H27V20C29.2091 20 31 18.2091 31 16Z"
        fill="currentColor"
      />
    </svg>
  );
};
