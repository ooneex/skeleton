import type { SVGProps } from "react";

export const LineHeightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 15H8.5V13H15.5V15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H22V4H2V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 20H22V22H2V20Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.823 6H13.177L17.977 18H15.3823V16.8984L12 8.44258L8.61892 16.8953V18H6.02296L10.823 6Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
