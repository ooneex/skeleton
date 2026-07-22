import type { SVGProps } from "react";

export const FileBookmarkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 19.5C16.5 17.8431 17.8431 16.5 19.5 16.5H26.5C28.1569 16.5 29.5 17.8431 29.5 19.5V31.4638L23 26.7365L16.5 31.4638V19.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4142 2.17157C11.1644 1.42143 12.1818 1 13.2426 1H25C27.2091 1 29 2.79086 29 5V15.1689C28.2646 14.7435 27.4107 14.5 26.5 14.5H19.5C16.7386 14.5 14.5 16.7386 14.5 19.5V31H7C4.79086 31 3 29.2091 3 27V11.2426C3 10.1818 3.42143 9.16436 4.17157 8.41421L10.4142 2.17157ZM13 3V11H5L13 3Z"
        fill="currentColor"
      />
    </svg>
  );
};
