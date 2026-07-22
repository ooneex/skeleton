import type { SVGProps } from "react";

export const Globe2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 17V23H11V17H13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8 21H16V23H8V21Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 9C5 5.68629 7.68629 3 11 3C14.3137 3 17 5.68629 17 9C17 12.3137 14.3137 15 11 15C7.68629 15 5 12.3137 5 9Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7433 2.67096L19.4142 2L18 0.585785L15.9497 2.63605L16.6568 3.34315C19.781 6.46735 19.781 11.5327 16.6568 14.6569C13.5327 17.7811 8.46733 17.7811 5.34314 14.6569L4.63603 13.9498L2.58579 16L4 17.4142L4.67094 16.7433C8.59896 19.9617 14.4045 19.7377 18.0711 16.0711C21.7377 12.4045 21.9617 6.59897 18.7433 2.67096Z"
        fill="currentColor"
      />
    </svg>
  );
};
