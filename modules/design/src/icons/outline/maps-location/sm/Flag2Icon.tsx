import type { SVGProps } from "react";

export const Flag2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 4L5.84462 3.26215C7.83264 2.46694 10.0781 2.64687 11.9141 3.74849V3.74849C13.2635 4.55807 14.8503 4.87853 16.4081 4.65599L21 4L18 10L21 16L16.4081 16.656C14.8503 16.8785 13.2635 16.5581 11.9141 15.7485V15.7485C10.0781 14.6469 7.83264 14.4669 5.84462 15.2622L4 16"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M4 22V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
    </svg>
  );
};
