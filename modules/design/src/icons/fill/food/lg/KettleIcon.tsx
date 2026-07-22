import type { SVGProps } from "react";

export const KettleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M41 15V6H33V3H44V15C44 18.3137 41.3137 21 38 21H36.5V18H38C39.6569 18 41 16.6569 41 15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.5947 35H6.30176L9.46875 14.8652L6 6.19238V3H33.752L40.5947 35ZM20 31H27V28H20V31ZM20 25H27V22H20V25ZM20 19H27V16H20V19ZM20 10V13H27V10H20Z"
        fill="currentColor"
      />
      <path
        d="M41 39C41 42.3137 38.3137 45 35 45H12C8.68629 45 6 42.3137 6 39V38H41V39Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
