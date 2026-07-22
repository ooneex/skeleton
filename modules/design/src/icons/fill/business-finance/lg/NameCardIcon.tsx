import type { SVGProps } from "react";

export const NameCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5 35V46H22.5V35H25.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 43H34V46H14V43Z" fill="currentColor" data-color="color-2" />
      <path d="M32 31H16V37L32 37V31Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 4C4.23858 4 2 6.23858 2 9V30C2 32.7614 4.23858 35 7 35H13V31C13 29.3431 14.3431 28 16 28H32C33.6569 28 35 29.3431 35 31V35H41C43.7614 35 46 32.7614 46 30V9C46 6.23858 43.7614 4 41 4H7ZM12 12V15H28V12H12ZM31 15H36V12H31V15ZM21 19V22H12V19H21Z"
        fill="currentColor"
      />
    </svg>
  );
};
