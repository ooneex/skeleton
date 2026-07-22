import type { SVGProps } from "react";

export const UserPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="11" cy="5.5" r="4.5" strokeWidth="0" fill="currentColor" />
      <path
        d="m16,21h-2c-1.104,0-2-.896-2-2v-2c0-1.104.896-2,2-2h2v-1.478c-1.431-.96-3.151-1.522-5-1.522-4.963,0-9,4.038-9,9v.781l.758.189c2.734.684,5.488,1.025,8.242,1.025,1.668,0,3.336-.141,5-.392v-1.604Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="24 17 20 17 20 13 18 13 18 17 14 17 14 19 18 19 18 23 20 23 20 19 24 19 24 17"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
