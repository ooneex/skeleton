import type { SVGProps } from "react";

export const TogglesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4C8.02944 4 4 8.02944 4 13C4 17.9706 8.02944 22 13 22H35C39.9706 22 44 17.9706 44 13C44 8.02944 39.9706 4 35 4H13ZM19 13C19 16.3137 16.3137 19 13 19C9.68629 19 7 16.3137 7 13C7 9.68629 9.68629 7 13 7C16.3137 7 19 9.68629 19 13Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 26C39.9706 26 44 30.0294 44 35C44 39.9706 39.9706 44 35 44H13C8.02944 44 4 39.9706 4 35C4 30.0294 8.02943 26 13 26H35ZM29 35C29 38.3137 31.6863 41 35 41C38.3137 41 41 38.3137 41 35C41 31.6863 38.3137 29 35 29C31.6863 29 29 31.6863 29 35Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
