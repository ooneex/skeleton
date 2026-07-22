import type { SVGProps } from "react";

export const DrinkMenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M22 4H24V20H22V4Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1543 1.00391C18.7394 1.08421 20 2.3949 20 4V20C20 21.6569 18.6569 23 17 23H6C4.34315 23 3 21.6569 3 20V4C3 2.34315 4.34315 1 6 1H17L17.1543 1.00391ZM7 9.5C7 11.6415 8.4962 13.4318 10.5 13.8867V16H8V18H15V16H12.5V13.8867C14.5038 13.4318 16 11.6415 16 9.5V6H7V9.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
