import type { SVGProps } from "react";

export const MirrorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 0.662048L17.1644 5.25259L15.8357 6.74741L12.0001 3.33796L8.16442 6.74741L6.83569 5.25259L12.0001 0.662048Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 5H3V22H21V5ZM19 13.4142L12.4142 20L9.58579 20L19 10.5858V13.4142ZM5 18.4142L5 15.5858L8.5 12.0858L9.91422 13.5L5 18.4142Z"
        fill="currentColor"
      />
    </svg>
  );
};
