import React from "react";

import { Header } from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #ddd",
};

export const Layout: React.FC = ({ children }) => (
  <section style={layoutStyle}>
    <Header />

    {children}
  </section>
);
