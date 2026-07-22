import type { SVGProps } from "react";

export const NameCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 16.4933V23.4933H11V16.4933H13Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 22.4933H17V24.4933H7V22.4933Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 6.49329C1 4.83643 2.34315 3.49329 4 3.49329H20C21.6569 3.49329 23 4.83643 23 6.49329V15.4933C23 17.1501 21.6569 18.4933 20 18.4933H15V16.4933C15 15.3887 14.1046 14.4933 13 14.4933H11C9.89543 14.4933 9 15.3887 9 16.4933V18.4933H4C2.34315 18.4933 1 17.1501 1 15.4933V6.49329ZM7 9.49329H12V11.4933H7V9.49329ZM14 11.4933V9.49329H17V11.4933H14Z"
        fill="currentColor"
      />
    </svg>
  );
};
