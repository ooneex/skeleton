import type { SVGProps } from "react";

export const ComposeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m19,22H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h9v2H5c-.552,0-1,.449-1,1v14c0,.551.448,1,1,1h14c.552,0,1-.449,1-1v-9h2v9c0,1.654-1.346,3-3,3Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect
        x="7.722"
        y="6.5"
        width="17.556"
        height="2"
        transform="translate(-.471 13.864) rotate(-45)"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
