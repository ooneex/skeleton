import type { SVGProps } from "react";

export const ListTodoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="5 21.414 1.336 17.75 2.75 16.336 5 18.586 10.5 13.086 11.914 14.5 5 21.414"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect x="14" y="6" width="9" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="2" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="14" y="16" width="9" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
