import type { SVGProps } from "react";

export const CheckListIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.3328 11.9626L16.5519 42.7531L4.09296 30.1998L6.22227 28.0865L16.4481 38.3898L42.1054 9.95294L44.3328 11.9626Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 6H30V9H4V6Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 14H18V17H4V14Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
