import { useEffect } from "react";

function Signout({ onSignOut }) {
  useEffect(() => {
    onSignOut();
  });

  return null;
}

export default Signout;
