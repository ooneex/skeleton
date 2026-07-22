import type { SVGProps } from "react";

export const ParagraphClearIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="11" width="28" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="3" width="28" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="19" width="13" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="27" width="13" height="2" strokeWidth="0" fill="currentColor" />
      <polygon
        points="29.414 20 28 18.586 24 22.586 20 18.586 18.586 20 22.586 24 18.586 28 20 29.414 24 25.414 28 29.414 29.414 28 25.414 24 29.414 20"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
