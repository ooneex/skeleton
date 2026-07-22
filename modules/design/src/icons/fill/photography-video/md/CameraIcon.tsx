import type { SVGProps } from "react";

export const CameraIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 6C29.2091 6 31 7.79086 31 10L31 25C31 27.2091 29.2091 29 27 29L5 29C2.79086 29 1 27.2091 1 25V10C1 7.79086 2.79086 6 5 6H8.5L11.5 2H20.5L23.5 6L27 6ZM22 17C22 20.3137 19.3137 23 16 23C12.6863 23 10 20.3137 10 17C10 13.6863 12.6863 11 16 11C19.3137 11 22 13.6863 22 17Z"
        fill="currentColor"
      />
    </svg>
  );
};
