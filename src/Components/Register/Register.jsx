import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router";


const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/[A-Z]/.test(password)) return setError("Need uppercase letter");
    if (!/[a-z]/.test(password)) return setError("Need lowercase letter");
    if (password.length < 6) return setError("Min 6 characters");

    createUser(email, password);
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center">Register</h2>

      <form onSubmit={handleRegister} className="space-y-3 mt-4">
        <input name="email" placeholder="Email" className="input input-bordered w-full" />
        <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" />

        {error && <p className="text-red-500">{error}</p>}

        <button className="btn btn-success w-full">Register</button>
        <button type="button" onClick={signInWithGoogle} className="btn btn-outline w-full">
          Google Login
        </button>

        <p className="text-center">
          Already have account? <Link to="/login" className="text-green-700">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
