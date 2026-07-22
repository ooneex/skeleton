import type { SVGProps } from "react";

export const WineGlassIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19 7L19.0039 8.98637C19.0114 12.8577 15.8752 16 12.0039 16C8.14324 16 5.01145 12.8743 5.00392 9.01366L5 7H19Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M11 15H13V23H11V15Z" fill="currentColor" />
      <path
        d="M18 4H6V9C6 12.3137 8.68629 15 12 15C15.3137 15 18 12.3137 18 9V4ZM20 9C20 13.4183 16.4183 17 12 17C7.58172 17 4 13.4183 4 9V2H20V9Z"
        fill="currentColor"
      />
      <path d="M17 21V23H7V21H17Z" fill="currentColor" />
    </svg>
  );
};
