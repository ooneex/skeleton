import type { SVGProps } from "react";

export const SquareBarsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4H38C41.3137 4 44 6.68629 44 10V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V10C4 6.68629 6.68629 4 10 4ZM36 17H12V14H36V17ZM36 25.5H12V22.5H36V25.5ZM12 34H36V31H12V34Z"
        fill="currentColor"
      />
    </svg>
  );
};
