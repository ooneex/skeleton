import type { SVGProps } from "react";

export const ConnectionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.6326 6.50005 20.4476 11 20.9451V16H13V23H12C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 16.0728 20.786 19.6273 17.5007 21.5278L16.6351 22.0285L15.6337 20.2973L16.4993 19.7966C19.192 18.2389 21 15.33 21 12C21 7.02944 16.9706 3 12 3Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M11 7L11 12L9 12L9 7L11 7Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 7L15 12L13 12L13 7L15 7Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 13C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13L7 10L17 10L17 13Z"
        fill="currentColor"
      />
    </svg>
  );
};
