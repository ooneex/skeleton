import type { SVGProps } from "react";

export const BoxCartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4H10.0001L10 28C10 29.6568 11.3432 31 13 31H42V34H13C9.6863 34 7.00001 31.3137 7.00002 28L7.00011 7H4V4Z"
        fill="currentColor"
      />
      <path d="M29 7H39V28H13V7H23L23 16H29V7Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 41.5C7 39.0147 9.01472 37 11.5 37C13.9853 37 16 39.0147 16 41.5C16 43.9853 13.9853 46 11.5 46C9.01472 46 7 43.9853 7 41.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 41.5C34 39.0147 36.0147 37 38.5 37C40.9853 37 43 39.0147 43 41.5C43 43.9853 40.9853 46 38.5 46C36.0147 46 34 43.9853 34 41.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
