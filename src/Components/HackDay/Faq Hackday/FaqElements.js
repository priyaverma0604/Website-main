import styled from 'styled-components'


export const HeroContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);  
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
align-items: center;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }


  @media screen and (max-width: 1024px) {
    ${'' /* font-size: 48px; */}
    padding: 50px 150px;
  }

  @media screen and (max-width: 768px) {
    ${'' /* font-size: 40px; */}
    padding: 50px 50px;
  }

  @media screen and (max-width: 480px) {
    ${'' /* font-size: 32px; */}
    padding: 30px 20px;
    width: 100%;
    height: 1600px;
  }

`;


export const HeroContent = styled.div`
  z-index: 3;
  max-width: 2400px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
    ${'' /* font-size: 32px; */}
    padding: 30px 20px;
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  text-align: center;
  display: flex;
  padding: 50px 50px;
  padding-top: 1px;
  width: 200px;
  //font-family: 'Poppins', sans-serif;
  font-family: 'Exo 2', sans-serif;
  
  ${'' /* font-family: 'Inter'; */}
  ${'' /* color: #fffdfa; */}
  font-style: normal;
  font-size: 52px;
  font-weight: 500;
  color: white;

  @media screen and (max-width: 1024px) {
    font-size: 48px;
    padding: 50px 150px;
    text-align: center;
    ${'' /* width: 50rem; */}
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
    padding: 20px 2px;
    text-align: center;
    display: flex;
    width: 2rem;
  }

  @media screen and (max-width: 480px) {
    margin-top: 200px;
    font-size: 32px;
    padding: 10px 10px;
    text-align: center;
    display: flex;
    width: 5rem;
    ${'' /* padding-left: 1rem; */}
  }
`;

export const Accordian = styled.div`
 display: grid;
  grid-template-columns: repeat(2, 1fr);
<<<<<<< HEAD
  gap: 20px;  
  width: 100%; 

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr; 
  }

  @media screen and (max-width: 480px){
    grid-template-columns: 1fr;  
=======
  gap: 20px;  // Adjust the gap between columns if needed
  width: 100%;  // Adjust for responsiveness

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;  // On smaller screens, switch to a single column
  }

  @media screen and (max-width: 480px){
    grid-template-columns: 1fr;  // Adjust for even smaller screens
>>>>>>> 7ee5f7165e023099c4c40f54c5202407cff0a09f
  }

`

export const Item = styled.div`
margin-bottom: 5px;
padding: 10px 20px;
width: 100%;  // Adjust the width as needed

@media screen and (max-width: 480px){
  padding: 10px 0px;
}
    
`
export const Title = styled.div`
  border-radius: 24px 24px 0px 0px;
  padding: 16px;
  ${'' /* <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cardo&family=Edu+NSW+ACT+Foundation&display=swap" rel="stylesheet"> */}
  font-family: 'Poppins', sans-serif;
  ${'' /* font-family: 'Edu NSW ACT Foundation', cursive;   */}
  font-weight: 500;
  font-size: 1.5 rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #f2af13;
  color: black;
  transition: background 0.3s ease;

  h2 {
    margin: 0;
    font-size: 20px;

  }

  span {
    font-size: 20px;
  }

  &:hover {
    background: #e99d0b;
  }
  
`;

export const Content = styled.div`
  color: white;
  padding: 24px 56px;
  font-weight: 500;
  ${'' /* <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cardo&family=Edu+NSW+ACT+Foundation&display=swap" rel="stylesheet"> */}
  font-family: 'Poppins', sans-serif;
  ${'' /* font-family: 'Edu NSW ACT Foundation', cursive; */}
  height: ${({ selected }) => (selected ? 'auto' : '0')};
  opacity: ${({ selected }) => (selected ? '1' : '0')};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  border-radius: 0px 0px 24px 24px;
  background: linear-gradient(90deg, rgba(255, 198, 64, 0.5) 0%, rgba(169, 169, 169, 0.67) 100%);
`;
export const InputBox1 = styled.input`
  padding: 10px;
  margin: 0px 20px;
  width: 761px;
  height: 40px;
  border: 3px solid #f2af13;
  border-radius: 12px;
  font-size: 16px;
  margin-left:350px;
  background-color: #FFFFFF;
  ::placeholder {
    color: #000000;
  }
  @media screen and (max-width: 768px){
    width:auto;
    margin-left: 0;
  }

  @media screen and (max-width: 480px){
    width:auto;
    margin-left: 0;
  }
`;
export const InputBox2 = styled.input`
  padding: 10px;
  margin: 10px 20px;
  width: 760px;
  height: 70px;
  border: 3px solid #f2af13;
  border-radius: 20px;
  font-size: 16px;
  margin-left:350px;
  background-color: #FFFFFF;
  ::placeholder {
    color: #000000;
  }
  @media screen and (max-width: 768px){
    width:auto;
    margin-left: 0;
  }

  @media screen and (max-width: 480px){
    width:auto;
    margin-left: 0;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  margin-right:335px;
  margin-top: 30px;
  background-color: #f2af13;
  color: white;
  border: 2px solid #f2af13;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  @media screen and (max-width: 768px){
    margin-right:0;
  }

  @media screen and (max-width: 480px){
    margin-right:30px;
  }

`;
export const FaqBox = styled.div`
position: relative;
width:100% ;
zIndex: 2;

`;
