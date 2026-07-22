import type { SVGProps } from "react";

export const PrintIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 30L7 18L25 18L25 30L7 30Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 7L7 2L25 2L25 7L7 7Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 13C2 10.7909 3.79086 9 6 9H26C28.2091 9 30 10.7909 30 13V25H27L27 18C27 17.4696 26.7893 16.9609 26.4142 16.5858C26.0391 16.2107 25.5304 16 25 16L7 16C5.89543 16 5 16.8954 5 18L5 25H2L2 13ZM10 14V12L7 12V14H10Z"
        fill="currentColor"
      />
    </svg>
  );
};
