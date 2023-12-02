"use client";

import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming your API endpoint is http://localhost:5000/submitFormData
    const apiUrl = "https://elsecode-backend.onrender.com/contact";
    const formData = {
      name: name,
      email: email,
      phone: phone,
      budget: budget,
      description: description,
    };
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setName("");
      setEmail("");
      setPhone("");
      setBudget("");
      setDescription("");

      if (response.ok) {
        toast.success("Thank You For Reaching Us!", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("There were some Mistkes. Please try again", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("There were some Mistkes. Please try again", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="flex justify-center">
      <ToastContainer />
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="md:flex">
          <input
            className=""
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="EMAIL (Required)"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="md:flex">
          <input
            placeholder="PHONE N0:"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            placeholder="BUDGET"
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

        <textarea
          placeholder="DESCRIPTION OF YOUR PROJECT"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button className="bg-red-600 p-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
