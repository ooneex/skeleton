import type { SVGProps } from "react";

export const LetterRIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18 8.5C18 6.01472 15.9853 4 13.5 4H8V13H13.5C15.9853 13 18 10.9853 18 8.5ZM20 8.5C20 12.0899 17.0899 15 13.5 15H8V22H6V2H13.5C17.0899 2 20 4.91015 20 8.5Z"
        fill="currentColor"
      />
      <path d="M11.9141 13L20.9141 22H17.4209V21.335L11.0859 15H10V13H11.9141Z" fill="currentColor" />
    </svg>
  );
};
