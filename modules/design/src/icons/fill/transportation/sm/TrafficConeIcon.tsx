import type { SVGProps } from "react";

export const TrafficConeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7208 2H9.27924L3.05132 20.6838L20.9487 20.6838L14.7208 2ZM16.2792 13L16.9459 15H7.05409L7.72076 13H16.2792ZM14.6126 8L15.2792 10H8.72076L9.38743 8H14.6126Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 20H23V22H1V20Z" fill="currentColor" />
    </svg>
  );
};
