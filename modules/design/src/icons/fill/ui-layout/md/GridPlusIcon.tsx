import type { SVGProps } from "react";

export const GridPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M25 23V18H23V23H18V25H23V30H25V25H30V23H25Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 20.5C2 19.1193 3.11929 18 4.5 18H11.5C12.8807 18 14 19.1193 14 20.5V27.5C14 28.8807 12.8807 30 11.5 30H4.5C3.11929 30 2 28.8807 2 27.5V20.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4.5C2 3.11929 3.11929 2 4.5 2H11.5C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 4.5C18 3.11929 19.1193 2 20.5 2H27.5C28.8807 2 30 3.11929 30 4.5V11.5C30 12.8807 28.8807 14 27.5 14H20.5C19.1193 14 18 12.8807 18 11.5V4.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
