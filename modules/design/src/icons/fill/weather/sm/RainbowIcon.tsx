import type { SVGProps } from "react";

export const RainbowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7C6.47715 7 2 11.4772 2 17V18H0V17C0 10.3726 5.37258 5 12 5C18.6274 5 24 10.3726 24 17V18H22V17C22 11.4772 17.5228 7 12 7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 11C8.68629 11 6 13.6863 6 17V18H4V17C4 12.5817 7.58172 9 12 9C16.4183 9 20 12.5817 20 17V18H18V17C18 13.6863 15.3137 11 12 11Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15C10.8954 15 10 15.8954 10 17V18H8V17C8 14.7909 9.79086 13 12 13C14.2091 13 16 14.7909 16 17V18H14V17C14 15.8954 13.1046 15 12 15Z"
        fill="currentColor"
      />
    </svg>
  );
};
