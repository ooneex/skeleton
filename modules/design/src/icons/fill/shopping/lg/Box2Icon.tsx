import type { SVGProps } from "react";

export const Box2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19 19.5H4L4 38C4 41.3137 6.68629 44 10 44L38 44C41.3137 44 44 41.3137 44 38L44 19.5H29V28H19V19.5Z"
        fill="currentColor"
      />
      <path d="M21.1731 4H8.66374L4.49707 16.5H19.2142L21.1731 4Z" fill="currentColor" data-color="color-2" />
      <path d="M39.3362 4L43.5028 16.5H28.7857L26.8528 4H39.3362Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
