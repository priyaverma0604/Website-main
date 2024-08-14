// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa"; // Import the close icon as well
// import Logo2 from "../../images/logo.png";
// import {
//   Nav,
//   NavbarContainer,
//   NavImg,
//   NavMenu,
//   Navitem,
//   NavLinks,
//   MobileIcon,
//   NavLogo,
// } from "./NavbarElements";
// import { Link } from "react-router-dom";
// import Profile from "./Profile";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       setScrollPosition(window.scrollY);
//     });
//   }, []);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLogoClick = () => {
//     window.scrollTo(0, 0);
//   };

//   return (
//     <>
//       <Nav
//         style={{
//           backgroundColor: scrollPosition > 0 ? "transparent" : "transparent",
//         }}
//       >
//         <NavbarContainer>
//           <div className="profile-icon">
//             <Profile />
//           </div>
//           <NavImg>
//             <Link to="/" onClick={handleLogoClick}>
//               <img src={Logo2} height={44} alt="Logo" />
//             </Link>
//             <NavLogo>
//               AssetMerkle
//               {/* <SubLogo>Student Chapter IGDTUW</SubLogo> */}
//             </NavLogo>
//           </NavImg>

//           <MobileIcon onClick={toggle}>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </MobileIcon>
//           <NavMenu isOpen={isOpen}>
//             <Navitem>
//               <NavLinks to="/" onClick={handleLogoClick}>
//                 ABOUT
//               </NavLinks>
//             </Navitem>
//             <Navitem>
//               <NavLinks to="/event" onClick={handleLogoClick}>
//                 EVENTS
//               </NavLinks>
//             </Navitem>

//             <Navitem className="custom">
//               <NavLinks to="/TeamPage" onClick={handleLogoClick}>
//                 TEAM
//               </NavLinks>
//             </Navitem>
//             {/* <Navitem className="custom">
//               <NavLinks to="/collaboratePage" onClick={handleLogoClick}>
//                 COLLABORATE
//               </NavLinks>
//             </Navitem> */}
//             <Navitem className="custom">
//               <NavLinks to="/faq" onClick={handleLogoClick}>
//                 FAQS
//               </NavLinks>
//             </Navitem>
//           </NavMenu>
//         </NavbarContainer>
//       </Nav>
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the close icon as well
import Logo2 from "../../images/logo.png";
import {
  Nav,
  NavbarContainer,
  NavImg,
  NavMenu,
  Navitem,
  NavLinks,
  MobileIcon,
  NavLogo,
} from "./NavbarElements";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Nav
        style={{
          backgroundColor: scrollPosition > 0 ? "transparent" : "transparent",
        }}
      >
        <NavbarContainer>
          {/* css for proflie icon is written in app.css */}
          <div className="profile-icon">
            <Profile />
          </div>
          <NavImg>
            <Link to="/" onClick={handleLogoClick}>
              <img src={Logo2} height={44} alt="Logo" />
            </Link>
            <NavLogo>
              AssetMerkle
              {/* <SubLogo>Student Chapter IGDTUW</SubLogo> */}
            </NavLogo>
          </NavImg>

          <MobileIcon onClick={toggle}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu isOpen={isOpen}>
            <Navitem>
              <NavLinks to="/" onClick={handleLogoClick}>
                ABOUT
              </NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="/event" onClick={handleLogoClick}>
                EVENTS
              </NavLinks>
            </Navitem>

            <Navitem className="custom">
              <NavLinks to="/TeamPage" onClick={handleLogoClick}>
                TEAM
              </NavLinks>
            </Navitem>
            {/* <Navitem className="custom">
              <NavLinks to="/collaboratePage" onClick={handleLogoClick}>
                COLLABORATE
              </NavLinks>
            </Navitem> */}
            <Navitem className="custom">
              <NavLinks to="/faq" onClick={handleLogoClick}>
                FAQS
              </NavLinks>
            </Navitem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
