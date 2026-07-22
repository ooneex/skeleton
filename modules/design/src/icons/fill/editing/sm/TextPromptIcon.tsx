import type { SVGProps } from "react";

export const TextPromptIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M22 2H2V4H22V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 8H2V10H22V8Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 14H2V16H12V14Z" fill="currentColor" />
      <path
        d="M19.5 16.5L18 13L16.5 16.5L13 18L16.5 19.5L18 23L19.5 19.5L23 18L19.5 16.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
