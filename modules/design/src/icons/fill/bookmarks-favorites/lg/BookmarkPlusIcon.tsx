import type { SVGProps } from "react";

export const BookmarkPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C8.68629 2 6 4.68629 6 8V45.7484L24 35.1602L42 45.7484V8C42 4.68629 39.3137 2 36 2H12ZM25.5 17V11H22.5V17H16.5V20H22.5V26H25.5V20H31.5V17H25.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
