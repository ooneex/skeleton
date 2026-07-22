import type { SVGProps } from "react";

export const NoteCodeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11 5V2C11 1.44772 11.4477 1 12 1H20C20.5523 1 21 1.44772 21 2V5H11Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2V5C9 6.10457 9.89543 7 11 7H21C22.1046 7 23 6.10457 23 5V2H24C26.2091 2 28 3.79086 28 6L28 27C28 29.2091 26.2091 31 24 31H8C5.79086 31 4 29.2091 4 27V6C4 3.79086 5.79086 2 8 2H9ZM19 22.4142L24.4142 17L19 11.5858L17.5858 13L21.5858 17L17.5858 21L19 22.4142ZM13 22.4142L14.4142 21L10.4142 17L14.4142 13L13 11.5858L7.58579 17L13 22.4142Z"
        fill="currentColor"
      />
    </svg>
  );
};
