import type { SVGProps } from "react";

export const AddressBookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M47 9V17H44V9H47Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M47 21V29H44V21H47Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2H35C38.3137 2 41 4.68629 41 8V40C41 43.3137 38.3137 46 35 46H6V2ZM23.5 22C26.5376 22 29 19.5376 29 16.5C29 13.4624 26.5376 11 23.5 11C20.4624 11 18 13.4624 18 16.5C18 19.5376 20.4624 22 23.5 22ZM23.5 25C17.7637 25 13 29.3938 13 34.949V35.6819L13.7061 35.848C20.2331 37.384 26.7669 37.384 33.2939 35.848L34 35.6819V34.949C34 29.3938 29.2363 25 23.5 25Z"
        fill="currentColor"
      />
    </svg>
  );
};
