import type { SVGProps } from "react";

export const RingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M35 9.5L28.1895 16.2246L24 15L19.8105 16.2246L13 9.5H35Z" fill="currentColor" data-color="color-2" />
      <path
        d="M37 30C37 22.8203 31.1797 17 24 17C16.8203 17 11 22.8203 11 30C11 37.1797 16.8203 43 24 43C31.1797 43 37 37.1797 37 30ZM40 30C40 38.8366 32.8366 46 24 46C15.1634 46 8 38.8366 8 30C8 21.1634 15.1634 14 24 14C32.8366 14 40 21.1634 40 30Z"
        fill="currentColor"
      />
      <path d="M22.5723 6.5H13.1504L18.582 1H19.8223L22.5723 6.5Z" fill="currentColor" data-color="color-2" />
      <path d="M34.8496 6.5H25.9277L23.1777 1H29.418L34.8496 6.5Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
