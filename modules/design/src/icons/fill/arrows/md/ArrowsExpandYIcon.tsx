import type { SVGProps } from "react";

export const ArrowsExpandYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 30L17 2H15L15 30H17Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5148 20.1006L16.0001 28.5858L24.4854 20.1006L25.8996 21.5148L16.0001 31.4143L6.10059 21.5148L7.5148 20.1006Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5148 11.8994L16.0001 3.41416L24.4854 11.8994L25.8996 10.4852L16.0001 0.585737L6.10059 10.4852L7.5148 11.8994Z"
        fill="currentColor"
      />
    </svg>
  );
};
