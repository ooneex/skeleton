import type { SVGProps } from "react";

export const HexagonCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m12,.328L2,6.439v11.122l10,6.111,10-6.111V6.439L12,.328Zm-1.469,16.118l-3.945-3.946,1.414-1.414,2.469,2.468,5.47-5.967,1.475,1.352-6.882,7.507Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
