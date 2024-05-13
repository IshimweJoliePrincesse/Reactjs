import React, { useState } from "react";

function PersonalInfoStep({ onNextStep }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (!firstName || !lastName || !email) {
      alert("Please fill in all fields.");
      return;
    }
    // Proceed to next step
    onNextStep({ firstName, lastName, email });
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default PersonalInfoStep;
