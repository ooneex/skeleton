import type { SVGProps } from "react";

export const PurseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11 12H1.30931L0.850339 15.1293C0.319165 18.7509 3.1265 22 6.78682 22H17.2132C20.8735 22 23.6808 18.7509 23.1497 15.1293L22.6907 12H13V15H11V12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C10.8954 2 10 2.89543 10 4V7H8V4C8 1.79086 9.79086 0 12 0C14.2091 0 16 1.79086 16 4V7H14V4C14 2.89543 13.1046 2 12 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M21.664 5H2.33601L1.60266 10H22.3974L21.664 5Z" fill="currentColor" />
    </svg>
  );
};
