import type { SVGProps } from "react";

export const FolderPlayIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 14.8087L32.075 22L19 29.1913V14.8087Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M1 7C1 4.79086 2.79086 3 5 3H13.6L17.8 7H27C29.2091 7 31 8.79086 31 11V19.1262L19.9638 13.0563C19.3442 12.7155 18.5908 12.7272 17.9821 13.0871C17.3734 13.447 17 14.1016 17 14.8087V28H5C2.79086 28 1 26.2091 1 24V7Z"
        fill="currentColor"
      />
    </svg>
  );
};
