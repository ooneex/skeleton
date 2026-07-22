import type { SVGProps } from "react";

export const RulerPenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1H3V23H12V1ZM5 9V7H9V9H5ZM5 11V13H7V11H5ZM5 17V15H9V17H5ZM5 21V19H7V21H5ZM5 3V5H7V3H5Z"
        fill="currentColor"
      />
      <path d="M20 7V19.9231L17.5 23L15 19.9231V7H20Z" fill="currentColor" />
      <path d="M20 5L20 1L15 1.00005V5H20Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
