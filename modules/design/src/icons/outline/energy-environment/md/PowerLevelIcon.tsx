import type { SVGProps } from "react";

export const PowerLevelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13.5 11.5L11.5 4.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M16 18C17.4 20.3614 19.5 23.0308 19.5 25.2282C19.5 27.5467 17.9329 29 16 29C14.0671 29 12.5 27.5467 12.5 25.2282C12.5 23.0308 14.6 20.3614 16 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 4C8.97065 4 3.07062 8.8352 1.44442 15.3611L8.23703 17.0593C9.10433 13.5788 12.251 11 16 11C19.749 11 22.8957 13.5788 23.763 17.0593L30.5556 15.3611C28.9294 8.8352 23.0294 4 16 4Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
