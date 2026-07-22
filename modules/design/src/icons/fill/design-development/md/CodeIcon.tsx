import type { SVGProps } from "react";

export const CodeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9142 7.51456L3.42893 15.9998L11.9142 24.4851L10.5 25.8993L0.600506 15.9998L10.5 6.10034L11.9142 7.51456Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.1006 7.51455L28.5858 15.9998L20.1006 24.4851L21.5148 25.8993L31.4143 15.9998L21.5148 6.10034L20.1006 7.51455Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
