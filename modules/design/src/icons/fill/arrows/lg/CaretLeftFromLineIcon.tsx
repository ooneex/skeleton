import type { SVGProps } from "react";

export const CaretLeftFromLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 44L39 4L42 4L42 44L39 44Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M34 41L34 7L8 24L34 41Z" fill="currentColor" />
    </svg>
  );
};
