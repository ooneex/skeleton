import type { SVGProps } from "react";

export const OctagonCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16.556,1H7.444L1,7.444v9.111l6.444,6.444h9.111l6.444-6.444V7.444l-6.444-6.444Zm-6.024,15.446l-3.945-3.946,1.414-1.414,2.469,2.468,5.47-5.967,1.475,1.352-6.882,7.507Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
