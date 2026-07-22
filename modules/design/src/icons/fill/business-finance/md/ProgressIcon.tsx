import type { SVGProps } from "react";

export const ProgressIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 6L19.5 3L16 2.5V16H29.5V15L28 10L25 6Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3.5C22.9036 3.5 28.5 9.09644 28.5 16C28.5 22.9036 22.9036 28.5 16 28.5C9.09644 28.5 3.5 22.9036 3.5 16V15H1.5V16C1.5 24.0081 7.99187 30.5 16 30.5C24.0081 30.5 30.5 24.0081 30.5 16C30.5 7.99187 24.0081 1.5 16 1.5C10.9183 1.5 6.4484 4.1145 3.86013 8.06794C3.78987 8.02892 3.35481 8.89807 3.2889 9.01782L5.0888 9.89622C7.23002 6.07733 11.3147 3.5 16 3.5Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4.5 1.5V8.5H11.5V10.5H2.5V1.5H4.5Z" fill="currentColor" />
    </svg>
  );
};
