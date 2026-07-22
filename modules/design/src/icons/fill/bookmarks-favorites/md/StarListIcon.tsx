import type { SVGProps } from "react";

export const StarListIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="18" y="27" width="13" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="18" y="21" width="13" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m16,25.19v-4.19c0-1.104.896-2,2-2h6.362l7.457-7.268-10.931-1.589L16,.241l-4.888,9.902L.181,11.732l7.91,7.709-1.867,10.886,9.776-5.138Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
