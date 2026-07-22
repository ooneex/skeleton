import type { SVGProps } from "react";

export const ArcadeJoystickIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 19C13 20.1046 13.8954 21 15 21H17C18.1046 21 19 20.1046 19 19V13H26.8467L29.9717 23H2.02832L5.15332 13H13V19ZM22 18V20H25V18H22Z"
        fill="currentColor"
      />
      <path d="M30 26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V25H30V26Z" fill="currentColor" />
      <path d="M15 9H17V19H15V9Z" fill="currentColor" data-color="color-2" />
      <path
        d="M16 10.5C18.4853 10.5 20.5 8.48528 20.5 6C20.5 3.51472 18.4853 1.5 16 1.5C13.5147 1.5 11.5 3.51472 11.5 6C11.5 8.48528 13.5147 10.5 16 10.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
