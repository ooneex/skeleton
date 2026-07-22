import type { SVGProps } from "react";

export const NecktieIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 0H9L10 4H14L15 0Z" fill="currentColor" />
      <path d="M12 24L7 18.8182L10 6H14L17 18.8182L12 24Z" fill="currentColor" />
    </svg>
  );
};
