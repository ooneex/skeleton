import type { SVGProps } from "react";

export const IndustryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8.73684 1C5.73338 1 3 3.08659 3 6H20C20 3.45525 17.6195 1.66667 15.0526 1.66667C14.1424 1.66667 13.2903 1.88731 12.556 2.26885C11.5299 1.47008 10.1856 1 8.73684 1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M3.07987 8L1.9132 22H8V8H3.07987Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 9.43707L15.5 12.4371L22 9.43708V22H10V11.9755L15.5 9.43707ZM15.99 16V19H19V16H15.99Z"
        fill="currentColor"
      />
    </svg>
  );
};
