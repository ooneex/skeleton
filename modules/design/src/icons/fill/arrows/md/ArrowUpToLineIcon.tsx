import type { SVGProps } from "react";

export const ArrowUpToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M15 30L15 9H17L17 30L15 30Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.00015 19.4143L16.0002 10.4143L25.0002 19.4143L26.4144 18.0001L16.0002 7.58588L5.58594 18.0001L7.00015 19.4143Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 3L30 5L2 5L2 3L30 3Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
