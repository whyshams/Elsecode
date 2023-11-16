import React from "react";
import Link from "next/link";
export default function FooterNav() {
  return (
    <div>
      <ul className="">
        <li className="m-6 ">
          <Link href="/aboutus">About Us</Link>
        </li>
        <li className="m-6">
          <Link href="/casestudy">Case Study</Link>
        </li>

        <li className="m-6">
          <Link href="/services">Service</Link>
        </li>

        <li className="m-6">
          <Link href="/clients">Client</Link>
        </li>
        <li className="m-6">
          <Link href="/blogs">Blog</Link>
        </li>
      </ul>
    </div>
  );
}
