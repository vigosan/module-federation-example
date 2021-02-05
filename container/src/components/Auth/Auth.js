import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/App";
import { useApp } from "../../hooks";

function Auth() {
  const ref = useRef(null);
  const history = useHistory();
  const { signIn, signOut } = useApp();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: function () {
        history.push("/");
        signIn();
      },
      onSignOut: function () {
        history.push("/");
        signOut();
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
}

export default Auth;
