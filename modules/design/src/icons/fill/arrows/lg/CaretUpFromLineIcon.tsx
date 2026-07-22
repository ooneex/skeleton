import type { SVGProps } from "react";

export const CaretUpFromLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 39L4 39L4 42L44 42L44 39Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M41 34L7 34L24 8L41 34Z" fill="currentColor" />
    </svg>
  );
};
