import type { SVGProps } from "react";

export const TransformIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 31L1 31V14L18 14L18 31ZM12 21.4142V25H14V18.0002L7.00004 18L6.99997 20L10.5857 20.0001L5.0963 25.4895L6.51051 26.9037L12 21.4142Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10.5C12 5.25329 16.2533 1 21.5 1C26.7467 1 31 5.25329 31 10.5C31 15.7467 26.7467 20 21.5 20H20V14C20 12.8954 19.1046 12 18 12H12V10.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
