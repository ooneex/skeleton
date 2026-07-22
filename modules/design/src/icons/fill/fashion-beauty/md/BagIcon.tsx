import type { SVGProps } from "react";

export const BagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 -3.0598e-07C19.866 -3.97054e-07 23 3.13401 23 7L23 9L21 9L21 7C21 4.23858 18.7615 2 16 2C13.2386 2 11 4.23858 11 7L11 9L9.00003 9L9.00003 7C9.00003 3.13401 12.134 9.55412e-07 16 -3.0598e-07Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 15H11V9H21V15H23V9H30V23C30 26.866 26.866 30 23 30H9C5.13401 30 2 26.866 2 23V9H9V15ZM10 19V25H22V19H10Z"
        fill="currentColor"
      />
    </svg>
  );
};
