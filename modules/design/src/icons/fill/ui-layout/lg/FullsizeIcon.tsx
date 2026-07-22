import type { SVGProps } from "react";

export const FullsizeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 15H36V33H12V15Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 37V11H9V37H6Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M39 37V11H42V37H39Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 43V5H4V43H1Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 43V5H47V43H44Z" fill="currentColor" />
    </svg>
  );
};
