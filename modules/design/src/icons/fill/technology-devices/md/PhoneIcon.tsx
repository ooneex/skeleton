import type { SVGProps } from "react";

export const PhoneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m21.084,17.047l-3.879,4.657c-2.77-1.774-5.135-4.138-6.908-6.908l4.658-3.881L10.471.819l-7.284,1.889c-1.434.375-2.362,1.764-2.159,3.234,1.814,12.923,12.107,23.216,25.033,25.031.135.019.269.027.401.027,1.312,0,2.489-.885,2.83-2.188l1.889-7.281-10.097-4.484Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
