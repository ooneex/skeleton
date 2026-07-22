import type { SVGProps } from "react";

export const NewspaperIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m6,2v24.5c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-8.5H1v8.5c0,1.93,1.57,3.5,3.5,3.5h21.481c.024,0,.049,0,.073,0,2.143,0,3.905-1.723,3.945-3.865V2H6Zm19,23h-14v-2h14v2Zm0-5h-14v-2h14v2Zm0-5h-14V7h14v8Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
