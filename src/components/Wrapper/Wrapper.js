import React from "react";

export default ({ children }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      maxWidth: "860px",
      margin: "0 auto"
    }}
  >
    {children}
  </div>
);
