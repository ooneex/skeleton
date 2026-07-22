import type { SVGProps } from "react";

export const Heading4Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.8968 5H31V27H29V20H19V18.1944L27.8968 5ZM29 18V7L21.5432 18H29Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 15H15V17H1V15Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 5V27H1V5H3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 5V27H13V5H15Z" fill="currentColor" />
    </svg>
  );
};
