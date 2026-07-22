import type { SVGProps } from "react";

export const ReservedTagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7.2419 24H3.36983C1.82052 23.9998 0.656725 22.6098 0.90108 21.1035L3.73018 8.35254L7.2419 24Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.0654 22.9521C31.4162 24.5148 30.2275 26 28.626 26H12.1416C10.7379 26 9.52135 25.0268 9.21387 23.6572L5.25098 6H27.2598L31.0654 22.9521ZM14.5 18H24L23 14H13.5L14.5 18Z"
        fill="currentColor"
      />
    </svg>
  );
};
