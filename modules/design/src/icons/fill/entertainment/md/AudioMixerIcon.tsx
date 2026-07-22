import type { SVGProps } from "react";

export const AudioMixerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 16C11 14.8954 11.8954 14 13 14C14.1046 14 15 14.8954 15 16C15 17.1046 14.1046 18 13 18C11.8954 18 11 17.1046 11 16Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 28C29.2091 28 31 26.2091 31 24L31 8C31 5.79086 29.2091 4 27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28L27 28ZM5 16C5 11.5817 8.58172 8 13 8C17.4183 8 21 11.5817 21 16C21 20.4183 17.4183 24 13 24C8.58172 24 5 20.4183 5 16ZM26 16H27V14H23V16H24V23H26V16ZM26 9V12H24V9H26Z"
        fill="currentColor"
      />
    </svg>
  );
};
