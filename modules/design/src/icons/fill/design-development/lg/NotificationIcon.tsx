import type { SVGProps } from "react";

export const NotificationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 9C32 5.13401 35.134 2 39 2C42.866 2 46 5.13401 46 9C46 12.866 42.866 16 39 16C35.134 16 32 12.866 32 9Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M30.3378 4C29.487 5.47087 29 7.17856 29 9C29 14.5228 33.4772 19 39 19C40.8214 19 42.5291 18.513 44 17.6622V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V10C4 6.68629 6.68629 4 10 4H30.3378Z"
        fill="currentColor"
      />
    </svg>
  );
};
