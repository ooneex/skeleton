import type { SVGProps } from "react";

export const WardrobeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 46L20.5 46V29.5H4L4 40C4 43.3137 6.6863 46 10 46ZM15 39V36H10V39H15Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.5395 46H23.5V2L36.5396 2.00001C40.6599 2.00001 44 4.6863 44 8.00001L44 40C44 43.3137 40.6598 46 36.5395 46ZM27 28H30V20H27V28Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2L20.5 2V26.526H4V8C4 4.6863 6.6863 2 10 2Z"
        fill="currentColor"
      />
    </svg>
  );
};
