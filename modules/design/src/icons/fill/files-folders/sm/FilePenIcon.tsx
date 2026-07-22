import type { SVGProps } from "react";

export const FilePenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 23L22 17C22.8284 16.1716 22.8284 14.8285 22 14C21.1716 13.1716 19.8284 13.1716 19 14L13 20V23H16Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.95711 1.87868C9.51972 1.31607 10.2828 1 11.0784 1H18C19.6569 1 21 2.34315 21 4V11.409C19.7855 11.2614 18.5179 11.6536 17.5858 12.5858L11.5858 18.5858C11.2107 18.9609 11 19.4696 11 20V23H6C4.34315 23 3 21.6569 3 20V9.07843C3 8.28278 3.31607 7.51972 3.87868 6.95711L8.95711 1.87868ZM5 9H11V3L5 9Z"
        fill="currentColor"
      />
    </svg>
  );
};
