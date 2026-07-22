import type { SVGProps } from "react";

export const SocketIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 4C41.3137 4 44 6.68629 44 10V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V10C4 6.68629 6.68629 4 10 4H38ZM32 36V37H16V36C16 31.5817 19.5817 28 24 28C28.4183 28 32 31.5817 32 36ZM33 23V13H28V23H33ZM20 13V23H15V13H20Z"
        fill="currentColor"
      />
    </svg>
  );
};
