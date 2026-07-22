import type { SVGProps } from "react";

export const FahrenheitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.3333 7H26.3333V9H14.3333V29H12.3333V7Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3333 16.3333H22.3333V18.3333H12.3333V16.3333Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3C4.89543 3 4 3.89543 4 5C4 6.10457 4.89543 7 6 7C7.10457 7 8 6.10457 8 5C8 3.89543 7.10457 3 6 3ZM2 5C2 2.79086 3.79086 1 6 1C8.20914 1 10 2.79086 10 5C10 7.20914 8.20914 9 6 9C3.79086 9 2 7.20914 2 5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
