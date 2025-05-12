"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

const SignOutLinks = () => {
  const handleSignOutClick = () => {
    toast("Signed out successfully");
  };
  // This function is called when the user clicks the sign out button

  return (
    <SignOutButton redirectUrl="/">
      <button type="button" onClick={handleSignOutClick}>
        Sign Out
      </button>
    </SignOutButton>
  );
};
export default SignOutLinks;
