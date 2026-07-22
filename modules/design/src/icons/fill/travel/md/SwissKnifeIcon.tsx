import type { SVGProps } from "react";

export const SwissKnifeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M27 2C23.6863 2 21 4.68629 21 8V19H24.5C26.2465 19 27.8321 19.6888 29 20.8096V2H27Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M6 5C8.20914 5 10 6.79086 10 9V11H9C7.89543 11 7 11.8954 7 13C7 14.1046 7.89543 15 9 15H10V19H7.5C5.75351 19 4.16789 19.6888 3 20.8096V5H6Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 25.5C3 23.0147 5.01472 21 7.5 21H24.5C26.9853 21 29 23.0147 29 25.5C29 27.9853 26.9853 30 24.5 30H7.5C5.01472 30 3 27.9853 3 25.5ZM11 26V28H17V26H11Z"
        fill="currentColor"
      />
    </svg>
  );
};
