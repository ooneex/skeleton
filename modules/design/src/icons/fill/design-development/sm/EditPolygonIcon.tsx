import type { SVGProps } from "react";

export const EditPolygonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 3.5H16V5.5H8V3.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 18.5H19V20.5H5V18.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5422 17.2873L16.5422 7.28734L18.4579 6.71265L21.4579 16.7126L19.5422 17.2873Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.54223 16.7126L5.54223 6.71265L7.45789 7.28734L4.45789 17.2873L2.54223 16.7126Z"
        fill="currentColor"
      />
      <path d="M14.5 1.5H20.5V7.5H14.5V1.5Z" fill="currentColor" data-color="color-2" />
      <path d="M17.5 16.5H23.5V22.5H17.5V16.5Z" fill="currentColor" data-color="color-2" />
      <path d="M3.5 1.5H9.5V7.5H3.5V1.5Z" fill="currentColor" data-color="color-2" />
      <path d="M0.5 16.5H6.5V22.5H0.5V16.5Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
