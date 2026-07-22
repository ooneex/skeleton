import type { SVGProps } from "react";

export const CarDoorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 29C27.6569 29 29 27.6569 29 26V15H3V26C3 27.6569 4.34315 29 6 29H26ZM20 20V22H25V20H20Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 17.4444C2 8.91471 8.91472 2 17.4444 2L26 2C28.2091 2 30 3.79086 30 6L30 26C30 28.2091 28.2091 30 26 30L6 30C3.79086 30 2 28.2091 2 26L2 17.4444ZM17.4444 4C10.0193 4 4 10.0193 4 17.4444L4 26C4 27.1046 4.89543 28 6 28L26 28C27.1046 28 28 27.1046 28 26L28 6C28 4.89543 27.1046 4 26 4L17.4444 4Z"
        fill="currentColor"
      />
    </svg>
  );
};
