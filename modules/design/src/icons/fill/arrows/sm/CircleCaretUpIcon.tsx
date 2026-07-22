import type { SVGProps } from "react";

export const CircleCaretUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.999999C5.92486 1 0.999997 5.92487 0.999999 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 0.999999 12 0.999999ZM12 7L17 14.5L7 14.5L12 7Z"
        fill="currentColor"
      />
    </svg>
  );
};
