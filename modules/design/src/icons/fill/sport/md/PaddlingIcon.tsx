import type { SVGProps } from "react";

export const PaddlingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 29V17.5H8V29H10Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M24 3V14.5H22V3H24Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2L4 11.5104C4 14.0445 5.20056 16.4287 7.23637 17.9376L9 19.2447L10.7636 17.9376C12.7994 16.4287 14 14.0445 14 11.5104L14 2L4 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 30L18 20.4896C18 17.9555 19.2006 15.5713 21.2364 14.0624L23 12.7553L24.7636 14.0624C26.7994 15.5713 28 17.9555 28 20.4896L28 30L18 30Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 30H12V28H6V30Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20 2H26V4H20V2Z" fill="currentColor" />
    </svg>
  );
};
