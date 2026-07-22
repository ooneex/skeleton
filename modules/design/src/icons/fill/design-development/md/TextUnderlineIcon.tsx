import type { SVGProps } from "react";

export const TextUnderlineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 27H30V29H2V27Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3V15C9 18.866 12.134 22 16 22C19.866 22 23 18.866 23 15V3H25V15C25 19.9706 20.9706 24 16 24C11.0294 24 7 19.9706 7 15V3H9Z"
        fill="currentColor"
      />
    </svg>
  );
};
