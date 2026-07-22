import type { SVGProps } from "react";

export const ExpandObj2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 31L0.999999 31L1 19L3 19L3 29L13 29L13 31Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 1L31 0.999999L31 13L29 13L29 3L19 3L19 1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 7C23.6569 7 25 8.34315 25 10L25 22C25 23.6569 23.6569 25 22 25L10 25C8.34314 25 7 23.6569 7 22L7 10C7 8.34315 8.34315 7 10 7L22 7Z"
        fill="currentColor"
      />
    </svg>
  );
};
