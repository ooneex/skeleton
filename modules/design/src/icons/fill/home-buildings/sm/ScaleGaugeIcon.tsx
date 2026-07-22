import type { SVGProps } from "react";

export const ScaleGaugeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6766 9.71554L12.2844 16.6767L10.3232 16.2845L11.7155 9.3233L13.6766 9.71554Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34314 22 5 22H19C20.6569 22 22 20.6569 22 19V5ZM18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12V12.6842C6 13.4109 6.5891 14 7.31579 14L16.6842 14C17.4109 14 18 13.4109 18 12.6842V12Z"
        fill="currentColor"
      />
    </svg>
  );
};
