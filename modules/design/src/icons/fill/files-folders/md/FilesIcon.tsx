import type { SVGProps } from "react";

export const FilesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4142 12.1716C15.1644 11.4214 16.1818 11 17.2426 11H26C28.2091 11 30 12.7909 30 15V30H7V21.2426C7 20.1818 7.42143 19.1644 8.17157 18.4142L14.4142 12.1716ZM12 26V28H19V26H12ZM25 28H21V26L25 26V28ZM17 21V13L9 21H17Z"
        fill="currentColor"
      />
      <path
        d="M12.2426 2C11.1818 2 10.1644 2.42143 9.41421 3.17157L3.17157 9.41421C2.42143 10.1644 2 11.1818 2 12.2426V24C2 25.8638 3.27477 27.4299 5 27.874V21.2426C5 19.6513 5.63214 18.1252 6.75736 17L13 10.7574C14.1252 9.63214 15.6513 9 17.2426 9H25V6C25 3.79086 23.2091 2 21 2H12.2426Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
