import type { SVGProps } from "react";

export const PassportIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 1C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H3V1H18ZM8 19V17H16V19H8ZM12 5C9.23858 5 7 7.23858 7 10C7 12.7614 9.23858 15 12 15C14.7614 15 17 12.7614 17 10C17 7.23858 14.7614 5 12 5Z"
        fill="currentColor"
      />
      <path
        d="M12 6.5C13.3706 8.63205 13.3706 11.3679 12 13.5C10.6294 11.3679 10.6294 8.63205 12 6.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M15.5 10C13.368 11.3706 10.6321 11.3706 8.5 10C10.6321 8.6294 13.368 8.62939 15.5 10Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
