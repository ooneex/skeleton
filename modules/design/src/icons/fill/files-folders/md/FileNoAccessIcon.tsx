import type { SVGProps } from "react";

export const FileNoAccessIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 18C18.6863 18 16 20.6863 16 24C16 27.3137 18.6863 30 22 30C25.3137 30 28 27.3137 28 24C28 20.6863 25.3137 18 22 18ZM14 24C14 19.5817 17.5817 16 22 16C26.4183 16 30 19.5817 30 24C30 28.4183 26.4183 32 22 32C17.5817 32 14 28.4183 14 24Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4142 2.17157C11.1644 1.42143 12.1818 1 13.2426 1H25C27.2091 1 29 2.79086 29 5V16.8586C27.1962 15.0903 24.7255 14 22 14C16.4772 14 12 18.4772 12 24C12 26.7255 13.0903 29.1962 14.8586 31H7C4.79086 31 3 29.2091 3 27V11.2426C3 10.1818 3.42143 9.16436 4.17157 8.41421L10.4142 2.17157ZM13 3V11H5L13 3Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.7072 19.7071L17.7072 29.7071L16.293 28.2928L26.293 18.2928L27.7072 19.7071Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
