import type { SVGProps } from "react";

export const CameraRollIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M11 4L6 4L6 2L11 2L11 4Z" fill="currentColor" />
      <path d="M22 11C20.8954 11 20 11.8954 20 13V19L17 19V5H24V11H22Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 21C13.8807 21 15 19.8807 15 18.5L15 5.5C15 4.11929 13.8807 3 12.5 3H4.5C3.11929 3 2 4.11929 2 5.5V18.5C2 19.8807 3.11929 21 4.5 21H12.5ZM8 7H6V17H8V7Z"
        fill="currentColor"
      />
    </svg>
  );
};
