import type { SVGProps } from "react";

export const FolderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 2C2.34315 2 1 3.34315 1 5V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V8C23 6.34315 21.6569 5 20 5H13.4142L10.4142 2H4Z"
        fill="currentColor"
      />
    </svg>
  );
};
