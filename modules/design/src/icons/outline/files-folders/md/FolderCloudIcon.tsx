import type { SVGProps } from "react";

export const FolderCloudIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M30 13V11C30 9.34315 28.6569 8 27 8H17.4L13.2 4H5C3.34315 4 2 5.34315 2 7V24C2 25.6569 3.34315 27 5 27H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24.9939 16C22.0549 16.0015 19.5494 18.129 19.0739 21.0265C17.1534 21.264 15.7896 23.0115 16.0268 24.9295C16.243 26.677 17.7255 27.992 19.4883 28H24.9939C28.3108 28 31 25.3135 31 22C31 18.6865 28.3108 16 24.9939 16Z"
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
