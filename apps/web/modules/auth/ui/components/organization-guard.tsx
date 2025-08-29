import { useOrganization } from "@clerk/nextjs";
import React from "react";
import { AuthLayout } from "../layouts/auth-layout";
import OrganizationSelectView from "../views/org-select-view";

export const OrganizationGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <AuthLayout>
        <OrganizationSelectView/>
      </AuthLayout>
    );
  }
  return <div>{children}</div>;
};

export default OrganizationGuard;
