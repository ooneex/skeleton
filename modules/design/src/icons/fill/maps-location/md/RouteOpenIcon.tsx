import type { SVGProps } from "react";

export const RouteOpenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M28 15H32V17H28V15Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 15H4V17H0V15Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6ZM21.9142 13L20.5 11.5858L15 17.0858L12 14.0858L10.5858 15.5L15 19.9142L21.9142 13Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
