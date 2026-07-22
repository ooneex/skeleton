import type { SVGProps } from "react";

export const ChurchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M22.5 1H25.5V12H22.5V1Z" fill="currentColor" />
      <path d="M29 4.5V7.5H19V4.5H29Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 18.7639V44H29V36C29 33.2386 26.7614 31 24 31C21.2386 31 19 33.2386 19 36V44H13V18.7639L24 10.7637L35 18.7639ZM24 19C22.3431 19 21 20.3431 21 22V25H27V22C27 20.3431 25.6569 19 24 19Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 29.2559V44H38L38 26.8622L46 29.2559ZM40 34V39H43V34H40Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 29.2559V44H10V26.8542L2 29.2559ZM8 34V39H5V34H8Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
