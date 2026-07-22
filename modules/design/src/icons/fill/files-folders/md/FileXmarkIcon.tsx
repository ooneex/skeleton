import type { SVGProps } from "react";

export const FileXmarkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4142 2.17157C11.1644 1.42143 12.1818 1 13.2426 1H25C27.2091 1 29 2.79086 29 5V17.5773C27.2635 15.6857 24.7702 14.5 22 14.5C16.7533 14.5 12.5 18.7533 12.5 24C12.5 26.7702 13.6857 29.2635 15.5773 31H7C4.79086 31 3 29.2091 3 27V11.2426C3 10.1818 3.42143 9.16436 4.17157 8.41421L10.4142 2.17157ZM13 3V11H5L13 3Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.5 24C29.5 28.1421 26.1421 31.5 22 31.5C17.8579 31.5 14.5 28.1421 14.5 24C14.5 19.8579 17.8579 16.5 22 16.5C26.1421 16.5 29.5 19.8579 29.5 24ZM24.1213 20.4645L25.5355 21.8787L23.4142 24L25.5355 26.1213L24.1213 27.5355L22 25.4142L19.8787 27.5355L18.4645 26.1213L20.5858 24L18.4645 21.8787L19.8787 20.4645L22 22.5858L24.1213 20.4645Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
