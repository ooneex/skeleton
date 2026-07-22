import type { SVGProps } from "react";

export const EnvelopeOpenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16,.848L1,9.42v15.58c0,2.206,1.794,4,4,4h22c2.206,0,4-1.794,4-4v-15.58L16,.848Zm11.985,9.152l-11.985,6.848-11.985-6.848,11.985-6.848,11.985,6.848Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
