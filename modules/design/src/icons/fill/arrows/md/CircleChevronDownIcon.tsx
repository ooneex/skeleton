import type { SVGProps } from "react";

export const CircleChevronDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 16C1 7.729 7.729 1 16 1C24.271 1 31 7.729 31 16C31 24.271 24.271 31 16 31C7.729 31 1 24.271 1 16ZM10 12.5858L8.58579 14L16 21.4142L23.4142 14L22 12.5858L16 18.5858L10 12.5858Z"
        fill="currentColor"
      />
    </svg>
  );
};
