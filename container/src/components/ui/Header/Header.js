import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../../hooks";

function Header() {
  const { isSignedIn } = useApp();

  return (
    <nav className="pb-10">
      <div className="flex justify-between">
        <div>
          <Link to="/" className="pr-4">
            Home
          </Link>
          {isSignedIn && (
            <>
              ·
              <Link to="/payments" className="pl-4">
                Payments
              </Link>
            </>
          )}
        </div>
        <div>
          {isSignedIn ? (
            <Link to="/auth/signout">Logout</Link>
          ) : (
            <Link to="/auth/signin">Signin</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
