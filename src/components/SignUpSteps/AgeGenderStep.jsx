import React, { useState } from 'react';

function AgeGenderStep({ onNextStep, onPrevStep }) {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (!age || !gender) {
      alert('Please fill in all fields.');
      return;
    }
    // Proceed to next step
    onNextStep({ age, gender });
  };

  return (
    <div>
      <h2>Step 2: Age and Gender</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="button" onClick={onPrevStep}>Previous</button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default AgeGenderStep;
