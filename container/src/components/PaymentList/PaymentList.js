import React, { useRef, useEffect } from "react";
import { mount } from "payments/PaymentList";

function PaymentList() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
}

export default PaymentList;
