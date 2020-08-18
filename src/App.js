import React from 'react';
import './css/style.css';
import MyButton from './components/MyButton';
import Header from './components/Header';
import BigImg from './components/BigImg';
import img from './imgs/jazz.jpg';
import ArticleHeading from './components/ArticleHeading';


function App() {
  return (
    <div className='App'>
      <Header title='Home page' />
      <main className='site-wrapper'>
        <article className='top-article'>
          <BigImg url={img} />
          <div className='top-article__content'>
            <ArticleHeading title="Welcome" />
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            </p>
            <MyButton title='Book now' />
          </div>

        </article>
      </main>

    </div>
  );
}

export default App;
