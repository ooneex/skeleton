import type { SVGProps } from "react";

export const CurrencyYenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.768 4.42578L24 20.2389L34.232 4.42578L36.7507 6.05553L24 25.7612L11.2493 6.05554L13.768 4.42578Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M22.5 22.5H25.5V44H22.5V22.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 23H36V26H12V23Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 30H36V33H12V30Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
