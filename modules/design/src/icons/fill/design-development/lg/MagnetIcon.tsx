import type { SVGProps } from "react";

export const MagnetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 24V16H17V24C17 27.866 20.134 31 24 31C27.866 31 31 27.866 31 24V16H44V24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24Z"
        fill="currentColor"
      />
      <path d="M4 4V13H17V4H4Z" fill="currentColor" data-color="color-2" />
      <path d="M44 13V4H31V13H44Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
