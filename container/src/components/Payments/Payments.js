import React, { useRef, useEffect } from "react";
import { mount } from "payments/App";

function Payments() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
}

export default Payments;
