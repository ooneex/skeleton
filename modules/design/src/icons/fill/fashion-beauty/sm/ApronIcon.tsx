import type { SVGProps } from "react";

export const ApronIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 7.81445C15.5 9.3431 16.6496 10.6281 18.1689 10.7969L20 11V22H4V11L5.83105 10.7969C7.35035 10.6281 8.5 9.3431 8.5 7.81445H15.5ZM9 14V15C9 16.6569 10.3431 18 12 18C13.6569 18 15 16.6569 15 15V14H9Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M23 13V15H19V13H23Z" fill="currentColor" />
      <path d="M5 13V15H1V13H5Z" fill="currentColor" />
      <path
        d="M14.5557 5.55566C14.5557 4.14427 13.4114 3 12 3C10.5886 3 9.44434 4.14427 9.44434 5.55566V7C9.44434 9.57361 7.49993 11.6924 5 11.9688V21H19V11.9688C16.5001 11.6924 14.5557 9.57361 14.5557 7V5.55566ZM16.5557 7C16.5557 8.65685 17.8988 10 19.5557 10H21V23H3V10H4.44434C6.10119 10 7.44434 8.65685 7.44434 7V5.55566C7.44434 3.0397 9.48404 1 12 1C14.516 1 16.5557 3.0397 16.5557 5.55566V7Z"
        fill="currentColor"
      />
    </svg>
  );
};
