import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router";
import { NavLink } from "react-router";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 px-6">
      <div className="navbar-start">
        <Link to="/" className="text-xl font-bold">
          Movie<span className="text-green-700">Master</span>Pro
        </Link>
      </div>

      <div className="navbar-center">
        <NavLink to="/" className="px-3">Home</NavLink>
        <NavLink to="/allMovies" className="px-3">All Movies</NavLink>
        {user && <NavLink to="/myCollection" className="px-3">My Collection</NavLink>}
      </div>

      <div className="navbar-end">
        {user ? (
          <button onClick={signOutUser} className="btn btn-success">Logout</button>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline mr-2">Login</Link>
            <Link to="/register" className="btn btn-success">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
