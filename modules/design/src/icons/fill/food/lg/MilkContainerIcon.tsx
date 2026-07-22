import type { SVGProps } from "react";

export const MilkContainerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41 42C41 44.2091 39.2091 46 37 46H11C8.79086 46 7 44.2091 7 42V20H41V42ZM24 26C20.6863 26 18 28.6863 18 32C18 35.3137 20.6863 38 24 38C27.3137 38 30 35.3137 30 32C30 28.6863 27.3137 26 24 26Z"
        fill="currentColor"
      />
      <path d="M40.2051 17H7.79492L10.4609 11H37.5391L40.2051 17Z" fill="currentColor" />
      <path d="M37 8H11V2H37V8Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
