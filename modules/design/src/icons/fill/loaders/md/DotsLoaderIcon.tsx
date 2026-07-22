import type { SVGProps } from "react";

export const DotsLoaderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 19.5C17.933 19.5 19.5 17.933 19.5 16C19.5 14.067 17.933 12.5 16 12.5C14.067 12.5 12.5 14.067 12.5 16C12.5 17.933 14.067 19.5 16 19.5Z"
        fill="currentColor"
      />
      <path
        d="M27 19.5C28.933 19.5 30.5 17.933 30.5 16C30.5 14.067 28.933 12.5 27 12.5C25.067 12.5 23.5 14.067 23.5 16C23.5 17.933 25.067 19.5 27 19.5Z"
        fill="currentColor"
      />
      <path
        d="M5 19.5C6.933 19.5 8.5 17.933 8.5 16C8.5 14.067 6.933 12.5 5 12.5C3.067 12.5 1.5 14.067 1.5 16C1.5 17.933 3.067 19.5 5 19.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
