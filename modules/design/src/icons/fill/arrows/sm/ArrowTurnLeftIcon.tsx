import type { SVGProps } from "react";

export const ArrowTurnLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2H19C20.6569 2 22 3.34315 22 5V15C22 16.6569 20.6569 18 19 18H3V16H19C19.5523 16 20 15.5523 20 15V5C20 4.44772 19.5523 4 19 4H12V2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.41412 12L4.41412 17L9.41412 22L7.99991 23.4142L1.58569 17L7.99991 10.5858L9.41412 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
