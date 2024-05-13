// import React, { useState } from "react";

// function UserLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle user login logic
//     console.log("User login:", { email, password });
//   };

//   return (
//     <div>
//       <h2>User Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default UserLogin;
import React, { useState } from "react";

function UserLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Validate username and password
    if (username === "" || password === "") {
      setError("Username and password are required.");
      return;
    }

    // Check if the credentials are valid
    if (username === "user" && password === "user123") {
      // Successful login
      onLogin("user");
    } else {
      // Invalid credentials
      setError("Invalid username or password.");
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default UserLogin;
