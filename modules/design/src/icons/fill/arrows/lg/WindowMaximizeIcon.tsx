import type { SVGProps } from "react";

export const WindowMaximizeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 8.68629 4.68629 6 8 6H40C43.3137 6 46 8.68629 46 12V36C46 39.3137 43.3137 42 40 42H8C4.68629 42 2 39.3137 2 36V12ZM40 39C41.6569 39 43 37.6569 43 36V16H5V36C5 37.6569 6.34315 39 8 39H40Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.5 32.6213L39.0606 22.0607L36.9393 19.9393L26.3787 30.5L28.5 32.6213Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.5 32L36.5 22.5L27 22.5L27 19.5L39.5 19.5L39.5 32L36.5 32Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
