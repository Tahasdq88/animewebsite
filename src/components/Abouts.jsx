import React from "react";
import styled from "styled-components";
import image from "../assets/Group1.png";
import { keyframes } from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: #2c2c2c;
  margin-top: 2px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  /* border: 2px solid red; */
  height: 100%;
  position: relative;
`;
const Div1 = styled.div`
  width: 50%;
`;
const breatheAnimation = keyframes`
0%, 100% {
    bottom: 4px;
  }
  50% {
    bottom: 12px;
  }
 `
 // check
const Div2 = styled.div`
position: relative;
  width: 351px;
  height: 627px;
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
 animation-iteration-count: infinite;

`;

const Paragraph = styled.p`
  width: 100%;

  font-weight: 400;
  font-size: 15px;
  /* line-height: 32px; */
  color: rgba(255, 255, 255, 0.75);
  margin-top: 30px;
  margin-bottom: 30px;
`;
const Image = styled.img`
  height: 350px;
`;
const Button = styled.button`
font-family: inherit;
background: rgba(255, 0, 0, 0.75);
border: 1px solid #000000;
border-radius: 10px;
color: inherit;
width: 252px;
height: 52px;

`;
const Heading = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  text-shadow: 10px 10px 4px rgba(255, 255, 255, 0.25);
`;
const Abouts = () => {
  return (
    <Container>
      <Wrapper>
        <Div1>
          <Heading>ANIMEHUB</Heading>

          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit
            et consequatur odio nulla eveniet porro expedita, dignissimos quia,
            ex doloremque
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            optio assumenda sunt possimus voluptatum quidem nisi nesciunt
            officiis dolorum laborum? Quos distinctio odit in nesciunt. Sunt nam
            laborum dolorum nisi.
          </Paragraph>
          <Button>Get Started</Button>
        </Div1>
        <Div2>
          <Image src={image} alt="" />
        </Div2>
      </Wrapper>
    </Container>
  );
};

export default Abouts;
