import type { SVGProps } from "react";

export const SpellCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M33 30.5H15V27.5H33V30.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.4558 4L25.5431 4L36.8369 34.4197L34.0245 35.4638L24.0013 8.46653L12 40.8866V43H8.01871L22.4558 4Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.7817 32.3396L33 46.1213L25.223 38.3443L27.3443 36.223L33 41.8787L44.6603 30.2183L46.7817 32.3396Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
