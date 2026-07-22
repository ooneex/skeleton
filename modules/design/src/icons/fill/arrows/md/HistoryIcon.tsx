import type { SVGProps } from "react";

export const HistoryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3.5C22.9036 3.5 28.5 9.09644 28.5 16C28.5 22.9036 22.9036 28.5 16 28.5C9.09644 28.5 3.5 22.9036 3.5 16V15H1.5V16C1.5 24.0081 7.99187 30.5 16 30.5C24.0081 30.5 30.5 24.0081 30.5 16C30.5 7.99187 24.0081 1.5 16 1.5C10.9183 1.5 6.4484 4.1145 3.86013 8.06794L3.82677 8.04941L3.34195 8.92229C3.32415 8.95406 3.30647 8.9859 3.2889 9.01782L5.03918 9.98555L5.04104 9.98218L5.0888 9.89622C7.23002 6.07733 11.3147 3.5 16 3.5Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4.5 2.5V8.5H10.5V10.5H2.5V2.5H4.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 7V15.5859L23.9141 22.5L22.4999 23.9142L15 16.4143V7H17Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
