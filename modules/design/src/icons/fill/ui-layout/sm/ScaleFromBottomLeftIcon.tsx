import type { SVGProps } from "react";

export const ScaleFromBottomLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 13H2V22H11L11 13Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 2L22 22L2 22L2 2L22 2ZM20 4L4 4L4 20L20 20L20 4Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 12.4143L17.7071 7.70718L16.2929 6.29297L11.5858 11.0001L13 12.4143Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8L16 8L16 12L18 12L18 6L12 6L12 8Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
