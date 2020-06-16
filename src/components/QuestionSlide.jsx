import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width: 100%;
    min-height: 100vh;

    text-align: center;
    font-size: 18px;
    background: #fff;
`;

const Header = styled.h2`
    margin: 0;
    padding: 4rem 4rem 0;

    text-align: left;
`;

const Title = styled.h3`
    margin: 0;
    padding: 2rem 2rem 0;
    text-align: center;
`;

const OptionList = styled.div`
    display: flex;
    flex-direction: column;

    padding: 4rem 4rem 2rem;
`;

const OptionButton = styled.button`
    padding: 1rem;
    margin-bottom: 16px;

    border: 0;
    border-radius: 4px;
    outline: 0;

    font-size: 1.2rem;
    background: #2979ff;
    color: #fff;

    box-shadow: 0px 6px 8px rgba(1, 1, 1, 0.08);

    &:hover {
        background: #fff;
        color: #000;
    }
`;

function QuestionSlide({ index, question, goNext }) {
    return (
        <Container>
            <Header>{index + 1}.</Header>
            <Title>{question.text}</Title>

            <OptionList>
                {
                    question.options.map((option) => (
                        <OptionButton onClick={goNext}>{option}</OptionButton>        
                    ))
                }
            </OptionList>
        </Container>
    )
}

export default QuestionSlide;