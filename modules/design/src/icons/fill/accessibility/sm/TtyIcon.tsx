import type { SVGProps } from "react";

export const TtyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m22.983,6.04c-3.06-2.605-6.957-4.04-10.975-4.04-.005,0-.012,0-.017,0-4.019,0-7.916,1.435-10.976,4.04-.646.55-1.017,1.372-1.017,2.255v4.705h8v-5.457c1.3-.361,2.639-.543,3.992-.543h.017c1.353,0,2.691.183,3.991.543v5.457h8v-4.705c0-.883-.371-1.706-1.017-2.255Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect x="8" y="15" width="3" height="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="18" y="15" width="3" height="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="3" y="15" width="3" height="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="13" y="15" width="3" height="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="6" y="20" width="12" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
