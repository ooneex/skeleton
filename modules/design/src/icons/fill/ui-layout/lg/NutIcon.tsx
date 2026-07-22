import type { SVGProps } from "react";

export const NutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.0562 5H11.9439L1.86816 24L11.9439 43H36.0562L46.132 24L36.0562 5ZM24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14Z"
        fill="currentColor"
      />
    </svg>
  );
};
