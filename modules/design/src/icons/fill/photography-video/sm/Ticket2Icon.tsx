import type { SVGProps } from "react";

export const Ticket2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8 3H1V9.34713L1.87642 9.4932C3.10184 9.69744 4 10.7577 4 12C4 13.2423 3.10184 14.3026 1.87642 14.5068L1 14.6529V21H8V3Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 14.6529L22.1236 14.5068C20.8982 14.3026 20 13.2423 20 12C20 10.7577 20.8982 9.69743 22.1236 9.4932L23 9.34713V3H10V21H23V14.6529ZM13 11L13 13L16 13L16 11L13 11ZM13 7L17 7V9L13 9L13 7ZM13 15L13 17H17V15H13Z"
        fill="currentColor"
      />
    </svg>
  );
};
