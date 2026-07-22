import type { SVGProps } from "react";

export const AxisXIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 2V27H44V30H20.1213L4.99998 45.1213L2.87866 43L18 27.8787V2H21Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.3935 41.2279L46.1214 28.5L33.3935 15.7721L31.2721 17.8934L41.8787 28.5L31.2721 39.1066L33.3935 41.2279Z"
        fill="currentColor"
      />
    </svg>
  );
};
