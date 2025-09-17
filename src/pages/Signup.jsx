import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required.");
      setSuccess(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address.");
      setSuccess(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setSuccess(false);
      return;
    }

    sessionStorage.setItem("user", JSON.stringify({ name, email }));

    setError("");
    setSuccess(true);
    console.log("Form submitted:", { name, email, password });

    if (success) {
      const userData = { name, email };
      sessionStorage.setItem("user", JSON.stringify(userData));
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sign Up</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Signup successful!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" style={{ marginBottom: "20px" }}>Sign Up</button>
      </form>
      <br />
      <br />
    </div>
  );
}
