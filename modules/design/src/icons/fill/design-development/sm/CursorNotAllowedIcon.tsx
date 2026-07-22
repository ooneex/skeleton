import type { SVGProps } from "react";

export const CursorNotAllowedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10.5859L22.4142 21.0002L21 22.4144L10.5858 12.0002L12 10.5859Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 11C13.4624 11 11 13.4624 11 16.5C11 19.5376 13.4624 22 16.5 22C19.5376 22 22 19.5376 22 16.5C22 13.4624 19.5376 11 16.5 11ZM9 16.5C9 12.3579 12.3579 9 16.5 9C20.6421 9 24 12.3579 24 16.5C24 20.6421 20.6421 24 16.5 24C12.3579 24 9 20.6421 9 16.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M15.0573 5.2232L8.73545 8.73542L5.22309 15.0574L1.00854 1.00854L15.0573 5.2232Z" fill="currentColor" />
    </svg>
  );
};
