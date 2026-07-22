import type { SVGProps } from "react";

export const NumbersIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 27H29V25H16V24.5714C16 23.2397 16.7953 22.0367 18.0205 21.515L24.6611 18.6872C27.2922 17.5668 29 14.9835 29 12.1237C29 7.96824 25.4623 4.69225 21.3191 5.01096L20.6208 5.06468C16.8848 5.35206 14 8.46732 14 12.2143V13.2143H16V12.2143C16 9.51239 18.0802 7.26601 20.7742 7.05879L21.4725 7.00507C24.4541 6.77571 27 9.13326 27 12.1237C27 14.1817 25.771 16.0408 23.8775 16.8471L17.237 19.6748C15.274 20.5107 14 22.438 14 24.5714V27Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.64304 5H10V27H8V7.29206L2.35928 11.9072L1.0928 10.3593L7.64304 5Z"
        fill="currentColor"
      />
    </svg>
  );
};
