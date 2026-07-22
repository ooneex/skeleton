import type { SVGProps } from "react";

export const TextSizeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6.12122 31H16.8701"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M28 28L41 28" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M25.0989 37H25L33.9062 10H34.5H35.0938L44 37H43.9038"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M4.09982 37H4L11.0312 17H11.5H11.9688L19 37H18.8997"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
