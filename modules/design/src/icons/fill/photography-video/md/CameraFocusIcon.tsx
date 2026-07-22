import type { SVGProps } from "react";

export const CameraFocusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 24C31 26.2091 29.2091 28 27 28L21 28L21 26L27 26C28.1046 26 29 25.1046 29 24L29 19L31 19L31 24Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 13L29 8C29 6.89543 28.1046 6 27 6L21 6L21 4L27 4C29.2091 4 31 5.79086 31 8L31 13L29 13Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.999999 13L0.999999 8C1 5.79086 2.79086 4 5 4L11 4L11 6L5 6C3.89543 6 3 6.89543 3 8L3 13L0.999999 13Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 15H23V17H9V15Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 23L15 9L17 9L17 23L15 23Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 28L5 28C2.79086 28 0.999997 26.2091 0.999997 24L0.999998 19L3 19L3 24C3 25.1046 3.89543 26 5 26L11 26L11 28Z"
        fill="currentColor"
      />
    </svg>
  );
};
