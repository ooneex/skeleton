import type { SVGProps } from "react";

export const FolderContentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 17V39C5 41.2091 6.79086 43 9 43H39C41.2091 43 43 41.2091 43 39V23C43 20.7909 41.2091 19 39 19H26.7143L19.4762 13H9C6.79086 13 5 14.7909 5 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M41 14V5H7V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
