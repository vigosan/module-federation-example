import React from "react";
import { Header, Footer, Main } from "../";

function Layout({ children }) {
  return (
    <div className="container mx-auto bg-white max-w-screen-xl">
      <div className="h-full max-w-6xl p-20 mx-auto">
        <div className="flex flex-col h-full space-y-6">
          <Header />
          <Main>{children}</Main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
