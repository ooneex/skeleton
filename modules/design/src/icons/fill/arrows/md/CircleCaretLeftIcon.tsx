import type { SVGProps } from "react";

export const CircleCaretLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 16C1 7.729 7.729 1 16 1C24.271 1 31 7.729 31 16C31 24.271 24.271 31 16 31C7.729 31 1 24.271 1 16ZM10.5 16L19.5 22V10L10.5 16Z"
        fill="currentColor"
      />
    </svg>
  );
};
