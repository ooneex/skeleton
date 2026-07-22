import type { SVGProps } from "react";

export const DotsVerticalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="12" r="1.75" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="12" cy="3.75" r="1.75" strokeWidth="0" fill="currentColor" />
      <circle cx="12" cy="20.25" r="1.75" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
