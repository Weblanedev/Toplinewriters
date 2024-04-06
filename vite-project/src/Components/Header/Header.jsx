import { useEffect } from "react";
import "./Header.css"
import { useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Nav = useNavigate()
  const handleContactUs =()=>{
    Nav("/contact")
}
  const handleAboutUs =()=>{
    Nav("/About")
}
const handleBilling =()=>{
  Nav("/Billing")
}

const handlehome =()=>{
  
    Nav("/")
}

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldChangeColor = scrollPosition > 100;

      setIsScrolled(shouldChangeColor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`Header1 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="Headerwrapper">
          <div className={`writterLogo ${isScrolled ? 'logo-scrolled' : ''}`}>
            <h1 className={`writterLogo ${isScrolled ? 'logo-scrolled' : ''}`}>Toplinewriters</h1>
          </div>
          <div className={`NavDiv ${isScrolled ? 'text-scrolled' : ''}`}>
            <div onClick={handlehome} className={`NavDiv ${isScrolled ? 'text-scrolled' : ''}`}>Home</div>
            
              <div onClick={handleContactUs} className={`NavDiv ${isScrolled ? 'text-scrolled' : ''}`}>Contact Us</div>
            
            <div onClick={handleAboutUs} className={`NavDiv ${isScrolled ? 'text-scrolled' : ''}`}>About Us</div>

            <div onClick={handleBilling} className={`NavDiv ${isScrolled ? 'text-scrolled' : ''}`}>Billing </div>
          </div>
          <div className="Hirewriterbtn"> <button className={`Hirewriterbtnbutton  ${isScrolled ? 'hirewritterbtn-scrolled' : ''}`}>Hire A Writer</button></div>
        </div>
      </div>
    </>
  )
}
export default Header