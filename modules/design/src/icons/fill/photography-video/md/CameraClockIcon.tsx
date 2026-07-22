import type { SVGProps } from "react";

export const CameraClockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 6C29.2091 6 31 7.79086 31 10L31 25C31 27.2091 29.2091 29 27 29L5 29C2.79086 29 1 27.2091 1 25V10C1 7.79086 2.79086 6 5 6H8.5L11.5 2H20.5L23.5 6L27 6ZM17 11.5H15V19H24V17H17V11.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
