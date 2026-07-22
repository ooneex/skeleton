import type { SVGProps } from "react";

export const FolderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8 4C4.68629 4 2 6.68629 2 10V36C2 39.3137 4.68629 42 8 42H40C43.3137 42 46 39.3137 46 36V16C46 12.6863 43.3137 10 40 10H27.3333L19.3333 4H8Z"
        fill="currentColor"
      />
    </svg>
  );
};
