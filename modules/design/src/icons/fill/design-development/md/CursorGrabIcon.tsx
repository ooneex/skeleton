import type { SVGProps } from "react";

export const CursorGrabIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 16.4278V13.5C4 11.7664 5.1029 10.2903 6.64532 9.73525L7 17.0001H8V7.07063C8 5.20697 9.68137 3.79429 11.5171 4.11554L24.4478 6.20336C27.0178 6.6531 28.81 9.00332 28.5636 11.6007L26.913 29H10V25.75L5.0789 19.5303C4.38016 18.6471 4 17.554 4 16.4278ZM17 15V20H15V15H17ZM22 15H20V20H22V15Z"
        fill="currentColor"
      />
    </svg>
  );
};
