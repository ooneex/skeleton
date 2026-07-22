import type { SVGProps } from "react";

export const CodeEditorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34314 22 5 22H19C20.6569 22 22 20.6569 22 19V5ZM19 4C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H8V4L19 4Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M10 7H14V9H10V7Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 11H18V13H14V11Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 15H18V17H12V15Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
