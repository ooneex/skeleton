import type { SVGProps } from "react";

export const StorageUnitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 23V16H16V18H18V16H21V23H13Z" fill="currentColor" />
      <path d="M3 23V16H6V18H8V16H11V23H3Z" fill="currentColor" />
      <path d="M8 14V7H11V9H13V7H16V14H8Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.381958L23.3416 6.05278L22.4472 7.84163L12 2.61803L1.55279 7.84163L0.658359 6.05278L12 0.381958Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
