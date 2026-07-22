import type { SVGProps } from "react";

export const SquareDashedDownloadIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M4 21H2V26C2 28.206 3.794 30 6 30H11V28H6C4.897 28 4 27.103 4 26V21Z" fill="currentColor" />
      <path d="M30 21H28V26C28 27.103 27.103 28 26 28H21V30H26C28.206 30 30 28.206 30 26V21Z" fill="currentColor" />
      <path d="M26 2H21V4H26C27.103 4 28 4.897 28 6V11H30V6C30 3.794 28.206 2 26 2Z" fill="currentColor" />
      <path d="M11 2H6C3.794 2 2 3.794 2 6V11H4V6C4 4.897 4.897 4 6 4H11V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 7V24.5H15V7H17Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.00015 16.0858L16.0002 23.0858L23.0002 16.0858L24.4144 17.5001L16.0002 25.9143L7.58594 17.5001L9.00015 16.0858Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
