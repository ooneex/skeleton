import type { SVGProps } from "react";

export const LightSwitch2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 44H25.5V4H38C41.3137 4 44 6.68629 44 10V38C44 41.3137 41.3137 44 38 44ZM37 24V37H32V24H37Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4H22.5V44H10C6.68629 44 4 41.3137 4 38V10C4 6.68629 6.68629 4 10 4ZM16 24V37H11V24H16Z"
        fill="currentColor"
      />
    </svg>
  );
};
