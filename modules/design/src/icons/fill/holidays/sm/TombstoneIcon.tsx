import type { SVGProps } from "react";

export const TombstoneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C16.4183 1 20 4.58172 20 9V18H16.166C15.0844 16.2052 13.0937 15.0888 10.9834 15.0049C9.38165 14.9743 7.81724 15.4593 6.58301 16.502C5.66529 16.5125 4.76132 16.7944 4 17.3027V9C4 4.58172 7.58172 1 12 1ZM11 7H9V9H11V13H13V9H15V7H13V5H11V7Z"
        fill="currentColor"
      />
      <path
        d="M14.8672 20C14.386 18.2302 12.6575 17.0001 10.7275 17C9.358 17 8.11381 17.6102 7.32422 18.5879C7.1056 18.5308 6.87522 18.5 6.63672 18.5C5.60488 18.5 4.63394 19.0875 4.21582 20H1V22H13H23V20H14.8672Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
