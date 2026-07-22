import type { SVGProps } from "react";

export const ScarecrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 6V9C12 11.209 13.791 13 16 13C18.209 13 20 11.209 20 9V6" fill="currentColor" />
      <path d="M15 27H17V32H15V27Z" fill="currentColor" data-color="color-2" />
      <path d="M32 15V17H26V15H32Z" fill="currentColor" data-color="color-2" />
      <path d="M6 15V17H0V15H6Z" fill="currentColor" data-color="color-2" />
      <path
        d="M11.5176 13L11.8096 13.2852C12.8949 14.3463 14.372 15 16 15C17.628 15 19.1051 14.3463 20.1904 13.2852L20.4824 13H28V19H22.0367L24.2471 29H7.75293L9.96424 19H4V13H11.5176Z"
        fill="currentColor"
      />
      <path d="M20.3828 1L21.1328 7H10.8672L11.6172 1H20.3828Z" fill="currentColor" data-color="color-2" />
      <path d="M24 5V7H8V5H24Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
