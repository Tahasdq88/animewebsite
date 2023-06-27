import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 50px;
    /* background-color:red; */
    background-color: #2C2C2C;
`
const Wrapper= styled.div`
`
const Ul=styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-end;
    /* border: 2px solid red; */
    padding-top: 22px;
    padding-right: 81px;
`
const Li= styled.li`
 /* display: inline; */
 padding: 2px;
 font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 19px;
    
`
const Line= styled.hr`
/* border: 2px solid red; */
height: 18px;
border: 0.5px solid #FFFFFF;
    
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Ul>
            <Li>
                HOME 
            </Li>
            <Li>
            <Line/>
           
            </Li>
            <Li>
                ABOUT 
            </Li>
            <Li>
                <Line/>
            </Li>
            <Li>
                FEATURES
            </Li>
            <Li>
                <Line/>
            </Li>
            <Li>
                CONTACT US
            </Li>
        </Ul>
      </Wrapper>
    </Container>
  )
}

export default Navbar
