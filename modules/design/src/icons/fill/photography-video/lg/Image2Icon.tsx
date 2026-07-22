import type { SVGProps } from "react";

export const Image2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.4673 13.9753L45.6807 42.0001H2.10181L13.9647 24.7001L19.6183 32.2579L30.4673 13.9753Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 12C8 8.68629 10.6863 6 14 6C17.3137 6 20 8.68629 20 12C20 15.3137 17.3137 18 14 18C10.6863 18 8 15.3137 8 12Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
