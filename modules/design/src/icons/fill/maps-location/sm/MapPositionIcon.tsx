import type { SVGProps } from "react";

export const MapPositionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M7 2.00562L1 4.31331V21.9561L7 19.6484V2.00562Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 19H19V23H17V19Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 15.5C13.5 13.0147 15.5147 11 18 11C20.4853 11 22.5 13.0147 22.5 15.5C22.5 17.9853 20.4853 20 18 20C15.5147 20 13.5 17.9853 13.5 15.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M17 9.07643L17 4.35164L23 2.04395V11.3464C21.8077 9.91271 20.0104 8.99998 18 8.99998C17.6599 8.99998 17.326 9.02609 17 9.07643Z"
        fill="currentColor"
      />
      <path
        d="M9 19.3681L15 22.3681V21.2679C12.9201 20.1839 11.5 18.0078 11.5 15.5001C11.5 12.9924 12.9201 10.8163 15 9.73232L15 4.63208L9 1.63208V19.3681Z"
        fill="currentColor"
      />
    </svg>
  );
};
