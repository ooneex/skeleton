import type { SVGProps } from "react";

export const CubeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 14.6466V30.6445L30 24.7498V8.79657L17 14.6466Z" fill="currentColor" />
      <path d="M15 14.6466L2 8.79657V24.7498L15 30.6445V14.6466Z" fill="currentColor" />
      <path
        d="M16 0.901978L2.71588 6.92554L16 12.9034L29.2841 6.92554L16 0.901978Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
