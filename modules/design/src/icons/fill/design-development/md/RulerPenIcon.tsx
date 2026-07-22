import type { SVGProps } from "react";

export const RulerPenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M27 9H19V27.2879L23 31.4417L27 27.2879L27 9Z" fill="currentColor" />
      <path d="M27 7L27 2L19 2.0001V7H27Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 30V2H5V30H15ZM7 26H11V24H7V26ZM7 21.5H9V19.5H7V21.5ZM7 17H11V15H7V17ZM7 12.5H9V10.5H7V12.5ZM7 8H11V6H7V8Z"
        fill="currentColor"
      />
    </svg>
  );
};
