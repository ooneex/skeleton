import type { SVGProps } from "react";

export const TreeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 24V31H15V24H17Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1.2998L25.7604 14.7204L22.5805 15.2504L28.7232 26H3.27679L9.41944 15.2504L6.23956 14.7204L16 1.2998Z"
        fill="currentColor"
      />
    </svg>
  );
};
