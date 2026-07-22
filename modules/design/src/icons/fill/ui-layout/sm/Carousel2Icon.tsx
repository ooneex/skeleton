import type { SVGProps } from "react";

export const Carousel2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="23 20.618 17.553 17.895 18.447 16.105 21 17.382 21 6.618 18.447 7.895 17.553 6.105 23 3.382 23 20.618"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <polygon
        points="1 20.618 1 3.382 6.447 6.105 5.553 7.895 3 6.618 3 17.382 5.553 16.105 6.447 17.895 1 20.618"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect x="5" y="2" width="14" height="20" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
