import type { SVGProps } from "react";

export const InboxStackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M9 8H39V11H9V8Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 2H33V5H15V2Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 14C5.68629 14 3 16.6863 3 20V38C3 41.3137 5.68629 44 9 44H39C42.3137 44 45 41.3137 45 38V20C45 16.6863 42.3137 14 39 14H9ZM18 26V23H15V29H33V23H30V26H18Z"
        fill="currentColor"
      />
    </svg>
  );
};
