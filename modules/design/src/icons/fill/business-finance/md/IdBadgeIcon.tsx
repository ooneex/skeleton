import type { SVGProps } from "react";

export const IdBadgeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18 6V3C18 1.89543 17.1046 1 16 1C14.8954 1 14 1.89543 14 3V6H18Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 8C19.5523 8 20 7.55228 20 7V4L27 4C29.2091 4 31 5.79086 31 8L31 24C31 26.2091 29.2091 28 27 28H5C2.79086 28 1 26.2091 1 24L1 8C1 5.79086 2.79087 4 5.00001 4L12 4V7C12 7.55228 12.4477 8 13 8H19ZM17 11H5V23H17V11ZM20 11V13H27V11H20ZM20 23V21H27V23H20ZM20 16H27V18H20V16Z"
        fill="currentColor"
      />
    </svg>
  );
};
