import type { SVGProps } from "react";

export const Tag2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m29.828,15.414L15.414,1H1v14.414l9,9v-11.414c-1.657,0-3-1.343-3-3s1.343-3,3-3,3,1.343,3,3c0,.885-.39,1.672-1,2.221v14.193l3.414,3.414c.755.755,1.76,1.171,2.828,1.172,1.069,0,2.073-.417,2.829-1.172l8.757-8.757c.756-.755,1.172-1.76,1.172-2.828s-.416-2.073-1.172-2.829Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect x="8" y="13" width="2" height="18" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
