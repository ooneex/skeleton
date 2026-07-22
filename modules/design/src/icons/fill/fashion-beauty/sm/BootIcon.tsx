import type { SVGProps } from "react";

export const BootIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M14 4H10V6H14V8H10V10H14V12H17C19.9729 12 22.4388 14.1624 22.915 17H3V1H14V4Z" fill="currentColor" />
      <path
        d="M23 20C23 21.1046 22.1046 22 21 22H5C3.89543 22 3 21.1046 3 20V19H23V20Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
