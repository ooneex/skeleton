import type { SVGProps } from "react";

export const FamilyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M1.5 15.5C1.5 11.9101 4.41015 9 8 9C11.5899 9 14.5 11.9101 14.5 15.5V17.4013C13.6033 17.92 13 18.8896 13 20C13 21.6569 14.3431 23 16 23C17.6568 23 19 21.6569 19 20C19 18.8896 18.3967 17.9201 17.5 17.4014V15.5C17.5 11.9101 20.4101 9 24 9C27.5899 9 30.5 11.9101 30.5 15.5V21L29 22.5V31H21V25.3333L24.4 20.8L22.8 19.6L19.5 24H12.5L9.19998 19.6L7.59998 20.8L11 25.3333V31H3V22.5L1.5 21V15.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 4.5C11.5 2.56644 9.93356 1 8 1C6.06644 1 4.5 2.56644 4.5 4.5C4.5 6.43356 6.06644 8 8 8C9.93356 8 11.5 6.43356 11.5 4.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.5 4.5C27.5 2.56644 25.9336 1 24 1C22.0664 1 20.5 2.56644 20.5 4.5C20.5 6.43356 22.0664 8 24 8C25.9336 8 27.5 6.43356 27.5 4.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
