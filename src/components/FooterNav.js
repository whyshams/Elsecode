import React from "react";
import Link from "next/link";
export default function FooterNav() {
  return (
    <div>
      <ul className="my-4">
        <li className="mt-3 ">
          <Link href="/aboutus">About Us</Link>
        </li>
        <li className="mt-3">
          <Link href="/casestudy">Case Study</Link>
        </li>

        <li className="mt-3">
          <Link href="/services">Service</Link>
        </li>

        <li className="mt-3">
          <Link href="/clients">Client</Link>
        </li>
        <li className="mt-3">
          <Link href="/blogs">Blog</Link>
        </li>
      </ul>
    </div>
  );
}
