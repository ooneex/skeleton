import type { SVGProps } from "react";

export const ParagraphAddIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="8" width="20" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="3" width="20" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="13" width="8" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="18" width="8" height="2" strokeWidth="0" fill="currentColor" />
      <polygon
        points="22 16 18 16 18 12 16 12 16 16 12 16 12 18 16 18 16 22 18 22 18 18 22 18 22 16"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
