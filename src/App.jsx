import React, { useEffect, useRef, useState } from "react";
import "./App.css";
// Animation AOS
import AOS from "aos";
import "aos/dist/aos.css";
// Illustration Pic
import formIllustrtion from "./assets/Form-Illustration.png";
// Sweetalert Import
import Swal from "sweetalert2";

export default function InputFocus() {
  const name = useRef();
  const fName = useRef();
  const contactNo = useRef();
  const email = useRef();
  const location = useRef();

  // Dynamic Update
  const [data, setData] = useState({});

  // Animation
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "easing-in-out",
      once: true,
    });
  }, []);

  function submit(e) {
    e.preventDefault();

    const nameVal = name.current.value.trim();
    const fNameVal = fName.current.value.trim();
    const contactNoVal = contactNo.current.value.trim();
    const emailVal = email.current.value.trim();
    const locationVal = location.current.value.trim();

    // Empty field check
    if (!nameVal || !fNameVal || !contactNoVal || !emailVal || !locationVal) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please fill all fields before submitting",
        confirmButtonColor: "#452829",
      });
      return;
    }

    // Data Set
    setData({
      name: nameVal,
      fName: fNameVal,
      contactNo: contactNoVal,
      email: emailVal,
      location: locationVal,
    });

    // Completely form fill
    Swal.fire({
      icon: "success",
      title: "Form Submitted",
      text: "Your data has been submitted successfully",
      confirmButtonColor: "#452829",
    });
  }

  return (
    <div className="form-wrapper">
      <div className="form-illustration" data-aos="fade-right">
        <img src={formIllustrtion} alt="Form Illustration" />
        <h2>Personal Information</h2>
        <p>Please fill out the form with accurate details.</p>
      </div>
      <div className="form-card" data-aos="fade-left">
        <h1>React Form</h1>

        <form onSubmit={submit}>
          <input type="text" ref={name} placeholder="Full Name" />
          <input type="text" ref={fName} placeholder="Father Name" />
          <input type="number" ref={contactNo} placeholder="Contact Number" />
          <input type="email" ref={email} placeholder="Email Address" />
          <input type="text" ref={location} placeholder="Location" />

          <button type="submit">Submit</button>
          <div className="developer">
            <h2>Developed by Aeiman</h2>
          </div>
        </form>

        {data.name && (
          <div className="output" data-aos="zoom-in">
            <h3>Your Details</h3>
            <p>
              <b>Name:</b> {data.name}
            </p>
            <p>
              <b>Father Name:</b> {data.fName}
            </p>
            <p>
              <b>Contact:</b> {data.contactNo}
            </p>
            <p>
              <b>Email:</b> {data.email}
            </p>
            <p>
              <b>Location:</b> {data.location}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
