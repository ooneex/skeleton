import type { SVGProps } from "react";

export const ParagraphAddIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="11" width="28" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="3" width="28" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="19" width="13" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="27" width="13" height="2" strokeWidth="0" fill="currentColor" />
      <polygon
        points="30 23 25 23 25 18 23 18 23 23 18 23 18 25 23 25 23 30 25 30 25 25 30 25 30 23"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
