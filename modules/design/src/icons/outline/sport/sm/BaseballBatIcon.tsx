import type { SVGProps } from "react";

export const BaseballBatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M6.5 14.5L9.5 17.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M20.9498 7.26477C21.8593 6.08815 21.7743 4.39095 20.695 3.31159C19.5234 2.14002 17.6239 2.14002 16.4523 3.3116L11.3557 8.40825C10.2961 9.46782 9.4013 10.6802 8.70103 12.0049L8.31241 12.7401C8.21904 12.9167 8.09973 13.0784 7.95845 13.2197L2.5914 18.5867C1.81035 19.3678 1.81035 20.6341 2.5914 21.4151C3.37245 22.1962 4.63878 22.1962 5.41983 21.4151L10.7869 16.0481C10.9282 15.9068 11.0898 15.7875 11.2664 15.6941L12.0016 15.3056C12.0391 15.2857 12.0765 15.2658 12.1138 15.2456"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M19 17C20.6569 17 22 15.6569 22 14C22 12.3431 20.6569 11 19 11C17.3431 11 16 12.3431 16 14C16 15.6569 17.3431 17 19 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
