import React from 'react';
import styled from 'styled-components';
import Container from '../styles/Container';
import Button from '../styles/Button';

const Title = styled.h1`
    margin: 0;
    padding: 0rem 4rem 0rem;

    font-size: 3rem;
    word-break: keep-all;
`;

const Subtitle = styled.h2`
    margin: 0;
    padding: 8rem 0rem 0rem;

    font-weight: 100;
    font-style: italic;
`;

const LogoWrapper = styled.div`
    margin: 1rem;
`;

const Logo = styled.div`
    margin: 1rem auto;
    border: 0.5rem solid #000;
    max-width: 220px;

    position: relative;
    overflow: visible;
`;

const LogoText = styled.p`
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 4px;
`;

const LogoSubtext = styled.p`
    width: 130px;
    position: absolute;
    background: white;
    margin: 0;
    padding: 5px 10px;
    left: 34.5px;
    bottom: -20px;
    text-align: center;
    letter-spacing: 3px;
`;

const Description = styled.p`
    color: gray;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;

    padding: 3rem 2rem 0rem;
`;

function TitleSlide({ goNext }) {
    return (
        <Container>
            <Subtitle>팀플 성격 유형 분석으로 알아보는 </Subtitle>
            <Title>당신에게 어울리는</Title>
            <LogoWrapper>
            <Logo>
                <LogoText>WITHUS</LogoText>
                <LogoSubtext>COMPUTER</LogoSubtext>
            </Logo>
            </LogoWrapper>
            <div className="animate__animated animate__heartBeat animate__delay-1s animate__repeat-2">
            </div>

            <ButtonWrapper>
                <Button onClick={goNext}>시작하기</Button>
            </ButtonWrapper>

            <Description>AWS 게섯거라 팀이 <br/> AINIZE CDP 프로그램의 지원으로 만들었어요</Description>
        </Container>
    )
}

export default TitleSlide;
