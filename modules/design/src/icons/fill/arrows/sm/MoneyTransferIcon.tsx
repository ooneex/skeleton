import type { SVGProps } from "react";

export const MoneyTransferIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM13 9H11V15H13V9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.9999 13.5858V21H20.9999V18.4142L15.9999 23.4142L14.5857 22L22.9999 13.5858Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.00009 10.4142L1.00009 2.99997L3.00009 2.99997L3.00009 5.58576L8.00009 0.585757L9.41431 1.99997L1.00009 10.4142Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
