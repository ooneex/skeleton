import type { SVGProps } from "react";

export const DishwasherIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V8H22V19ZM6.13281 17.6221L8.06543 18.1396L9.87695 11.3779L7.94531 10.8604L6.13281 17.6221ZM10.1328 17.6221L12.0654 18.1396L13.877 11.3779L11.9453 10.8604L10.1328 17.6221ZM14.1328 17.6221L16.0654 18.1396L17.877 11.3779L15.9453 10.8604L14.1328 17.6221Z"
        fill="currentColor"
      />
      <path
        d="M19 2C20.6569 2 22 3.34315 22 5V6H15V5H9V6H2V5C2 3.34315 3.34315 2 5 2H19Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
