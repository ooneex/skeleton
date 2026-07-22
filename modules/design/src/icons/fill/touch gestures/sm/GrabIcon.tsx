import type { SVGProps } from "react";

export const GrabIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7 5.38749C7 4.14275 8.12509 3.19972 9.35059 3.41776L18.5137 5.04862C20.1161 5.4236 21.1819 6.90283 21 8.49979L20 20.9998H7.46875V18.8748L4.19922 15.0506C3.66021 14.3851 3.10938 13.4821 3.10938 12.5926V10.1873C3.10951 8.56734 4.39412 7.24705 6 7.18924V11.9998H7V5.38749Z"
        fill="currentColor"
      />
    </svg>
  );
};
