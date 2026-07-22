import type { SVGProps } from "react";

export const CarCircleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M25 21.5V15.4356C25 14.6271 24.5132 13.8981 23.7663 13.5882L22.75 13.1667L21.8178 9.94422C21.5703 9.08878 20.7871 8.5 19.8966 8.5H12.1034C11.2129 8.5 10.4297 9.08878 10.1822 9.94422L9.25 13.1667L8.23369 13.5882C7.48684 13.8981 7 14.6271 7 15.4356V21.5C7 22.0523 7.44772 22.5 8 22.5H10C10.5523 22.5 11 22.0523 11 21.5V20.5H21V21.5C21 22.0523 21.4477 22.5 22 22.5H24C24.5523 22.5 25 22.0523 25 21.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 15.5H13.01C13.01 16.6046 12.1146 17.5 11.01 17.5H9V15.5Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.01 15.5H19C19 16.6046 19.8954 17.5 21 17.5H23.01V15.5Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
