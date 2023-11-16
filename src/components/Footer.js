import React from "react";
import FooterNav from "./FooterNav";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid grid-rows-1 grid-cols-3">
      <div>
        <ul>
          <li>Address</li>
          <li>phone mail</li>
          <li>social media</li>
        </ul>
      </div>
      <div>
        <FooterNav />
      </div>
      <div>
        <ul>
          <li className="m-2">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="m-2">
            <Link href="/terms">Terms & Condition</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
