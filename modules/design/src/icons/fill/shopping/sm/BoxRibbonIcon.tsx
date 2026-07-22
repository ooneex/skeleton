import type { SVGProps } from "react";

export const BoxRibbonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 14L15 16V9H9V16L12 14Z" fill="currentColor" data-color="color-2" />
      <path
        d="M13.8906 17.6641C14.5043 18.0732 15.2934 18.1114 15.9437 17.7633C16.594 17.4153 17 16.7376 17 16V9L22 9L22 19C22 20.6569 20.6569 22 19 22L5 22C3.34314 22 2 20.6569 2 19V9H7V16C7 16.7376 7.40597 17.4153 8.05628 17.7633C8.7066 18.1114 9.49569 18.0732 10.1094 17.6641L12 16.4037L13.8906 17.6641Z"
        fill="currentColor"
      />
      <path d="M8.5 2V7H15.5V2H8.5Z" fill="currentColor" data-color="color-2" />
      <path d="M17.5 7H23V2L17.5 2V7Z" fill="currentColor" />
      <path d="M6.5 7V2H1V7L6.5 7Z" fill="currentColor" />
    </svg>
  );
};
