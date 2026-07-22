import type { SVGProps } from "react";

export const CurrencyDollarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 16.75C10.5 11.9175 14.4175 8 19.25 8H35V11H19.25C16.0744 11 13.5 13.5744 13.5 16.75C13.5 19.9256 16.0744 22.5 19.25 22.5H29.75C34.5825 22.5 38.5 26.4175 38.5 31.25C38.5 36.0825 34.5825 40 29.75 40H14V37H29.75C32.9256 37 35.5 34.4256 35.5 31.25C35.5 28.0744 32.9256 25.5 29.75 25.5H19.25C14.4175 25.5 10.5 21.5825 10.5 16.75Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5 4V44H22.5V4H25.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
