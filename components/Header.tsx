import Link from "next/link";
import React from "react";

const linkStyle = {
  marginRight: 15,
};

export const Header: React.FC = () => (
  <nav>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/shows">
      <a style={linkStyle}>Shows</a>
    </Link>
  </nav>
)
