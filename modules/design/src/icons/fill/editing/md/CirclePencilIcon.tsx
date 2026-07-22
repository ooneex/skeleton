import type { SVGProps } from "react";

export const CirclePencilIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16ZM16 6.66667L12.5 16H19.5L16 6.66667ZM8.3661 26.5237C10.5097 28.0813 13.1475 29 16 29C18.8524 29 21.4903 28.0813 23.6339 26.5237L21.3092 18H10.6907L8.3661 26.5237Z"
        fill="currentColor"
      />
    </svg>
  );
};
