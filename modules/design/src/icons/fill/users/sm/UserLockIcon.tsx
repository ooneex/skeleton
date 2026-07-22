import type { SVGProps } from "react";

export const UserLockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="11" cy="5.5" r="4.5" strokeWidth="0" fill="currentColor" />
      <path
        d="m11,21v-3c0-1.478.805-2.771,2-3.463v-.037c0-.764.157-1.493.441-2.155-.777-.22-1.594-.345-2.441-.345-4.962,0-9,4.038-9,9v.781l.757.189c2.735.684,5.489,1.025,8.243,1.025.182,0,.363-.014.545-.017-.337-.586-.545-1.256-.545-1.979Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m22,16v-1.5c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5v1.5c-1.103,0-2,.897-2,2v3c0,1.103.897,2,2,2h7c1.103,0,2-.897,2-2v-3c0-1.103-.897-2-2-2Zm-5-1.5c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5v1.5h-3v-1.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
