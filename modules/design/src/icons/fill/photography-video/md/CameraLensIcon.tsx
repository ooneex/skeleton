import type { SVGProps } from "react";

export const CameraLensIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M28.2381 21.8523C32.4507 19.0879 32.4507 12.9121 28.2381 10.1477L26.7421 9.16589C26.3097 8.88216 26.165 8.31557 26.4084 7.85926L29 3H17L17 29H29L26.4084 24.1407C26.165 23.6844 26.3097 23.1178 26.7421 22.8341L28.2381 21.8523Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 6L15 26H5C2.79086 26 1 24.2091 1 22V10C1 7.79086 2.79086 6 5 6H15ZM13 14L6 14V12H13V14ZM13 20V18H6V20H13Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
