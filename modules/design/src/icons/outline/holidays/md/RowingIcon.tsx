import type { SVGProps } from "react";

export const RowingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 16H13.382C13.7607 16 14.107 15.786 14.2764 15.4472L16.3753 11.2494C17.1672 9.66564 19.4749 9.81632 20.0541 11.4897L23 20H23.6667"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M19 26H26C28.2091 26 30 24.2091 30 22V20L14 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8.5 26H6C3.79086 26 2 24.2091 2 22V20H9L17.5 30.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17.5 7C18.8807 7 20 5.88071 20 4.5C20 3.11929 18.8807 2 17.5 2C16.1193 2 15 3.11929 15 4.5C15 5.88071 16.1193 7 17.5 7Z"
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
