import type { SVGProps } from "react";

export const MoleculeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14.1713 14.9936L6.67342 14.9936L2.92447 8.49571L6.67342 1.99786L14.1713 1.99786L17.9203 8.49571L14.1713 14.9936Z"
        fill="currentColor"
      />
      <path
        d="M27.1489 22.4957L19.651 22.4957L15.9021 15.9978L19.651 9.5L27.1489 9.5L30.8979 15.9978L27.1489 22.4957Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M14.1713 29.9978L6.67342 29.9978L2.92447 23.5L6.67342 17.0021L14.1713 17.0021L17.9203 23.5L14.1713 29.9978Z"
        fill="currentColor"
      />
    </svg>
  );
};
