import type { SVGProps } from "react";

export const CursorNotAllowedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.2928 28.7072L15.2928 16.7072L16.7071 15.293L28.7071 27.293L27.2928 28.7072Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 15C18.134 15 15 18.134 15 22C15 25.866 18.134 29 22 29C25.866 29 29 25.866 29 22C29 18.134 25.866 15 22 15ZM13 22C13 17.0294 17.0294 13 22 13C26.9706 13 31 17.0294 31 22C31 26.9706 26.9706 31 22 31C17.0294 31 13 26.9706 13 22Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M7.21422 20.1399L2.04395 2.04395L20.1399 7.21422L11.7382 11.7382L7.21422 20.1399Z" fill="currentColor" />
    </svg>
  );
};
