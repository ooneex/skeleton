import type { SVGProps } from "react";

export const Tag2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m22.121,11.207L11.914,1H1v10.914l5,5v-8.192c-.595-.347-1-.985-1-1.722,0-1.103.897-2,2-2s2,.897,2,2v12.914l2.207,2.207c.585.585,1.353.877,2.121.877s1.537-.292,2.122-.877l6.671-6.671c1.17-1.17,1.17-3.073,0-4.243Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path d="m5,7v16h2v-14c-1.105,0-2-.895-2-2Z" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
