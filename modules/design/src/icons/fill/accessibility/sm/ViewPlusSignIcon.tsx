import type { SVGProps } from "react";

export const ViewPlusSignIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="9" r="6" strokeWidth="0" fill="currentColor" />
      <path
        d="m11.005,18.984l-.985-.176C3.773,17.694.407,11.738.267,11.485L-.001,11.001l.267-.484c.169-.307,4.23-7.517,11.735-7.517s11.566,7.21,11.735,7.517l.269.486-.271.485c-.021.039-.543.966-1.515,2.146l-.635.772-1.544-1.271.636-.772c.448-.544.788-1.028,1.01-1.364-.994-1.506-4.403-6-9.683-6S3.313,9.492,2.318,10.999c.891,1.344,3.71,5.065,8.054,5.84l.984.175-.351,1.969Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="23 18 19 18 19 14 17 14 17 18 13 18 13 20 17 20 17 24 19 24 19 20 23 20 23 18"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
