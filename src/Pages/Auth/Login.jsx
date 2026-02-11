import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router";


const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password);
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center">Login</h2>

      <form onSubmit={handleLogin} className="space-y-3 mt-4">
        <input name="email" placeholder="Email" className="input input-bordered w-full" />
        <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" />

        <button className="btn btn-success w-full">Login</button>
        <button type="button" onClick={signInWithGoogle} className="btn btn-outline w-full">
          Google Login
        </button>

        <p className="text-center">
          New user? <Link to="/register" className="text-green-700">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
