import type { SVGProps } from "react";

export const MapPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M7 2.00562L1 4.31331V21.9561L7 19.6484V2.00562Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M19 13V23H17V13H19Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 17H23V19H13V17Z" fill="currentColor" data-color="color-2" />
      <path
        d="M11 16.9999V20.3679L9 19.3679V1.63184L15 4.63184V14.9999H13C11.8954 14.9999 11 15.8953 11 16.9999Z"
        fill="currentColor"
      />
      <path d="M23 15H21V13C21 11.8954 20.1046 11 19 11H17V4.35164L23 2.04395V15Z" fill="currentColor" />
    </svg>
  );
};
