import type { SVGProps } from "react";

export const CameraLensIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21.0117 16.9219C24.649 14.6486 24.649 9.35139 21.0117 7.07809C20.6088 6.82625 20.4634 6.30935 20.6759 5.88435L22.618 2H14V22H22.618L20.6759 18.1157C20.4634 17.6907 20.6088 17.1737 21.0117 16.9219Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 19C2.11929 19 1 17.8807 1 16.5V7.5C1 6.11929 2.11929 5 3.5 5H12L12 19L3.5 19ZM10 11H4V9H10V11ZM10 15V13H4V15H10Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
