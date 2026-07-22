import type { SVGProps } from "react";

export const ListMultipleChoiceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="14" y="6" width="9" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="2" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="14" y="16" width="9" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <polygon
        points="11.414 14 10 12.586 6.5 16.086 3 12.586 1.586 14 5.086 17.5 1.586 21 3 22.414 6.5 18.914 10 22.414 11.414 21 7.914 17.5 11.414 14"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
