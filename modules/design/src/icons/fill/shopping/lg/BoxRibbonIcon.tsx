import type { SVGProps } from "react";

export const BoxRibbonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 15V4H31V15H17Z" fill="currentColor" data-color="color-2" />
      <path
        d="M15 18H6V36C6 39.3137 8.68629 42 12 42H36C39.3137 42 42 39.3137 42 36V18H33V30C33 31.0397 32.4616 32.0053 31.5772 32.552C30.6927 33.0986 29.5883 33.1483 28.6584 32.6833L24 30.3541L19.3416 32.6833C18.4117 33.1483 17.3073 33.0986 16.4228 32.552C15.5384 32.0053 15 31.0397 15 30V18Z"
        fill="currentColor"
      />
      <path d="M34 15L44 15V4L34 4V15Z" fill="currentColor" />
      <path d="M14 4H4V15L14 15V4Z" fill="currentColor" />
      <path d="M18 30V18H30V30L24 27L18 30Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
