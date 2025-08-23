import { AuthLayout } from "@/modules/auth/ui/layouts/auth-layout";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default layout;
