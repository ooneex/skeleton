import type { SVGProps } from "react";

export const CircleArrowDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1C7.729 1 1 7.729 1 16C1 24.271 7.729 31 16 31C24.271 31 31 24.271 31 16C31 7.729 24.271 1 16 1ZM17 7V22.0858L23 16.0858L24.4142 17.5L16 25.9142L7.58579 17.5L9 16.0858L15 22.0858V7H17Z"
        fill="currentColor"
      />
    </svg>
  );
};
