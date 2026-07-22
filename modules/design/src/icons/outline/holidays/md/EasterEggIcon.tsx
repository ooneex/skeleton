import type { SVGProps } from "react";

export const EasterEggIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 19L4.37244 19.1862C11.6922 22.8461 20.3078 22.8461 27.6275 19.1862L28 19"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M4.37244 14.1862C11.6921 17.8461 20.3078 17.8461 27.6275 14.1862"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M28 18.1C28 25.0588 22.6274 30 16 30C9.37258 30 4 25.0588 4 18.1C4 11.1412 9.37258 2 16 2C22.6274 2 28 11.1412 28 18.1Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
