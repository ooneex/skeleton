import type { SVGProps } from "react";

export const FlagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 2V30H4V2H6Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0104 3.63987C13.0282 3.19146 15.1389 3.45129 16.9877 4.3757L18.0402 4.90197C19.4067 5.5852 20.9591 5.80263 22.4607 5.52109L29 4.29498V22.3298L22.8293 23.4868C20.8987 23.8488 18.9027 23.5693 17.1458 22.6908L16.0933 22.1646C14.6553 21.4456 13.0137 21.2435 11.4442 21.5922L8 22.3576V4.30884L11.0104 3.63987Z"
        fill="currentColor"
      />
    </svg>
  );
};
