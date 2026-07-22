import type { SVGProps } from "react";

export const PopsicleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M28 43C28 45.2091 26.2091 47 24 47C21.7909 47 20 45.2091 20 43V38H28V43Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 2C31.732 2 38 8.26801 38 16V35H10V16C10 8.26801 16.268 2 24 2ZM18.5 13C17.1193 13 16 14.1193 16 15.5V32H21V15.5C21 14.1193 19.8807 13 18.5 13ZM29.5 13C28.1193 13 27 14.1193 27 15.5V32H32V15.5C32 14.1193 30.8807 13 29.5 13Z"
        fill="currentColor"
      />
    </svg>
  );
};
