import type { SVGProps } from "react";

export const UsersCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="10.5 9.414 6.586 5.5 8 4.086 10.5 6.586 17 .086 18.414 1.5 10.5 9.414"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m5.5,17c-3.033,0-5.5,2.467-5.5,5.5v1.5h11v-1.5c0-3.033-2.467-5.5-5.5-5.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <circle cx="5.5" cy="12.5" r="3" strokeWidth="0" fill="currentColor" />
      <path
        d="m18.5,17c3.033,0,5.5,2.467,5.5,5.5v1.5h-11v-1.5c0-3.033,2.467-5.5,5.5-5.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <circle cx="18.5" cy="12.5" r="3" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
