import type { SVGProps } from "react";

export const GymBagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 9C22 5.68629 19.3137 3 16 3C12.6863 3 10 5.68629 10 9V11H8.00003V9C8.00003 4.58172 11.5818 1 16 1C20.4183 1 24 4.58172 24 9V11H22V9Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 29H10V11H22V29ZM13 17V19H19V17H13Z" fill="currentColor" />
      <path
        d="M25.9199 11C27.2572 11 28.4908 11.7212 29.1465 12.8867C31.6308 17.3034 31.6308 22.6966 29.1465 27.1133C28.4908 28.2788 27.2572 29 25.9199 29H24V11H25.9199Z"
        fill="currentColor"
      />
      <path
        d="M8 29H6.08007C4.74277 29 3.50916 28.2788 2.85351 27.1133C0.369141 22.6966 0.369143 17.3034 2.85351 12.8867C3.50916 11.7212 4.74277 11 6.08007 11H8V29Z"
        fill="currentColor"
      />
    </svg>
  );
};
