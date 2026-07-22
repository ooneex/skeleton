import type { SVGProps } from "react";

export const UsersChatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m20,0h-8c-1.103,0-2,.897-2,2v9.635l4.362-3.635h5.638c1.103,0,2-.897,2-2V2c0-1.103-.897-2-2-2Z"
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
