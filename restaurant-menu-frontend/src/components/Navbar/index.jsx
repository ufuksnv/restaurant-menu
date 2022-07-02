import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to=''>Menu</Link></li>
        <li><Link to=''>Popular</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;