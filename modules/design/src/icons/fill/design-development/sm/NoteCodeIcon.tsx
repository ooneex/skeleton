import type { SVGProps } from "react";

export const NoteCodeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8 4V2C8 1.44772 8.44772 1 9 1H15C15.5523 1 16 1.44772 16 2V4H8Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6C6.89543 6 6 5.10457 6 4V2C4.34315 2 3 3.34315 3 5V20C3 21.6569 4.34314 23 6 23H18C19.6569 23 21 21.6569 21 20V5C21 3.34315 19.6569 2 18 2V4C18 5.10457 17.1046 6 16 6H8ZM13.0858 16L15.5858 13.5L13.0858 11L14.5 9.58581L18.4143 13.5L14.5 17.4142L13.0858 16ZM10.9142 16L9.50005 17.4142L5.58574 13.5L9.50002 9.58581L10.9142 11L8.4142 13.5L10.9142 16Z"
        fill="currentColor"
      />
    </svg>
  );
};
