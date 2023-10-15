import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [place, SetPlace] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, like sending the data to a server.
    axios.post("http://localhost:5000/submit", {
      firstName,
      lastName,
      email,
      mobile,
      gender,place,date
    });

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setGender("");
    setDate("");
    setMobile("");
    setMessage("");
    SetPlace("");
  };

  return (
    <div className="apb-book">
      <h2>User Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="apb-input">
           <label>FirstName:</label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="apb-input">
          <label>LastName:</label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="apb-input">
          <label>Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="apb-input">
          <label>Mobile No:</label>
          <input
            id="mobile"
            name="mobile"
            type="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <div className="apb-input-gender">
        <span>Gender:</span>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />
            Other
          </label>
        </div>
        <div className="apb-input">
          <label>Place:</label>
          <input
            id="place"
            name="place"
            type="text"
            value={place}
            onChange={(e) => SetPlace(e.target.value)}
            required
          />
        </div>
        <div className="apb-input">
          <label>Message:</label>
          <input
            id="message"
            name="message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="apb-input">
          <label>Date</label>
          <input
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="btn">
          <button className="apb-btn" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default Form;
