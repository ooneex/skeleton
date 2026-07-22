import type { SVGProps } from "react";

export const HeartsSuitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 44C28.8796 41.7647 46 29.3767 46 18.0214C46 11.3826 40.6936 6 34.1552 6C29.8432 6 26.6224 8.74494 24 11.8252C21.382 8.74047 18.1568 6 13.8448 6C7.302 6 2 11.3826 2 18.0214C2 29.3767 19.1204 41.7647 24 44Z"
        fill="currentColor"
      />
    </svg>
  );
};
