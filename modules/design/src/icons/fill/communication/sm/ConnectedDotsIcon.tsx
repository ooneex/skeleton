import type { SVGProps } from "react";

export const ConnectedDotsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="17.142 15.444 13 12.486 13 8 11 8 11 12.485 6.858 15.444 8.021 17.071 12 14.229 15.979 17.071 17.142 15.444"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <circle cx="12" cy="5" r="4" strokeWidth="0" fill="currentColor" />
      <circle cx="5" cy="18" r="4" strokeWidth="0" fill="currentColor" />
      <circle cx="19" cy="18" r="4" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
