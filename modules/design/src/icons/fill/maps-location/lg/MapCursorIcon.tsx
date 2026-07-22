import type { SVGProps } from "react";

export const MapCursorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M14.5 4.51367L2 9.29535V42.4191L14.5 37.6344L14.5 4.51367Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.9705 24L44.5 43.5L33.9705 39.5L23.5 43.5L33.9705 24Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M22.0926 39.7794L17.5 37.7701L17.5 4.54224L30.5 10.2297L30.5 24.1218L22.0926 39.7794Z"
        fill="currentColor"
      />
      <path
        d="M45.4365 38.9203L46 38.7048V5.58105L33.5 10.3657L33.5 21.0371C33.6531 21.0128 33.8091 21.0002 33.967 21.0001C35.0707 20.9988 36.0859 21.6036 36.6103 22.5747L45.4365 38.9203Z"
        fill="currentColor"
      />
    </svg>
  );
};
