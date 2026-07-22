import type { SVGProps } from "react";

export const TextItalicIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2355 30L16.7355 11L13 11L13 9L19.2645 9L14.7645 28L15.1667 28L15.1667 30L12.2355 30Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 30L9 30L9 28L18 28L18 30Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 4.5C17 3.11929 18.1193 2 19.5 2C20.8807 2 22 3.11929 22 4.5C22 5.88071 20.8807 7 19.5 7C18.1193 7 17 5.88071 17 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
