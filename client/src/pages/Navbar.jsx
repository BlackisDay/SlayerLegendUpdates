// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
        
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/product">Products</Link>
//         </li>
//         <li>
//           <Link to="/cart">Cart</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="text-white font-bold">
            Home
          </Link>
        </li>
        <li>
          <Link to="/signup" className="text-white font-bold">
            Signup
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-white font-bold">
            login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
