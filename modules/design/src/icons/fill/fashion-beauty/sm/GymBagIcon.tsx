import type { SVGProps } from "react";

export const GymBagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 22H8V8H16V22ZM10 12V14H14V12H10Z" fill="currentColor" />
      <path
        d="M16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H16V7Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M19.4281 8C20.4636 8.00014 21.4113 8.5855 21.8744 9.51172C23.6016 12.9666 23.6016 17.0334 21.8744 20.4883C21.4113 21.4145 20.4636 21.9999 19.4281 22H18.0004V8H19.4281Z"
        fill="currentColor"
      />
      <path
        d="M6.00038 22H4.57265C3.53704 22 2.58955 21.4145 2.12636 20.4883C0.399003 17.0333 0.399002 12.9667 2.12636 9.51172C2.58955 8.58548 3.53704 8 4.57265 8H6.00038V22Z"
        fill="currentColor"
      />
    </svg>
  );
};
