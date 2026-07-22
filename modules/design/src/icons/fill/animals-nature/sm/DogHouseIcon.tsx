import type { SVGProps } from "react";

export const DogHouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.707939L23.6332 10.226L22.3668 11.774L12 3.29206L1.63324 11.774L0.36676 10.226L12 0.707939Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 13.2398V20H1V22H23V20H21V13.2398L12 5.87617L3 13.2398ZM9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V20H9V16Z"
        fill="currentColor"
      />
    </svg>
  );
};
