import type { SVGProps } from "react";

export const RulerTriangleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M31.4142 28.9999L3 0.585693V9H9V11H3V13H7V15H3V17H9V19H3V21H7V23H3V25H9V27H3V28.9999H31.4142Z"
        fill="currentColor"
      />
    </svg>
  );
};
