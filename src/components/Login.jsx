import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleBlur = (field) => {
    if (field === "email" && email === "") {
      setEmailError("Email is required.");
    } else {
      setEmailError("");
    }

    if (field === "password" && password === "") {
      setPasswordError("Password is required.");
    } else {
      setPasswordError("");
    }

    if (field === "name" && state === "register" && name === "") {
      setNameError("Name is required.");
    } else {
      setNameError("");
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 w-[350px] shadow-2xl relative">
      <h2 className="text-2xl font-bold mb-2 text-center">
        <span className="text-green-500">User</span>{" "}
        <span className="text-gray-700">
          {state === "login" ? "Login" : "Sign Up"}
        </span>
      </h2>

      {/* Show Name input only when registering */}
      {state === "register" && (
        <div className="mb-4">
          <label className="text-sm text-gray-600">Name</label>
          <input
            type="text"
            placeholder="type here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => handleBlur("name")}
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-green-500 text-sm"
          />
          {nameError && <p className="text-xs text-red-500">{nameError}</p>}
        </div>
      )}

      <div className="mb-4">
        <label className="text-sm text-gray-600">Email</label>
        <input
          type="email"
          placeholder="type here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur("email")}
          className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-green-500 text-sm"
        />
        {emailError && <p className="text-xs text-red-500">{emailError}</p>}
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-600">Password</label>
        <input
          type="password"
          placeholder="type here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => handleBlur("password")}
          className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-green-500 text-sm"
        />
        {passwordError && <p className="text-xs text-red-500">{passwordError}</p>}
      </div>

      <p className="text-xs text-gray-500 mb-4">
        {state === "login" ? "Create an account? " : "Already have an account? "}
        <span
          onClick={() => setState(state === "login" ? "register" : "login")}
          className="text-green-500 cursor-pointer"
        >
          click here
        </span>
      </p>

      <button
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md text-sm font-semibold transition"
      >
        {state === "login" ? "Login" : "Create Account"}
      </button>
    </div>
  );
};

export default Login;
