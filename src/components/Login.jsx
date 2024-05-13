// import React from "react";

// function Login({ onLogin }) {
//   const handleLogin = (role) => {
//     onLogin(role);
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <button onClick={() => handleLogin("admin")}>Login as Admin</button>
//       <button onClick={() => handleLogin("user")}>Login as User</button>
//       <p>
//         Don't have an account? <a href="/signup">Sign Up</a>
//       </p>
//     </div>
//   );
// }

// export default Login;

// LoginPage.jsx
// Login.jsx
// import React from "react";
// import AdminLogin from "./AdminLogin";
// import UserLogin from "./UserLogin";

// function Login({ onLogin }) {
//   const handleLogin = (role) => {
//     onLogin(role);
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <button onClick={() => AdminLogin("admin")}>Login as Admin</button>
//       <button onClick={() => UserLogin("user")}>Login as User</button>
//       <p>
//         Don't have an account? <a href="/signup">Sign Up</a>
//       </p>
//     </div>
//   );
// }

// export default Login;

// import React from "react";
// import AdminLogin from "./AdminLogin";
// import UserLogin from "./UserLogin";

// function Login({ onLogin }) {
//   const handleLogin = (role) => {
//     onLogin(role);
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <button <AdminLogin onLogin={() => handleLogin("admin")} />>Login As Admin</button>
      
//       {/* Render the UserLogin component */}
//       <UserLogin onLogin={() => handleLogin("user")} />
//       <p>
//         Don't have an account? <a href="/signup">Sign Up</a>
//       </p>
//     </div>
//   );
// }

// export default Login;


import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h2>Login</h2>
      {/* Link to the Admin Login page */}
      <Link to="/admin-login">
        <button>Login as Admin</button>
      </Link>
      {/* Link to the User Login page */}
      <Link to="/user-login">
        <button>Login as User</button>
      </Link>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
