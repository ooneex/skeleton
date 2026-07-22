import type { SVGProps } from "react";

export const UserListIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="16" y="5" width="7" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="16" y="9" width="7" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="19" y="13" width="4" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="9.5" cy="6" r="4" strokeWidth="0" fill="currentColor" />
      <path
        d="m9.5,12c-4.411,0-8,3.589-8,8v.754l.725.207c2.414.69,4.844,1.035,7.275,1.035s4.861-.345,7.275-1.035l.725-.207v-.754c0-4.411-3.589-8-8-8Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
