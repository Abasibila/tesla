import styled from "styled-components"
import Fade from "react-reveal/Fade";

function Section( { title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
         <Fade bottom>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
          </Fade>
         
            <Buttons>
            <Fade bottom>
                    <BtnGround>
                        <LeftBtn>{ leftBtnText }</LeftBtn>
                        { rightBtnText &&
                            <RightBtn>
                                { rightBtnText }
                            </RightBtn>
                        }
                        
                    </BtnGround>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const Buttons = styled.div`
`
const DownArrow = styled.img`
    height: 20px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`
const LeftBtn = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transfrom: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
`
const RightBtn = styled(LeftBtn)`
background: white;
opacity: 0.65;
color: black;
`

const BtnGround = styled.div`
    display: flex;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    back-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")` };
    
`