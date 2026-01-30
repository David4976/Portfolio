import React from "react";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Portfolio</p>
    </footer>
  );
}
