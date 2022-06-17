// IMPORT

// Next
import { useRouter } from "next/router";

// React

// Material UI

// Components

// Utils

// Data

// TYPE/INTERFACE

// Functional component
export const useRedirectToPage = () => {
  // Router
  const router = useRouter();

  // Functions
  const redirectToPage = (href: string) => {
    router.push(href);
  };

  // Return
  return redirectToPage;
};
