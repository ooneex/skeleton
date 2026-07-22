import type { SVGProps } from "react";

export const ShowersIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4142 4.00003L11 14.4142L9.58582 13L20 2.58582L21.4142 4.00003Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4142 4.00003L2.00003 14.4142L0.585815 13L11 2.58582L12.4142 4.00003Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4142 13L11 23.4142L9.58582 22L20 11.5858L21.4142 13Z"
        fill="currentColor"
      />
    </svg>
  );
};
