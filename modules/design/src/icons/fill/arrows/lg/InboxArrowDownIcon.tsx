import type { SVGProps } from "react";

export const InboxArrowDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M42.8107 26L40.4423 11.9194C40.1588 10.2342 38.6997 9 36.9908 9H34.5V6H36.9908C40.1646 6 42.8743 8.292 43.4007 11.4218L46 26.8747V36C46 39.3137 43.3137 42 40 42H8C4.68629 42 2 39.3137 2 36V26.8747L4.59926 11.4218C5.12571 8.292 7.83544 6 11.0092 6H13.5V9L11.0092 9C9.30026 9 7.84117 10.2342 7.5577 11.9194L5.18928 26H17V33H31V26H42.8107Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5 4V22H22.5V4H25.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8787 13L24 24.1213L35.1213 13L33 10.8787L24 19.8787L15 10.8787L12.8787 13Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
