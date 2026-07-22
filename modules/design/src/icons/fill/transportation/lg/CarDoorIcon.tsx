import type { SVGProps } from "react";

export const CarDoorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 4C14.2975 4 4 14.2975 4 27V38C4 41.3137 6.68629 44 10 44H38C41.3137 44 44 41.3137 44 38V10C44 6.68629 41.3137 4 38 4H27ZM27.0607 9C18.9058 9 11.7697 14.4825 9.66851 22.3621L8.69839 26H39V9H27.0607ZM33 29V32H39V29H33Z"
        fill="currentColor"
      />
    </svg>
  );
};
