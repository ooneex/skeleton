import type { SVGProps } from "react";

export const TextBoldIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 13H18C22.4183 13 26 16.5817 26 21C26 25.4183 22.4183 29 18 29H11V27H18C21.3137 27 24 24.3137 24 21C24 17.6863 21.3137 15 18 15H11V13Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 3H17C20.3137 3 23 5.68629 23 9C23 12.3137 20.3137 15 17 15H11V13H17C19.2091 13 21 11.2091 21 9C21 6.79086 19.2091 5 17 5H11V3Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 3H13V5H12V27H13V29H7V3Z" fill="currentColor" />
    </svg>
  );
};
