import type { SVGProps } from "react";

export const SinkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M8 23V20H16V23H8Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 4H15V6H12V4Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 4C7 2.34315 8.34315 1 10 1C11.6569 1 13 2.34315 13 4V10H11V4C11 3.44772 10.5523 3 10 3C9.44772 3 9 3.44772 9 4V5H7V4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 8C20.6569 8 22 9.34315 22 11C22 14.866 18.866 18 15 18L9 18C5.13401 18 2 14.866 2 11C2 9.34314 3.34315 8 5 8L19 8Z"
        fill="currentColor"
      />
    </svg>
  );
};
