import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

const Navbar = ({ isMobile = true }) => {
  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
}

export default Navbar;
