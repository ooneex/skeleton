import type { SVGProps } from "react";

export const BootIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M26 13H20V16H26V18H20V21H26V23H20V26H26L35.1396 27.0547C40.2679 27.5439 44.3841 31.2138 45.6182 36H4V10H26V13Z"
        fill="currentColor"
      />
      <path d="M26 7H4V2H26V7Z" fill="currentColor" />
      <path
        d="M46 40.5C46 42.433 44.433 44 42.5 44H10C7.02712 44 4.56117 41.8376 4.08496 39H46V40.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
