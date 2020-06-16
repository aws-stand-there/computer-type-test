import React from 'react';
import styled from 'styled-components';
import Container from './styles/Container';
import Button from './styles/Button';

const Title = styled.p`
    margin: 0;
    padding: 8rem 4rem 0rem;
    
    text-align: left;

    font-size: 2rem;
`;

const ResultText = styled.p`
    font-size: 3rem;
    font-weight: 600;
`;

const TipText = styled.p`
    color: gray;
    font-size: 1rem;
`;

const Image = styled.img`
    position: absolute;
    top: 50px;
    opacity: 0.1;
    user-select: none;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;

    padding: 3rem;
`;

function ResultSlide() {
    return (
    <Container>
        <Title>당신은...</Title>

        <ResultText>아싸</ResultText>
        
        <Image draggable="false" src="https://optimal.inven.co.kr/upload/2018/12/19/bbs/i16141270083.jpg" />

        <TipText>100명 중 100명이 이 유형에 속합니다</TipText>

        <ButtonWrapper>
            <Button>공유하기</Button>
        </ButtonWrapper>
    </Container>
    )
}

export default ResultSlide;