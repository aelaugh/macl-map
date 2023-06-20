import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, secondaryNav = false, className = '' }) => {
  return (
    <>
      <Navbar transparent={secondaryNav} />
      <div className={className}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
