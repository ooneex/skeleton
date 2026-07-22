import type { SVGProps } from "react";

export const DotsVerticalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 16C14 17.1046 14.8954 18 16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M14 27C14 28.1046 14.8954 29 16 29C17.1046 29 18 28.1046 18 27C18 25.8954 17.1046 25 16 25C14.8954 25 14 25.8954 14 27Z"
        fill="currentColor"
      />
      <path
        d="M14 5C14 6.10457 14.8954 7 16 7C17.1046 7 18 6.10457 18 5C18 3.89543 17.1046 3 16 3C14.8954 3 14 3.89543 14 5Z"
        fill="currentColor"
      />
    </svg>
  );
};
