import type { SVGProps } from "react";

export const RotateCubeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M23.7189 10.665L16 7.41492L8.28113 10.665L16 13.915L23.7189 10.665Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7754 3.1896C7.65554 4.24488 3 9.57876 3 16V17H1V16C1 7.71573 7.71573 1 16 1H18.4142L15 4.41421L13.7754 3.1896Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 15V16C31 24.2843 24.2843 31 16 31H13.5858L17 27.5858L18.2246 28.8104C24.3445 27.7551 29 22.4212 29 16V15H31Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M24.5 12.5061L17 15.664V24.1639L24.5 21.006V12.5061Z" fill="currentColor" />
      <path d="M15 24.1639V15.664L7.5 12.5061V21.006L15 24.1639Z" fill="currentColor" />
    </svg>
  );
};
