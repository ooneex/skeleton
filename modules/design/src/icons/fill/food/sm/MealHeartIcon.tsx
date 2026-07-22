import type { SVGProps } from "react";

export const MealHeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 2V6H11V2H13Z" fill="currentColor" />
      <path d="M22 20V22L2 22L2 20L22 20Z" fill="currentColor" data-color="color-2" />
      <path d="M16 1V3H8V1H16Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5C17.5228 5 22 9.47715 22 15V18H2V15C2 9.47715 6.47715 5 12 5ZM13.8467 8.5C13.0634 8.5 12.476 9.01965 12 9.60352C11.524 9.01965 10.9366 8.5 10.1533 8.5C8.9643 8.50039 8 9.51995 8 10.7773C8.00056 12.9271 11.1126 15.0764 12 15.5C12.8874 15.0764 15.9994 12.9271 16 10.7773C16 9.51995 15.0357 8.50039 13.8467 8.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
