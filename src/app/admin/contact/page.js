"use client";

import React, { useState, useEffect } from "react";

export default function Page() {
  const [Delete, setDelete] = useState("");
  const [contactData, setContactData] = useState();
  let pass = "elsecodeelsecode";
  const [passInput, setPassInput] = useState("");

  const fetchData = () => {
    fetch("http://localhost:5000/contact")
      .then((d) => d.json())
      .then((dat) => setContactData(dat));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(contactData);
  const sortedData =
    contactData &&
    [...contactData].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

  return (
    <div>
      <div className="flex justify-center mt-10">
        <div>
          <h1>PASSWORD</h1>
          <input
            onChange={(e) => setPassInput(e.target.value)}
            style={{ border: "1px solid black" }}
          />
        </div>
      </div>
      {passInput === pass && (
        <div>
          <table style={{ width: "100%", margin: "20px", marginRight: "20px" }}>
            <tr className="font-bold">
              <td>NAME</td>
              <td>EMAIL</td>
              <td>PHONE</td>
              <td>BUDGET</td>
              <td>DESCRIPTION</td>
            </tr>
            {sortedData?.map((data) => (
              <tr key={data._id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.budget}</td>
                <td>{data.description}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}
