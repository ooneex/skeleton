import type { SVGProps } from "react";

export const PaperPlaneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="6 23.204 6 13.375 10.191 14.84 12.659 17.377 6 23.204"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <polygon
        points=".43 9.197 3.913 11.81 12.784 8.353 6 13.375 19.229 23.296 22.753 .973 .43 9.197"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
