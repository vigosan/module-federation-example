import React from "react";
import { Header, Footer, Main } from "../";

function Layout({ children }) {
  return (
    <div className="container mx-auto bg-white">
      <div className="h-full max-w-4xl mx-auto">
        <div className="flex flex-col h-full min-h-screen py-10">
          <Header />
          <Main>{children}</Main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
