import { ReactNode } from "react";

interface GuestGuardProps {
  children: ReactNode;
}
export const GuestGuard = ({ children }: GuestGuardProps) => {
  return <>{children}</>;
};
