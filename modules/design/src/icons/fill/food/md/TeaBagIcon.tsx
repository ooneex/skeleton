import type { SVGProps } from "react";

export const TeaBagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M25 7.5C25 4.46243 22.5375 2 19.5 2C16.4624 2 14 4.46243 14 7.5V9H12V7.5C12 3.35786 15.3578 0 19.5 0C23.6421 0 27 3.35786 27 7.5V22H25V7.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M31 20V30H21V20H31Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 13.6973V18H21C19.8954 18 19 18.8954 19 20V30H3V13.6973L7.46484 7H18.5352L23 13.6973ZM10 12V14H16V12H10Z"
        fill="currentColor"
      />
    </svg>
  );
};
