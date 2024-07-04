import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav className="flex justify-start items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
        <Link to="/" className="text-white mr-5">
          Users
        </Link>
        <Link to="/pages" className="text-white">
          Posts
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
