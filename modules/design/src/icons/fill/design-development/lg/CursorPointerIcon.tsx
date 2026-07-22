import type { SVGProps } from "react";

export const CursorPointerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 23.3904V30.4901C8 31.5809 8.35675 32.6419 9.01584 33.5111L15.3081 41.8095V46H37.117L39.2753 28.014C39.6909 24.5502 37.4927 21.3091 34.1208 20.4142L20 16.6666V5C20 3.34315 18.6569 2 17 2C15.3431 2 14 3.34315 14 5V29.0254H13L12 19.3904C9.79086 19.3904 8 21.1813 8 23.3904ZM24 29V35H21V29H24ZM30 29H27V35H30V29Z"
        fill="currentColor"
      />
    </svg>
  );
};
