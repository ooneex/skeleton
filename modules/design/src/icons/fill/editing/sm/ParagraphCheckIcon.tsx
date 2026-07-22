import type { SVGProps } from "react";

export const ParagraphCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="8" width="20" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="2" width="20" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="14" width="7" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="20" width="7" height="2" strokeWidth="0" fill="currentColor" />
      <polygon
        points="15.057 22.471 10.586 18 12 16.586 14.943 19.529 20.892 12.59 22.41 13.892 15.057 22.471"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
