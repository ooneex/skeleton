import type { SVGProps } from "react";

export const FileTreeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 8H14V10H5V8Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1V22.0001H14V24.0001H4V1H6Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M16 2V15H26V6.25782L21.8196 2H16Z" fill="currentColor" />
      <path d="M16 17V30H26V21.2578L21.8196 17H16Z" fill="currentColor" />
    </svg>
  );
};
