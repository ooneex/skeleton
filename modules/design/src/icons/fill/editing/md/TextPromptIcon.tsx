import type { SVGProps } from "react";

export const TextPromptIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M25.45 21.55L23.5 17L21.55 21.55L17 23.5L21.55 25.45L23.5 30L25.45 25.45L30 23.5L25.45 21.55Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 11H30V13H2V11Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 3H30V5H2V3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 19H16V21H2V19Z" fill="currentColor" />
    </svg>
  );
};
