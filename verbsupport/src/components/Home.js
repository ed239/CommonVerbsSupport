import React, { useState } from 'react';
import { useEffect } from 'react';
import {ReactComponent as AppleDownload} from './AppleDownload.svg';
import quizImage from '../screenshotsApple/quiz2.png';
import homeImage from '../screenshotsApple/home.png';
import cardHebrewImage from '../screenshotsApple/cardHebrew.png'; 
import cardEnglishImage from '../screenshotsApple/cardEnglish.png';
import verbImage from '../screenshotsApple/verb.png';
import './Home.css';
import whiteGooglePlayImage from './whiteGooglePlay.png';



const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleGooglePlayClick = () => {
    // alert('Coming soon! As early as September!');
    window.open('https://play.google.com/store/apps/details?id=com.verbs.flashcards&pli=1', '_blank')
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
    {windowWidth > 960 ? (
      <div className="App-Container">
        <div className='column'>
          <div className="App-Text">
            <h1>Learn Hebrew:<br></br> Common Verbs</h1>
          </div>
          <div className="Buttons">
              <div className="AppleButton">
                <a href="https://apps.apple.com/kg/app/learn-hebrew-common-verbs/id6497066646" target="_blank" rel="noopener noreferrer">
                  <AppleDownload className="AppleLogo" />
                </a>
              </div>
              <div className="GooglePlayButton" onClick={handleGooglePlayClick}>
               
                  <img src={whiteGooglePlayImage} alt="Google Play" className="whiteGooglePlay" />
           
              </div>
            </div>
        </div>
        <div className="App-Logo">
          <div className="carousel">
              <div className="carousel__item" style={{ '--i': 3 }}><img src={quizImage} alt="Quiz" /></div>
              <div className="carousel__item" style={{ '--i': 0 }}><img src={homeImage} alt="Home" /></div>
              <div className="carousel__item" style={{ '--i': 2 }}><img src={cardHebrewImage} alt="Card Hebrew" /></div>
              <div className="carousel__item" style={{ '--i': 1 }}><img src={cardEnglishImage} alt="Card English" /></div>
              <div className="carousel__item" style={{ '--i': 4 }}><img src={verbImage} alt="Verb" /></div>
            </div>
        </div>
      </div>
    
  ) : (

    <div className="App-ContainerM">
          <div className="App-TextM">
            <h1>Learn Hebrew:<br></br> Common Verbs</h1>
          </div>
          <div className="ButtonsM">
            <div className="AppleButtonM">
              <a href="https://apps.apple.com/kg/app/learn-hebrew-common-verbs/id6497066646" target="_blank" rel="noopener noreferrer">
                <AppleDownload className="AppleLogo" />
              </a>
            </div>
            <div className="GooglePlayButtonM" onClick={handleGooglePlayClick}>
               
                  <img src={whiteGooglePlayImage} alt="Google Play" className="whiteGooglePlayM" />
               
            </div>
          </div>
        
          <div className="carouselM">
              <div className="carousel__itemM" style={{ '--i': 0 }}><img src={quizImage} alt="Quiz" /></div>
              <div className="carousel__itemM" style={{ '--i': 1 }}><img src={homeImage} alt="Home" /></div>
              <div className="carousel__itemM" style={{ '--i': 2 }}><img src={cardHebrewImage} alt="Card Hebrew" /></div>
              <div className="carousel__itemM" style={{ '--i': 3 }}><img src={cardEnglishImage} alt="Card English" /></div>
              <div className="carousel__itemM" style={{ '--i': 4 }}><img src={verbImage} alt="Verb" /></div>
          </div>
    
        </div>
       
      

    )}
    </div>
  );
};

export default Home;
