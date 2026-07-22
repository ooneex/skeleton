import type { SVGProps } from "react";

export const WinterHatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="2" r="2" fill="currentColor" data-color="color-2" />
      <path d="M21 15H3V13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13V15Z" fill="currentColor" />
      <path d="M15 22H9V17H15V22Z" fill="currentColor" data-color="color-2" />
      <path
        d="M21 17C22.1046 17 23 17.8954 23 19V20C23 21.1046 22.1046 22 21 22H17V17H21Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M7 22H3C1.89543 22 1 21.1046 1 20V19C1 17.8954 1.89543 17 3 17H7V22Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
