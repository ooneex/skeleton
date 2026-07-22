import type { SVGProps } from "react";

export const HandshakeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M5 7V21" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path
        d="M10 7.00003L1 7.00003L1 21.0545H5L13.1926 28.3832C14.1846 29.2706 15.712 29.1693 16.5782 28.1588V28.1588C17.3818 27.2212 17.3326 25.8241 16.4649 24.9455L15 23.462L18.1807 26.3488C19.177 27.2531 20.7233 27.1562 21.5989 26.1346V26.1346C22.3951 25.2058 22.3606 23.8254 21.5189 22.9375L19.5 20.8076L22.7354 23.844C23.7189 24.767 25.2575 24.7426 26.2112 23.7888V23.7888C27.1955 22.8046 27.1854 21.2057 26.1888 20.2339L18.5 12.7366L18.7702 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20 11.5001L13.6415 16.2689C12.6996 16.9753 11.3816 16.8817 10.5491 16.0492V16.0492C9.67499 15.175 9.62124 13.7753 10.4258 12.8367L15.8493 6.50913C17.1536 4.98755 19.2403 4.39169 21.1513 4.99517L27.5 7.00003H31V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M27 7V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
