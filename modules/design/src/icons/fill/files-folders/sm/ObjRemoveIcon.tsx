import type { SVGProps } from "react";

export const ObjRemoveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="6" y="7" width="12" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m19,22H5c-1.654,0-3-1.346-3-3v-4h2v4c0,.551.448,1,1,1h14c.552,0,1-.449,1-1v-4h2v4c0,1.654-1.346,3-3,3Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
