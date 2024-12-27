import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
       <Suspense fallback={"Loading"}>{children}</Suspense>
    </div>
  );
};