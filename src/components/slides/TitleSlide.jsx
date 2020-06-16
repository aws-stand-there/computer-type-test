import React from 'react';
import styled from 'styled-components';
import Container from './styles/Container';
import Button from './styles/Button';

const Title = styled.h1`
    margin: 0;
    padding: 8rem 4rem 0rem;

    font-size: 3rem;
`;

const Subtitle = styled.h2`
    margin: 0;
    padding: 0rem 2rem 2rem;

    font-weight: 100;
    font-style: italic;
`;

const Image = styled.img`
    width: 200px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;

    padding: 3rem 2rem 0rem;
`;

function TitleSlide({ goNext }) {
    return (
        <Container>
            <Title>아싸 테스트</Title>
            <div className="animate__animated animate__heartBeat animate__delay-1s animate__repeat-2">
            <Subtitle>인싸들은 다 한다던데 ㄷㄷ;</Subtitle>
            </div>

            <ButtonWrapper>
                <Button onClick={goNext}>시작하기</Button>
            </ButtonWrapper>

            <Image src="https://item.kakaocdn.net/do/44ef66e6647ca59051e85c2c27e7d3aaf43ad912ad8dd55b04db6a64cddaf76d" />
        </Container>
    )
}

export default TitleSlide;