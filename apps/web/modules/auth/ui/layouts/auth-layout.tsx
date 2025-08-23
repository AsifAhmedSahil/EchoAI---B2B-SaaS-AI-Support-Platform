import React from "react";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full min-w-screen min-h-screen flex flex-col justify-center items-center">{children}</div>;
};


