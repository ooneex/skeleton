import type { SVGProps } from "react";

export const NewspaperIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 44C4.46243 44 2 41.5376 2 38.5V26.5H5V38.5C5 39.8807 6.11929 41 7.5 41C8.88071 41 10 39.8807 10 38.5V4H44V38.5C44 41.5376 41.5376 44 38.5 44H7.5ZM36 12H19V23H36V12ZM19 28H36V31H19V28ZM19 34H36V37H19V34Z"
        fill="currentColor"
      />
    </svg>
  );
};
