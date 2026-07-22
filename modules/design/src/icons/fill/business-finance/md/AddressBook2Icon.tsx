import type { SVGProps } from "react";

export const AddressBook2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 31H9V1H23C25.2091 1 27 2.79086 27 5V27C27 29.2091 25.2091 31 23 31ZM23 8H12V14H23V8ZM23 16H12V18H23V16Z"
        fill="currentColor"
      />
      <path d="M7 1H3V31H7V1Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M31 7V15H29V7H31Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
