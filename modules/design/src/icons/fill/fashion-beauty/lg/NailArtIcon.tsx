import type { SVGProps } from "react";

export const NailArtIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 4.31903C20.8869 1.23636 27.1131 1.23634 32 4.31903V20C32 23.2089 29.4809 25.8286 26.3125 25.9912C24.8782 26.0463 23.4353 26 22 26C18.6863 26 16 23.3137 16 20V4.31903Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 9.68555C37.5127 11.5699 38.9999 14.5321 39 17.6855V46H9V17.6855C9.00011 14.5321 10.4873 11.5699 13 9.68555V20C13.0001 24.9705 17.0295 29 22 29C23.4869 29.0109 24.9799 29.0633 26.4658 28.9873C31.2204 28.7433 34.9999 24.8147 35 20V9.68555ZM18 43H30V40H18V43ZM18 34V37H30V34H18Z"
        fill="currentColor"
      />
    </svg>
  );
};
