import type { SVGProps } from "react";

export const FolderOpenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M3 6C3 3.79086 4.79086 2 7 2H14.4142L18.4142 6H25C27.2091 6 29 7.79086 29 10V11H16H3V6Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.8197 30L4.18013 30L0.780119 13L31.2197 13L27.8197 30Z"
        fill="currentColor"
      />
    </svg>
  );
};
