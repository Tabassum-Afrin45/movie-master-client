import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { LuRotate3D } from "react-icons/lu";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-700 py-10 px-6 rounded-xl mt-20 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Logo + Navigation */}
        <div>
          <div className="flex items-center space-x-2">
            <LuRotate3D size={25} />
            <span className="text-xl font-bold">
              Movie Master Pro
            </span>
          </div>

          <ul className="space-y-2 mt-4">
            <li>
              <Link to="/all-models" className="hover:text-green-200 transition">
                All Movies
              </Link>
            </li>
            <li>
              <Link to="/add-model" className="hover:text-green-200 transition">
                Add Movie
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-green-200 transition">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/auth/login" className="hover:text-green-200 transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">
            Connect With Us
          </h3>

          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200 transition"
            >
              <Facebook size={24} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200 transition"
            >
              <Twitter size={24} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200 transition"
            >
              <Instagram size={24} />
            </a>
          </div>

          <a
            href="mailto:support@movie.master.com"
            className="flex items-center hover:text-green-200 transition"
          >
            <Mail size={18} className="mr-2" />
            support@movie.master.com
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-green-500 mt-8 pt-4 text-center text-sm">
        © {currentYear} Movie Master Pro. All Rights Reserved.
        <span className="ml-4">
          <Link to="/" className="hover:text-green-200 mr-3">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:text-green-200">
            Terms of Service
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
