import React, { useState } from "react";

function SchoolPasswordStep({ onSubmit, onPrevStep }) {
  const [schoolName, setSchoolName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (!schoolName || !password) {
      alert("Please fill in all fields.");
      return;
    }
    // Submit form data
    onSubmit({ schoolName, password });
  };

  return (
    <div>
      <h2>Step 3: School Name and Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="School Name"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={onPrevStep}>
          Previous
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SchoolPasswordStep;
