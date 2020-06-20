import React from 'react';
import styled from 'styled-components';
import Container from '../styles/Container';
import Button from '../styles/Button';

const Header = styled.h2`
    margin: 0;
    padding: 4rem 4rem 0;

    text-align: left;
`;

const Title = styled.h3`
    margin: 0;
    padding: 2rem 2rem 0;
    text-align: center;
    word-break: keep-all;
`;

const OptionList = styled.div`
    display: flex;
    flex-direction: column;
    
    padding: 4rem 4rem 2rem;
`;

function QuestionSlide({ index, question, selectOption }) {
    return (
        <Container>
            <Header>{index + 1}.</Header>
            <Title>{question.text}</Title>

            <OptionList>
                {
                    question.options.map((option, idx) => (
                        <Button key={option} onClick={() => selectOption(question.id, idx)}>{option}</Button>
                    ))
                }
            </OptionList>
        </Container>
    )
}

export default QuestionSlide;