import type { SVGProps } from "react";

export const LayersStackedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="17.468 21 -.135 21 5.398 14.36 6.935 15.64 4.135 19 16.532 19 19.865 15 17.833 15 17.833 13 24.135 13 17.468 21"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="17.468 16 -.135 16 5.398 9.36 6.935 10.64 4.135 14 16.532 14 19.865 10 17.833 10 17.833 8 24.135 8 17.468 16"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <polygon points="6.532 3 -.135 11 17.468 11 24.135 3 6.532 3" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
