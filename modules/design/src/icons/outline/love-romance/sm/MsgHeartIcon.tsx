import type { SVGProps } from "react";

export const MsgHeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 3C6.477 3 2 7.029 2 12C2 13.843 2.618 15.556 3.675 16.983L2.451 21.549L7.738 20.132C9.032 20.683 10.473 21 12 21C17.523 21 22 16.971 22 12C22 7.029 17.523 3 12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M12 16.3503C12.9981 15.9091 16.5 13.4641 16.5 11.2229C16.5 9.91264 15.4146 8.85029 14.0772 8.85029C13.1952 8.85029 12.5364 9.39205 12 9.99999C11.4645 9.39117 10.8048 8.85029 9.9228 8.85029C8.5845 8.85029 7.5 9.91264 7.5 11.2229C7.5 13.4641 11.0019 15.9091 12 16.3503Z"
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
