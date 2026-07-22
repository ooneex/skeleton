import type { SVGProps } from "react";

export const PunchingBagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12.4287 1.37109L10.5713 0.628906L8.57129 5.62891L10.4287 6.37109L12.4287 1.37109Z"
        fill="currentColor"
      />
      <path
        d="M15.4287 5.62891L13.4287 0.628906L11.5713 1.37109L13.5713 6.37109L15.4287 5.62891Z"
        fill="currentColor"
      />
      <path d="M18 0V2H6V0H18Z" fill="currentColor" />
      <path d="M18 18H6V11H18V18Z" fill="currentColor" />
      <path
        d="M18 21C18 22.6569 16.6569 24 15 24H9C7.34315 24 6 22.6569 6 21V20H18V21Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M15 5C16.6569 5 18 6.34315 18 8V9H6V8C6 6.34315 7.34315 5 9 5H15Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
