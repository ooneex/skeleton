import type { SVGProps } from "react";

export const WatchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 13H26.5C27.6046 13 28.5 13.8954 28.5 15V17C28.5 18.1046 27.6046 19 26.5 19H25V17H26.5V15H25V13Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M23.054 2H8.9458L9.61247 0H22.3873L23.054 2Z" fill="currentColor" data-color="color-2" />
      <path d="M23.054 30H8.9458L9.61247 32H22.3873L23.054 30Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 8C5 5.79086 6.79086 4 9 4H23C25.2091 4 27 5.79086 27 8V24C27 26.2091 25.2091 28 23 28H9C6.79086 28 5 26.2091 5 24V8ZM17 10H15V17H23V15H17V10Z"
        fill="currentColor"
      />
    </svg>
  );
};
