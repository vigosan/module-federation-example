import React, { useRef, useEffect } from "react";
import { mount } from "dashboard/App";

function Dashboard() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
}

export default Dashboard;
