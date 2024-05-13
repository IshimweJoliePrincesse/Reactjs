// import React, { useState } from "react";
// import Login from "./components/Login";
// import AdminLogin from "./components/AdminLogin";
// import UserLogin from "./components/UserLogin";
// import SignUp from "./components/SignUp";

// function App() {
//   const [loggedInAs, setLoggedInAs] = useState(null);

//   const handleLogin = (role) => {
//     setLoggedInAs(role);
//   };

//   return (
//     <div>
//       {!loggedInAs && <Login onLogin={handleLogin} />}
//       {loggedInAs === "admin" && <AdminLogin />}
//       {loggedInAs === "user" && <UserLogin />}
//       {loggedInAs && <SignUp />}
//     </div>
//   );
// }

// export default App;

// App.jsx
// App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SignUp from "./components/SignUp";
// import Login from "./components/Login";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Signup" element={<SignUp />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for the Login component */}
          <Route exact path="/" element={<Login />} />
          {/* Route for the AdminLogin component */}
          <Route path="/admin-login" element={<AdminLogin />} />
          {/* Route for the UserLogin component */}
          <Route path="/user-login" element={<UserLogin />} />
          {/* Route for the SignUp component */}
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
