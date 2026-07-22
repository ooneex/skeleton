import type { SVGProps } from "react";

export const BagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 1C29.5228 1 34 5.47715 34 11L34 14L31 14L31 11C31 7.13401 27.866 4 24 4C20.134 4 17 7.13401 17 11L17 14L14 14L14 11C14 5.47715 18.4772 1 24 1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 35C44 39.9706 39.9706 44 35 44H13C8.02944 44 4 39.9706 4 35V14H14V24H17V14H31V24H34V14H44V35ZM33 36V29H15V36H33Z"
        fill="currentColor"
      />
    </svg>
  );
};
