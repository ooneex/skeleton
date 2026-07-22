import type { SVGProps } from "react";

export const CircleInfoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16,1C7.729,1,1,7.729,1,16s6.729,15,15,15,15-6.729,15-15S24.271,1,16,1Zm1,23h-2v-9.5c0-.276-.225-.5-.5-.5h-2.5v-2h2.5c1.379,0,2.5,1.122,2.5,2.5v9.5Zm-1-14c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
