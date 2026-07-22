import type { SVGProps } from "react";

export const TreeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 18V24H11V18H13Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.833332L19.752 11.1694L17.1148 11.6968L22.3042 20H1.69574L6.88521 11.6968L4.24794 11.1694L12 0.833332Z"
        fill="currentColor"
      />
    </svg>
  );
};
