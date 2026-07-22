import type { SVGProps } from "react";

export const MaskRectIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 23L25 23L25 9H12V23Z" fill="currentColor" data-color="color-2" />
      <path d="M1 23H10V9H1V23Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2H30V30H12V2ZM14 4V28H28V4H14Z" fill="currentColor" />
    </svg>
  );
};
