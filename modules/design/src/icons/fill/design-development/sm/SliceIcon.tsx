import type { SVGProps } from "react";

export const SliceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9259 12.3661L10.1937 9.05667L13.6573 3.08123C14.5712 1.49835 16.5953 0.956018 18.1782 1.86991C19.761 2.7838 20.3034 4.80784 19.3895 6.39073L15.9259 12.3661Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M9.19382 10.7888L1.92688 23.3755L14.3001 19.6486L12.3901 14.3244L13.122 13.0567L9.19382 10.7888Z"
        fill="currentColor"
      />
    </svg>
  );
};
