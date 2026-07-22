import type { SVGProps } from "react";

export const FolderVolumeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M41 23.7104L33.217 28.5H29C27.3431 28.5 26 29.8432 26 31.5L26 36.5C26 38.1569 27.3431 39.5 29 39.5H33.217L41 44.2896V23.7104Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M47 29V39H44V29H47Z" fill="currentColor" data-color="color-2" />
      <path
        d="M8 4C4.68629 4 2 6.68629 2 10V36C2 39.3137 4.68629 42 8 42H26.5983C24.4801 41.0737 23 38.9597 23 36.5V31.5C23 28.1863 25.6863 25.5 29 25.5H32.3678L39.4277 21.1555C40.3533 20.5859 41.5146 20.5614 42.4634 21.0916C43.4122 21.6217 44 22.6236 44 23.7104V26H46V16C46 12.6863 43.3137 10 40 10H27.3333L19.3333 4H8Z"
        fill="currentColor"
      />
    </svg>
  );
};
