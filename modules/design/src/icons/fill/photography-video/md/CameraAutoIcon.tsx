import type { SVGProps } from "react";

export const CameraAutoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17.6448 18H14.3552L16 13.5355L17.6448 18Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 10C31 7.79086 29.2091 6 27 6L23.5 6L20.5 2H11.5L8.5 6H5C2.79086 6 1 7.79086 1 10V25C1 27.2091 2.79086 29 5 29L27 29C29.2091 29 31 27.2091 31 25L31 10ZM13.6183 20L13.1044 21.3949V22.5H10.5659L14.8027 11H17.1973L21.4341 22.5H18.8864V21.3699L18.3817 20H13.6183Z"
        fill="currentColor"
      />
    </svg>
  );
};
