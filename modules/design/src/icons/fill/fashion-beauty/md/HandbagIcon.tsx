import type { SVGProps } from "react";

export const HandbagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19 5C19 3.34315 17.6569 2 16 2C14.3431 2 13 3.34315 13 5V7H11V5C11 2.23858 13.2386 0 16 0C18.7614 0 21 2.23858 21 5V7H19V5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M29.1749 23.1514C29.6912 26.7658 26.8865 29.9997 23.2354 30H8.76474C5.11364 29.9998 2.30893 26.7658 2.82528 23.1514L5.1329 7H11.0001V13H13.0001V7H19.0001V13H21.0001V7H26.8673L29.1749 23.1514Z"
        fill="currentColor"
      />
    </svg>
  );
};
