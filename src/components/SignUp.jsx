// import React, { useState } from "react";
// import PersonalInfoStep from "../components/SignUpSteps/PersonalInfoStep";
// import AgeGenderStep from "../components/SignUpSteps/AgeGenderStep";
// import SchoolPasswordStep from "../components/SignUpSteps/SchoolPasswordStep";

// function SignUp() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({});

//   const handleNextStep = (data) => {
//     setFormData({ ...formData, ...data });
//     setStep(step + 1);
//   };

//   const handlePrevStep = () => {
//     setStep(step - 1);
//   };

//   const handleSubmit = () => {
//     // Handle form submission
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div>
//       {step === 1 && (
//         <PersonalInfoStep onNextStep={handleNextStep} formData={formData} />
//       )}
//       {step === 2 && (
//         <AgeGenderStep
//           onNextStep={handleNextStep}
//           onPrevStep={handlePrevStep}
//           formData={formData}
//         />
//       )}
//       {step === 3 && (
//         <SchoolPasswordStep
//           onSubmit={handleSubmit}
//           onPrevStep={handlePrevStep}
//           formData={formData}
//         />
//       )}
//     </div>
//   );
// }

// export default SignUp;

// SignUpPage.jsx

import React, { useState } from "react";
import PersonalInfoStep from "../components/SignUpSteps/PersonalInfoStep";
import AgeGenderStep from "../components/SignUpSteps/AgeGenderStep";
import SchoolPasswordStep from "../components/SignUpSteps/SchoolPasswordStep";

function SignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      {step === 1 && (
        <PersonalInfoStep onNextStep={handleNextStep} formData={formData} />
      )}
      {step === 2 && (
        <AgeGenderStep
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
          formData={formData}
        />
      )}
      {step === 3 && (
        <SchoolPasswordStep
          onSubmit={handleSubmit}
          onPrevStep={handlePrevStep}
          formData={formData}
        />
      )}
    </div>
  );
}

export default SignUp;
