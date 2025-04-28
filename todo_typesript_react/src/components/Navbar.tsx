import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-18 mt-6 mb-10">
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-all hover:underline"
      >
        All
      </Link>
      <Link
        to="/?todos=active"
        className="text-green-600 hover:text-green-800 font-semibold text-lg transition-all hover:underline"
      >
        Active
      </Link>
      <Link
        to="/?todos=completed"
        className="text-red-600 hover:text-red-800 font-semibold text-lg transition-all hover:underline"
      >
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
