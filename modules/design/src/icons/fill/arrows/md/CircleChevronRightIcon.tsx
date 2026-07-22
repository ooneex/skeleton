import type { SVGProps } from "react";

export const CircleChevronRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1C7.729 1 1 7.729 1 16C1 24.271 7.729 31 16 31C24.271 31 31 24.271 31 16C31 7.729 24.271 1 16 1ZM12.5858 10L14 8.58579L21.4142 16L14 23.4142L12.5858 22L18.5858 16L12.5858 10Z"
        fill="currentColor"
      />
    </svg>
  );
};
