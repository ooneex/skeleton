import type { SVGProps } from "react";

export const MapCompassIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M14.5 4.51367L2 9.29535V42.4191L14.5 37.6344L14.5 4.51367Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.8363 41.8363L45.8242 24.1758L28.1637 28.1636L24.1758 45.8242L41.8363 41.8363ZM35 31.5C33.067 31.5 31.5 33.067 31.5 35C31.5 36.933 33.067 38.5 35 38.5C36.933 38.5 38.5 36.933 38.5 35C38.5 33.067 36.933 31.5 35 31.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M46 21.181V5.58105L33.5 10.3657L33.5 23.8832L45.1634 21.2495C45.4413 21.1868 45.7228 21.1647 46 21.181Z"
        fill="currentColor"
      />
      <path
        d="M22.4317 39.9277L17.5 37.7701L17.5 4.54224L30.5 10.2297L30.5 24.5605L27.5029 25.2373C26.3739 25.4922 25.4923 26.3738 25.2373 27.5028L22.4317 39.9277Z"
        fill="currentColor"
      />
    </svg>
  );
};
