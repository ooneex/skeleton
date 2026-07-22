import type { SVGProps } from "react";

export const CocktailIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M22.5 31.5V45H19.5V31.5H22.5Z" fill="currentColor" />
      <path d="M31 19L21.0836 32.0127L11 19H31Z" fill="currentColor" data-color="color-2" />
      <path d="M29 43V46H13V43H29Z" fill="currentColor" />
      <path
        d="M37 2C41.9706 2 46 6.02944 46 11C46 15.9706 41.9706 20 37 20C36.5214 20 36.0515 19.9608 35.5928 19.8887L40.416 13.3398C40.7481 12.8888 40.9459 12.355 40.9902 11.7998L41 10C41 8.39489 39.7394 7.08421 38.1543 7.00391L38 7H28.9375C30.4104 4.03699 33.4666 2 37 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M38 10V11.5609L21 34.6494L4 11.5894V10H38ZM21 29.7129L33.2246 13H8.77133L21 29.7129Z"
        fill="currentColor"
      />
    </svg>
  );
};
