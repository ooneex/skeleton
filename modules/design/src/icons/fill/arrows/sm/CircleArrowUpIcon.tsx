import type { SVGProps } from "react";

export const CircleArrowUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 0.999999 5.92487 0.999999 12C1 18.0751 5.92487 23 12 23ZM13 18L11 18L11 9.41422L7.75736 12.6568L6.34315 11.2426L12 5.58576L17.6569 11.2426L16.2426 12.6568L13 9.41415L13 18Z"
        fill="currentColor"
      />
    </svg>
  );
};
