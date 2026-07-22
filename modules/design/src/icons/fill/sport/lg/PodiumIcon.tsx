import type { SVGProps } from "react";

export const PodiumIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M30 21H18V44H30V21Z" fill="currentColor" />
      <path
        d="M26.6641 7.53223L32.6953 8.38379L28.3281 12.5146L29.3516 18.3037L24 15.5723L18.6484 18.3037L19.6709 12.5146L15.3047 8.38379L21.335 7.53223L24 2.29395L26.6641 7.53223Z"
        fill="currentColor"
      />
      <path d="M44 32H33V44H44V32Z" fill="currentColor" data-color="color-2" />
      <path d="M15 29H4V44H15V29Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
