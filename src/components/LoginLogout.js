import { useState } from "react";

function LoginLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1>Login / Logout</h1>

        {isLoggedIn ? (
          <div>
            <h2>Welcome! You are logged in.</h2>

            <button onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h2>You are logged out.</h2>

            <button onClick={() => setIsLoggedIn(true)}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginLogout;