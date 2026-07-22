import type { SVGProps } from "react";

export const AlignBottomIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 44L2 44L2 41L46 41L46 44Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 4L21 4L21 38L9 38L9 4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M27 19L39 19L39 38L27 38L27 19Z" fill="currentColor" />
    </svg>
  );
};
