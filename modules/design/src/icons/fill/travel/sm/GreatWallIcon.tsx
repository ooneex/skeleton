import type { SVGProps } from "react";

export const GreatWallIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10.3301 0.916992L10.7285 5.71094L13.3086 7.32422L15.0039 7.69531V12.5L14.21 13.4668L7 8.92285V5H5L4.99805 10.0078L1.1123 7.61328L1.74609 0H10.2529L10.3301 0.916992Z"
        fill="currentColor"
      />
      <path
        d="M23 7.38184V16.5547L22.5303 16.8477L11.332 23.8477L11.0889 24H10L10.1074 19.1123L19 13.5547V10H17V12.4453L13 14.9453V7.38184L18 4.88184L23 7.38184Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M11.0869 24H7.02539V20H5.02539V24H0.913086L1.74609 14H10.2539L11.0869 24Z" fill="currentColor" />
    </svg>
  );
};
