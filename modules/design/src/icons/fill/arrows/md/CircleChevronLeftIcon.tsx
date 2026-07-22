import type { SVGProps } from "react";

export const CircleChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 16C1 7.729 7.729 1 16 1C24.271 1 31 7.729 31 16C31 24.271 24.271 31 16 31C7.729 31 1 24.271 1 16ZM19.4142 10L18 8.58579L10.5858 16L18 23.4142L19.4142 22L13.4142 16L19.4142 10Z"
        fill="currentColor"
      />
    </svg>
  );
};
