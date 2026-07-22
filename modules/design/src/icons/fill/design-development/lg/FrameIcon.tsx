import type { SVGProps } from "react";

export const FrameIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 9H39V39H9V9Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M39 42V47H36V42H39Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M39 1V6H36V1H39Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 42V47H9V42H12Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 1V6H9V1H12Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 39L1 39L1 36L6 36L6 39Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47 39L42 39L42 36L47 36L47 39Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 12L1 12L1 9L6 9L6 12Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47 12L42 12L42 9L47 9L47 12Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
