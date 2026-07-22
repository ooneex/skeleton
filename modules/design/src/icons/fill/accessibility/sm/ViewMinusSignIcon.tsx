import type { SVGProps } from "react";

export const ViewMinusSignIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="9" r="6" strokeWidth="0" fill="currentColor" />
      <path
        d="m11.005,18.984l-.985-.176C3.773,17.694.407,11.738.267,11.485L-.001,11.001l.267-.484c.169-.307,4.23-7.517,11.735-7.517s11.565,7.21,11.735,7.517l.268.486-.271.485c-.051.092-1.287,2.28-3.605,4.271l-.758.651-1.303-1.517.759-.652c1.432-1.229,2.4-2.55,2.857-3.242-.994-1.506-4.403-5.999-9.682-5.999S3.313,9.492,2.318,10.999c.891,1.344,3.71,5.065,8.054,5.84l.984.175-.351,1.969Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect x="13" y="18" width="10" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
