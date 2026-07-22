import type { SVGProps } from "react";

export const FolderSliderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 19V23H15V22H13V20H15V19H17Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 18V14H22V15H24V17H22V18H20Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M19 20H24V22H19V20Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 17H13V15H18V17Z" fill="currentColor" data-color="color-2" />
      <path
        d="M1 5C1 3.34315 2.34315 2 4 2H10.4142L13.4142 5H20C21.6569 5 23 6.34315 23 8V12.2676C22.7058 12.0974 22.3643 12 22 12H20C19.2529 12 18.6015 12.4096 18.2581 13.0165C18.1736 13.0056 18.0875 13 18 13H13C11.8954 13 11 13.8954 11 15V21H4C2.34315 21 1 19.6569 1 18V5Z"
        fill="currentColor"
      />
    </svg>
  );
};
