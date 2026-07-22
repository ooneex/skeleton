import type { SVGProps } from "react";

export const EnvelopeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16,14.882l15-7.5v-.382c0-2.206-1.794-4-4-4H5c-2.206,0-4,1.794-4,4v.382l15,7.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m16,17.118L1,9.618v15.382c0,2.206,1.794,4,4,4h22c2.206,0,4-1.794,4-4v-15.382l-15,7.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
