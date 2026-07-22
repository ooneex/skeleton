import type { SVGProps } from "react";

export const ListMultipleChoiceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="13.914 19.5 12.5 18.086 8 22.586 3.5 18.086 2.086 19.5 6.586 24 2.086 28.5 3.5 29.914 8 25.414 12.5 29.914 13.914 28.5 9.414 24 13.914 19.5"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect x="17" y="7" width="13" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="2" width="12" height="12" rx="2.5" ry="2.5" strokeWidth="0" fill="currentColor" />
      <rect x="17" y="23" width="13" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
