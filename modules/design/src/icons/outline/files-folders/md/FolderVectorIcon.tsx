import type { SVGProps } from "react";

export const FolderVectorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15 27H5C3.34315 27 2 25.6569 2 24V7C2 5.34315 3.34315 4 5 4H13.2L17.4 8H27C28.6569 8 30 9.34315 30 11V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M22 29L19.8943 25.3902C19.0554 23.952 19.195 22.1446 20.245 20.8524L25 15L29.755 20.8524C30.805 22.1446 30.9446 23.952 30.1057 25.3902L28 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M19 29L25 29L31 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M25 23.5C25.2761 23.5 25.5 23.2761 25.5 23C25.5 22.7239 25.2761 22.5 25 22.5C24.7239 22.5 24.5 22.7239 24.5 23C24.5 23.2761 24.7239 23.5 25 23.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
      />
    </svg>
  );
};
