import type { SVGProps } from "react";

export const RestaurantMenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M22 4H24V20H22V4Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 1C18.6569 1 20 2.34315 20 4V20C20 21.6569 18.6569 23 17 23H6C4.34315 23 3 21.6569 3 20V4C3 2.34315 4.34315 1 6 1H17ZM8 18H15V16H8V18ZM11.5 6C9.567 6 8 7.567 8 9.5C8 11.433 9.567 13 11.5 13C13.433 13 15 11.433 15 9.5C15 7.567 13.433 6 11.5 6Z"
        fill="currentColor"
      />
    </svg>
  );
};
