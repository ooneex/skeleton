import type { SVGProps } from "react";

export const PriorityLowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1716 29.6707C14.7337 31.2328 17.2663 31.2328 18.8284 29.6707L29.6707 18.8284C31.2328 17.2663 31.2328 14.7337 29.6707 13.1716L18.8284 2.32926C17.2663 0.767159 14.7337 0.767155 13.1716 2.32925L2.32929 13.1716C0.767192 14.7337 0.767189 17.2663 2.32929 18.8284L13.1716 29.6707ZM16 24.4142L8.58579 17L10 15.5858L16 21.5858L22 15.5858L23.4142 17L16 24.4142Z"
        fill="currentColor"
      />
    </svg>
  );
};
