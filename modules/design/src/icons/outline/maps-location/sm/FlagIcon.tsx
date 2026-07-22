import type { SVGProps } from "react";

export const FlagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M4 22V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M21 16.5V4.5L18.9348 5.11956C17.0654 5.68038 15.0462 5.42773 13.3726 4.42358C11.8492 3.50954 10.0332 3.21484 8.29895 3.60023L8 3.66667V15.6667L8.29895 15.6002C10.0332 15.2148 11.8492 15.5095 13.3726 16.4236C15.0462 17.4277 17.0654 17.6804 18.9348 17.1196L21 16.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
