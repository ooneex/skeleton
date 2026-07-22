import type { SVGProps } from "react";

export const CarHomeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M25 26V19.4356C25 18.6271 24.5132 17.8981 23.7663 17.5882L22.75 17.1667L21.8178 13.9442C21.5703 13.0888 20.7871 12.5 19.8966 12.5H12.1034C11.2129 12.5 10.4297 13.0888 10.1822 13.9442L9.25 17.1667L8.23369 17.5882C7.48684 17.8981 7 18.6271 7 19.4356V26C7 26.5523 7.44772 27 8 27H10C10.5523 27 11 26.5523 11 26V25H21V26C21 26.5523 21.4477 27 22 27H24C24.5523 27 25 26.5523 25 26Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 19.5H13.01C13.01 20.6046 12.1146 21.5 11.01 21.5H9V19.5Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.01 19.5H19C19 20.6046 19.8954 21.5 21 21.5H23.01V19.5Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M3 29V11.1125L16 2L29 11.1125V29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
