import type { SVGProps } from "react";

export const VanityMirrorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 18V22H11V18H13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 21H17V23H7V21Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C7.02944 1 3 5.02944 3 10C3 14.9706 7.02944 19 12 19C16.9706 19 21 14.9706 21 10C21 5.02944 16.9706 1 12 1ZM5.14784 11.4379L13.4379 3.14784C14.1689 3.30046 14.8581 3.56711 15.4859 3.92833L5.92833 13.4859C5.56711 12.8581 5.30046 12.1689 5.14784 11.4379ZM17.6791 5.90669C18.0873 6.472 18.4131 7.10069 18.639 7.77518L14.5 11.9142L13.0858 10.5L17.6791 5.90669Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
