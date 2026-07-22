import type { SVGProps } from "react";

export const CartArrowDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="6" cy="21" r="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="20" cy="21" r="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m16,5h-2v5.086l1.5-1.5,1.414,1.414-3.914,3.914-3.914-3.914,1.414-1.414,1.5,1.5v-5.086h-6.561l-.571-4H0v2h3.133l1.632,11.425c.209,1.468,1.486,2.575,2.969,2.575h10.626c1.425,0,2.663-1.014,2.942-2.411l1.917-9.589h-7.22Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect x="12" y="1" width="2" height="4" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
