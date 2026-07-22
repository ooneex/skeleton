import type { SVGProps } from "react";

export const CubeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 23.1513V11.618L23 6.61804V18.7302L13 23.1513Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.406616L1.94238 4.85315L12 9.88197L22.0577 4.85315L12 0.406616Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 6.61804L11 11.618V23.1513L1 18.7302V6.61804Z"
        fill="currentColor"
      />
    </svg>
  );
};
