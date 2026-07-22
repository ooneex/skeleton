import type { SVGProps } from "react";

export const SteamIronIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 2L16 22.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M24 30L24 19C24 17.3431 25.3431 16 27 16L28 16"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M28 16L28 28C28 29.1046 27.1046 30 26 30L20.3333 30L19.9188 25.5234C19.776 23.9803 18.4813 22.8 16.9316 22.8L12 22.8L12 2L14 2C21.732 2 28 8.26801 28 16Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M8 8.99999L5.5 8.99999C4.11929 8.99999 3 7.88071 3 6.5V6.5C3 5.11929 4.11929 4 5.5 4H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8 17L5.5 17C4.11929 17 3 18.1193 3 19.5V19.5C3 20.8807 4.11929 22 5.5 22H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M8 13H5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
    </svg>
  );
};
