import type { SVGProps } from "react";

export const ButterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M46 30V34.3467L42.8867 34.8652L42.6035 36.8486C42.1812 39.8045 39.649 42 36.6631 42H11.3369C8.35103 42 5.81878 39.8045 5.39648 36.8486L5.1123 34.8652L2 34.3467V30H46Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M34.8291 6C35.8678 6.00001 36.8526 6.4618 37.5176 7.25977L41.4688 12H32V19.5C32 20.8807 30.8807 22 29.5 22C28.2057 22 27.1408 21.0164 27.0127 19.7559L27 12H6.53223L10.6104 7.11328C11.2703 6.40518 12.1972 6.00001 13.1709 6H34.8291Z"
        fill="currentColor"
      />
      <path
        d="M24 15L24.0068 19.7832C24.1542 22.6892 26.5574 25 29.5 25C32.5375 25 35 22.5375 35 19.5V15H42V27H6V15H24Z"
        fill="currentColor"
      />
    </svg>
  );
};
