import type { SVGProps } from "react";

export const AddressBookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M31 7V15H29V7H31Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 1H3V31H23C25.2091 31 27 29.2091 27 27V5C27 2.79086 25.2091 1 23 1ZM18.5 11C18.5 12.933 16.933 14.5 15 14.5C13.067 14.5 11.5 12.933 11.5 11C11.5 9.067 13.067 7.5 15 7.5C16.933 7.5 18.5 9.067 18.5 11ZM20.0933 23.2575L21.9967 22.7816C21.8813 19.0167 18.7929 16 15 16C11.2071 16 8.11873 19.0167 8.00336 22.7816L9.90677 23.2575C13.2508 24.0935 16.7492 24.0935 20.0933 23.2575Z"
        fill="currentColor"
      />
    </svg>
  );
};
