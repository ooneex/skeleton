import type { SVGProps } from "react";

export const FileGalleryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 19H22V24H17V19Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4142 2.17157C11.1644 1.42143 12.1818 1 13.2426 1H25C27.2091 1 29 2.79086 29 5V17H17C15.8954 17 15 17.8954 15 19V31H7C4.79086 31 3 29.2091 3 27V11.2426C3 10.1818 3.42143 9.16436 4.17157 8.41421L10.4142 2.17157ZM13 3V11H5L13 3Z"
        fill="currentColor"
      />
      <path d="M17 26H22V31H17V26Z" fill="currentColor" data-color="color-2" />
      <path d="M24 19H29V24H24V19Z" fill="currentColor" data-color="color-2" />
      <path d="M24 26H29V31H24V26Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
