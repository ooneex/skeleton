import type { SVGProps } from "react";

export const FolderPlayIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 11.2768L24.0156 17L14 22.7232V11.2768Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M1 5C1 3.34315 2.34315 2 4 2H10.4142L13.4142 5H20C21.6569 5 23 6.34315 23 8V14.1161L14.9923 9.54031C14.3733 9.18659 13.6128 9.18913 12.9961 9.54697C12.3795 9.90482 12 10.5639 12 11.2768V21H4C2.34315 21 1 19.6569 1 18V5Z"
        fill="currentColor"
      />
    </svg>
  );
};
