import React from "react";
import {
  TechContainer,
  OuterBorder,
  InnerBorder,
  VerticalText,
  Section,
} from "./Elements";
//import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import TeamCard from "../TeamCard";

// const Tech = () => {
//   return (
//     <>
//         <TechContainer id="team">
//         <TechH1>Technical Team</TechH1>
//         <TechH1>Lead</TechH1>
//         <TechWrapper>
//           <TechCard>
//             <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488847/Asset%20Mantle%20-%20Team%202023/Leads/Harshita%20Deep.jpg" />
//             <TechH2>Harshita Deep</TechH2>
//             <TechP>
//               <a className='linkiden' href="https://www.linkedin.com/in/harshita-d-8a352722a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//               <a className='twitter' href="https://twitter.com/harshita_7777" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//               <a className='insta' href="https://www.instagram.com/ha_rshita4387/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//             </TechP>
//           </TechCard>
//         </TechWrapper>

//         <TechH1>Cores</TechH1>
//         <TechWrapper>
//           <TechCard>
//             <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688526862/Asset%20Mantle%20-%20Team%202023/Technical/Mansi.jpg" />
//             <TechH2>Mansi</TechH2>
//             <TechP>
//                <a className='linkiden' href="https://www.linkedin.com/in/mansi-jangra-33a77622a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//               <a className='twitter' href="https://twitter.com/_mansiJangra" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//               <a className='insta' href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></TechP>
//           </TechCard>
//           <TechCard>
//             <TechIcon src="https://res.cloudinary.com/dx0dgujbj/image/upload/c_scale,h_600,w_614/v1688875544/My%20Image/Untitled_design_1_bqfeyo.png" />
//             <TechH2>Sneha Chauhan</TechH2>
//             <TechP>
//             <a className='linkiden' href="https://www.linkedin.com/in/sneha-chauhan-986a21213/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//               <a className='twitter' href="https://twitter.com/_Sneha_Chauhan" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//               <a className='insta' href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//             </TechP>
//           </TechCard>
//         </TechWrapper>

//         <TechH1>Co-Ordinators</TechH1>
//         <TechWrapper>
//           <TechCard>
//             <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688968744/Asset%20Mantle%20-%20Team%202023/Technical/Monalika.jpg "/>
//             <TechH2>Monalika Patnaik </TechH2>
//             <TechP>
//             <a className='linkiden' href="https://www.linkedin.com/in/monalika-patnaik-b38931230" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//               <a className='twitter' href="https://twitter.com/MonalikaPatnaik" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//               <a className='insta' href="https://www.instagram.com/monalika_0101/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//             </TechP>
//           </TechCard>
//           <TechCard>
//             <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491388/Asset%20Mantle%20-%20Team%202023/Technical/Mehek%20Prabhakar.webp" />
//             <TechH2>Mehek Prabhakar </TechH2>
//             <TechP>
//             <a className='linkiden' href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//               <a className='twitter' href="https://twitter.com/mehekprabhakar" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//               <a className='insta' href="https://www.instagram.com/mehekprabhakar/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//             </TechP>
//           </TechCard>
//           <TechCard>
//             <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688527494/Asset%20Mantle%20-%20Team%202023/Technical/Manjusha%20Iyer.jpg" />
//             <TechH2>Manjusha Iyer </TechH2>
//             <TechP>
//             <a className='linkiden' href="https://www.linkedin.com/in/manjusha-iyer-83b4a01a7/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//               <a className='twitter' href=" https://twitter.com/ManjushaIyer" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//               <a className='insta' href="https://www.instagram.com/iyermanjusha/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//             </TechP>
//           </TechCard>
//           <TechCard>
//             <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491387/Asset%20Mantle%20-%20Team%202023/Technical/Apoorva.jpg" />
//             <TechH2>Apoorva </TechH2>
//             <TechP>
//             <a className='linkiden' href="https://www.linkedin.com/in/apoorva-a65a18256/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//               <a className='twitter' href="https://twitter.com/GilhotraApoorva" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//               <a className='insta' href="https://www.instagram.com/verve_infinite/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//             </TechP>
//           </TechCard>
//         </TechWrapper>
//       </TechContainer>
//     </>
//   )
// }

// export default Tech;

const Tech = () => {
  return (
    <OuterBorder>
      <InnerBorder>
        <Section>
          <VerticalText>Technical Team</VerticalText>
          <TechContainer>
            <TeamCard
              imageUrl="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488847/Asset%20Mantle%20-%20Team%202023/Leads/Harshita%20Deep.jpg"
              linkedinUrl="https://www.linkedin.com/in/harshita-d-8a352722a/"
              twitterUrl="https://twitter.com/harshita_7777"
              instagramUrl="https://www.instagram.com/ha_rshita4387/"
              name="Harshita Deep"
              position="Lead, Technical Team"
              cubetextTitle="Blockchain Maestro"
              cubetextDesc="Maestro of blockchain development, orchestrating innovative solutions"
            />
          </TechContainer>
        </Section>
      </InnerBorder>
    </OuterBorder>
  );
};

export default Tech;
