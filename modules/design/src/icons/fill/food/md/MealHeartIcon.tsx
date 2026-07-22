import type { SVGProps } from "react";

export const MealHeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 3V8H15V3H17Z" fill="currentColor" data-color="color-2" />
      <path d="M21 2V4H11V2H21Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6C23.1557 6 29 11.6625 29 18.7002V24H3V18.7002C3 11.6625 8.84432 6 16 6ZM18.7686 11.0928C17.6441 11.093 16.7899 11.7873 16.0928 12.5938H15.9072C15.2101 11.7873 14.3559 11.093 13.2314 11.0928C11.4474 11.0928 10 12.58 10 14.415C10.0003 17.552 14.669 20.9748 16 21.5928C17.331 20.9748 21.9997 17.552 22 14.415C22 12.58 20.5526 11.0928 18.7686 11.0928Z"
        fill="currentColor"
      />
      <path d="M31 26V29H1V26H31Z" fill="currentColor" />
    </svg>
  );
};
