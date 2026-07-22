import type { SVGProps } from "react";

export const CurvedArrowDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.49998 4C6.46242 4.00001 4 6.46244 4 9.5V15H2V9.5C2 5.35787 5.35785 2.00001 9.49997 2C13.6421 1.99999 17 5.35785 17 9.5V21.5H15V9.5C15 6.46243 12.5376 3.99999 9.49998 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9999 15.0858L15.9999 20.0858L20.9999 15.0858L22.4141 16.5L15.9999 22.9142L9.58569 16.5L10.9999 15.0858Z"
        fill="currentColor"
      />
    </svg>
  );
};
