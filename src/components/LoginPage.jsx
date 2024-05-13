// In the component where you render the Login component
import React, { useState } from "react";
import Login from "./Login";

function LoginPage() {
  const handleLogin = (role) => {
    // Define your login logic here
    console.log("Logging in as", role);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <Login onLogin={handleLogin} />
      {/* Pass onLogin function as a prop */}
    </div>
  );
}

export default LoginPage;
