import type { SVGProps } from "react";

export const DropletIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16.665.894l-.666-.593-.665.594c-.463.413-11.334,10.208-11.334,18.105,0,7.511,6.102,12,12,12s12-4.489,12-12C28,11.08,17.128,1.306,16.665.894Zm.335,25.106h-1c-2.813,0-7-1.864-7-7v-1h2v1c0,3.955,3.271,5,5,5h1v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
