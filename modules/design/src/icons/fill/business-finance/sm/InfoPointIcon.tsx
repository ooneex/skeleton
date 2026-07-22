import type { SVGProps } from "react";

export const InfoPointIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="3.25" r="3.25" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <polygon points="21 14 3 14 3 16 5 16 5 24 19 24 19 16 21 16 21 14" strokeWidth="0" fill="currentColor" />
      <path
        d="m16.899,12c-.465-2.279-2.484-4-4.899-4s-4.434,1.721-4.899,4h9.798Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
