import type { SVGProps } from "react";

export const RulerTriangleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2 12V9H6V7H2V0.585693L23.4142 21.9999H2V19H6V17H2V14H5V12H2Z" fill="currentColor" />
    </svg>
  );
};
