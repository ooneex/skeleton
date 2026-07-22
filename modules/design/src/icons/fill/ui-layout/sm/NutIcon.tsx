import type { SVGProps } from "react";

export const NutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m17.589,2H6.411L.856,12l5.555,10h11.178l5.555-10-5.555-10Zm-5.589,14c-2.209,0-4-1.791-4-4s1.791-4,4-4,4,1.791,4,4-1.791,4-4,4Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
