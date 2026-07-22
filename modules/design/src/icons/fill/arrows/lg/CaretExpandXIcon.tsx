import type { SVGProps } from "react";

export const CaretExpandXIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.7204 24.0001L28.9999 35.9433L28.9999 12.0569L45.7204 24.0001Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.2796 23.9999L19.0001 12.0567L19.0001 35.9431L2.2796 23.9999Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
