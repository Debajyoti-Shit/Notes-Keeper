import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Copyright ⓒ {year} -By Debajyoti </p>
    </footer>
  );
}

//export default Footer;
