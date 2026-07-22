import type { SVGProps } from "react";

export const BooleanUnionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 4L44 34L14 34L14 4L44 4ZM41 7L17 7L17 31L41 31L41 7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 14L34 44L4 44L4 14L34 14ZM31 17L7 17L7 41L31 41L31 17Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
