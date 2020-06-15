import React from 'react';
import './App.css';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css'
import QuestionSlide from './components/QuestionSlide';



function App() {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    allowTouchMove: true
  }

  return (
    <div className="app">
      <Swiper {...params}>
        <div>
          <QuestionSlide />
        </div>
        <div>
          <QuestionSlide />
        </div>
        <div>
          <QuestionSlide />
        </div>
      </Swiper>
    </div>
  );
}

export default App;
