import type { SVGProps } from "react";

export const FolderHeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M30 13V11C30 9.34315 28.6569 8 27 8H17.4L13.2 4H5C3.34315 4 2 5.34315 2 7V24C2 25.6569 3.34315 27 5 27H15"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 29C25.5526 28.2941 31 24.3821 31 20.7962C31 18.6998 29.3116 17 27.2312 17C25.8592 17 24.8344 17.8668 24 18.8395C23.167 17.8654 22.1408 17 20.7688 17C18.687 17 17 18.6998 17 20.7962C17 24.3821 22.4474 28.2941 24 29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
