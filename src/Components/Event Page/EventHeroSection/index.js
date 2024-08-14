import React, {useState} from 'react'
import { HeroContainer, HeroContent,HeroD, HeroBtnWrapper,HeroH1, HeroP, Heroimg } from './EventElement'
import {Button} from '../../ButtonElements'
import CollaborateLogo from '../../../images/CollaborateLogo.png';
import { useNavigate } from 'react-router-dom';
//import DynamicBackground from '../Herosection/DynamicBg.js';


const EventHeroSection = () => {
    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    const navigate = useNavigate();
    const handleCollaborateClick = () => {
        // Redirect to the SponsorUsForm page
        window.scrollTo(0, 0);
        navigate('/collaboratePage'); 
      };

  return (
    <HeroContainer>
        {/* <DynamicBackground  /> */}
        <HeroContent>
            <HeroH1>We host robust <HeroD>events</HeroD></HeroH1>
            <HeroH1>that helps leverage the</HeroH1>
            <HeroH1>web3 infrastructure.</HeroH1>
            <HeroP>
                WE STRIVE TO CREATE A COMMUNITY OF STUDENTS PASSIONATE ABOUT BLOCKCHAIN AND WEB3 TECHNOLOGY
            </HeroP>
            <HeroBtnWrapper>
                <Button onClick={handleCollaborateClick} to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' style={{ fontFamily: 'Exo 2, sans-serif', fontWeight: 600 }}>
                  <Heroimg src={CollaborateLogo}/>
               Collaborate with us
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default EventHeroSection;