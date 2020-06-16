import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css'
import QuestionSlide from './QuestionSlide';
import firebase from 'firebase';

const Root = styled.div`
    max-width: 544px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: lightgray;
`;

function App() {
  const [swiper, setSwiper] = useState(null);
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = useCallback(async () => {
    const result = await firebase.firestore()
      .collection("questions")
      .orderBy("id")
      .get();

    const questions = result.docs.map(doc => doc.data());
    setQuestions(questions);

    if (swiper) {
      swiper.update();
    }
  }, [swiper]);

  useEffect(() => {
    if (!swiper)
      return;
    
    fetchQuestions();
  }, [fetchQuestions, swiper]);

  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    allowTouchMove: true
  }

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  }

  return (
    <Root>
      <Swiper getSwiper={setSwiper} {...params}>
        {
          questions.map((question, index) => (
            <div>
              <QuestionSlide 
                key={question.id}
                index={index}
                question={question}
                goNext={goNext}
              />
            </div>
          ))
        }
        <div>Hi</div>
      </Swiper>
    </Root>
  );
}

export default App;
