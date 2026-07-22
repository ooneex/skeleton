import type { SVGProps } from "react";

export const EmptyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m25.895,6.105c-2.535-2.535-6.035-4.105-9.895-4.105-7.72,0-14,6.28-14,14,0,3.86,1.57,7.36,4.105,9.895L25.895,6.105Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m8.463,27.779c2.178,1.399,4.761,2.221,7.537,2.221,7.72,0,14-6.28,14-14,0-2.776-.822-5.359-2.221-7.537L8.463,27.779Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect
        x="-4.799"
        y="15"
        width="41.598"
        height="2"
        transform="translate(-6.627 16) rotate(-45)"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
