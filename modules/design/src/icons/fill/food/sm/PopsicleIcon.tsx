import type { SVGProps } from "react";

export const PopsicleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 21V17H14V21C14 22.1046 13.1046 23 12 23C10.8954 23 10 22.1046 10 21Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C15.866 1 19 4.13401 19 8V18H5V8C5 4.13401 8.13401 1 12 1ZM9 8V14H11V8H9ZM13 14H15V8H13V14Z"
        fill="currentColor"
      />
    </svg>
  );
};
