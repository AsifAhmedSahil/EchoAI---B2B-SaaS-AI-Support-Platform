import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full min-w-screen min-h-screen flex flex-col justify-center items-center">{children}</div>;
};

export default layout;
