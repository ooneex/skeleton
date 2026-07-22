import type { SVGProps } from "react";

export const FolderGalleryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 13H18V16H15V13Z" fill="currentColor" data-color="color-2" />
      <path d="M15 18H18V21H15V18Z" fill="currentColor" data-color="color-2" />
      <path d="M20 13H23V16H20V13Z" fill="currentColor" data-color="color-2" />
      <path d="M20 18H23V21H20V18Z" fill="currentColor" data-color="color-2" />
      <path
        d="M1 5C1 3.34315 2.34315 2 4 2H10.4142L13.4142 5H20C21.6569 5 23 6.34315 23 8V11H15C13.8954 11 13 11.8954 13 13V21H4C2.34315 21 1 19.6569 1 18V5Z"
        fill="currentColor"
      />
    </svg>
  );
};
