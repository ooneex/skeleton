import type { SVGProps } from "react";

export const ParagraphCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="11" width="28" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="3" width="28" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="19" width="11" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="27" width="11" height="2" strokeWidth="0" fill="currentColor" />
      <polygon
        points="21.043 29.457 15.586 24 17 22.586 20.957 26.543 28.917 17.588 30.412 18.917 21.043 29.457"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
