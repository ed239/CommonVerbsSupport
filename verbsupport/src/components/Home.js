import React, { useState } from 'react';
import { useEffect } from 'react';
import {ReactComponent as AppleDownload} from './AppleDownload.svg';
import quizImage from '../screenshotsApple/quiz2.png';
import homeImage from '../screenshotsApple/home.png';
import cardHebrewImage from '../screenshotsApple/cardHebrew.png'; 
import cardEnglishImage from '../screenshotsApple/cardEnglish.png';
import verbImage from '../screenshotsApple/verb.png';
import quizImageRu from '../screenshotsAppleRu/quiz.png';
import homeImageRu from '../screenshotsAppleRu/home.png';
import cardHebrewImageRu from '../screenshotsAppleRu/cardHebrew.png'; 
import cardRussianImageRu from '../screenshotsAppleRu/cardRussian.png';
import verbImageRu from '../screenshotsAppleRu/verb.png';
import './Home.css';
import whiteGooglePlayImage from './whiteGooglePlay.png';
import { useNavigate, useLocation } from "react-router-dom";



// const Home = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const handleGooglePlayClick = () => {
  //   // alert('Coming soon! As early as September!');
  //   window.open('https://play.google.com/store/apps/details?id=com.verbs.flashcards&pli=1', '_blank')
  // };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);


  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

//   return (
//     <div className="App">
//     {windowWidth > 960 ? (
//       <div className="App-Container">
//         <div className='column'>
//           <div className="App-Text">
//             <h1>Learn Hebrew<br></br> On The Go</h1>
//             <h5>Download now and start learning!</h5>
//           </div>
//           <div className="Buttons">
//               <div className="AppleButton">
//                 <a href="https://apps.apple.com/kg/app/learn-hebrew-common-verbs/id6497066646" target="_blank" rel="noopener noreferrer">
//                   <AppleDownload className="AppleLogo" />
//                 </a>
//               </div>
//               <div className="GooglePlayButton" onClick={handleGooglePlayClick}>
               
//                   <img src={whiteGooglePlayImage} alt="Google Play" className="whiteGooglePlay" />
           
//               </div>
//             </div>
//         </div>
//         <div className="App-Logo">
//           <div className="carousel">
//               <div className="carousel__item" style={{ '--i': 3 }}><img src={quizImage} alt="Quiz" /></div>
//               <div className="carousel__item" style={{ '--i': 0 }}><img src={homeImage} alt="Home" /></div>
//               <div className="carousel__item" style={{ '--i': 2 }}><img src={cardHebrewImage} alt="Card Hebrew" /></div>
//               <div className="carousel__item" style={{ '--i': 1 }}><img src={cardEnglishImage} alt="Card English" /></div>
//               <div className="carousel__item" style={{ '--i': 4 }}><img src={verbImage} alt="Verb" /></div>
//             </div>
//         </div>
//       </div>
    
//   ) : (

//     <div className="App-ContainerM">
//           <div className="App-TextM">
//           <h1>Learn Hebrew<br></br> On The Go</h1>
//           <h5>Download now and start learning!</h5>
//           </div>
//           <div className="ButtonsM">
//             <div className="AppleButtonM">
//               <a href="https://apps.apple.com/kg/app/learn-hebrew-common-verbs/id6497066646" target="_blank" rel="noopener noreferrer">
//                 <AppleDownload className="AppleLogo" />
//               </a>
//             </div>
//             <div className="GooglePlayButtonM" onClick={handleGooglePlayClick}>
               
//                   <img src={whiteGooglePlayImage} alt="Google Play" className="whiteGooglePlayM" />
               
//             </div>
//           </div>
        
//           <div className="carouselM">
//               <div className="carousel__itemM" style={{ '--i': 0 }}><img src={quizImage} alt="Quiz" /></div>
//               <div className="carousel__itemM" style={{ '--i': 1 }}><img src={homeImage} alt="Home" /></div>
//               <div className="carousel__itemM" style={{ '--i': 2 }}><img src={cardHebrewImage} alt="Card Hebrew" /></div>
//               <div className="carousel__itemM" style={{ '--i': 3 }}><img src={cardEnglishImage} alt="Card English" /></div>
//               <div className="carousel__itemM" style={{ '--i': 4 }}><img src={verbImage} alt="Verb" /></div>
//           </div>
    
//         </div>
       
      

//     )}
//     </div>
//   );
// };

// export default Home;
const Home = () => {
  // const [language, setLanguage] = useState('en');

  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState(location.pathname === "/russian" ? "ru" : "en");

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage; // e.g., "ru-RU", "en-US"
    if (!location.pathname.includes("/russian") && userLang.startsWith("ru")) {
      navigate("/russian", { replace: true });
    }
  }, [location, navigate]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    navigate(lang === "ru" ? "/russian" : "/");
  };

  // const handleLanguageChange = (lang) => {
  //   setLanguage(lang);
  // };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const content = {
    en: {
      title1: "Learn Hebrew",
      title2: "On The Go",
      subtitle: "Download now and start learning!",
      appleLink: "https://apps.apple.com/kg/app/learn-hebrew-common-verbs/id6497066646",
      googlePlayLink: "https://play.google.com/store/apps/details?id=com.verbs.flashcards",
      images: [quizImage, homeImage, cardHebrewImage, cardEnglishImage, verbImage]
    },
    ru: {
      title1: "Учите иврит",
      title2: "на ходу",
      subtitle: "Скачайте сейчас и начните учиться!",
      appleLink: "https://apps.apple.com/ro/app/иврит-на-ходу/id6740445636",
      googlePlayLink: "https://play.google.com/store/apps/details?id=com.verbs.flashcards",
      images: [quizImageRu, homeImageRu, cardHebrewImageRu, cardRussianImageRu, verbImageRu]
    }
  };

  return (
    <div className="App">
     
      {windowWidth > 960 ? (
        <div className="App-Container">
          <div className='column'>
          <div className="langButtons">
            <button className="engButton" onClick={() => handleLanguageChange('en')}>English</button>
            <button className="ruButton" onClick={() => handleLanguageChange('ru')}>Русский</button>
          </div>
            <div className="App-Text">
              <h1>{content[language].title1} <br></br>{content[language].title2} </h1>
              <h5>{content[language].subtitle}</h5>
            </div>
            <div className="Buttons">
              <div className="AppleButton">
                <a href={content[language].appleLink} target="_blank" rel="noopener noreferrer">
                  <AppleDownload className="AppleLogo" />
                </a>
              </div>
              <div className="GooglePlayButton" onClick={() => window.open(content[language].googlePlayLink, '_blank')}>
                <img src={whiteGooglePlayImage} alt="Google Play" className="whiteGooglePlay" />
              </div>
            </div>
          </div>
          <div className="App-Logo">
            <div className="carousel">
              {content[language].images.map((img, index) => (
                <div key={index} className="carousel__item" style={{ '--i': index }}>
                  <img src={img} alt={`Carousel item ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="App-ContainerM">
          <div className="App-TextM">
          <div className="langButtonsM">
            <button className="engButton" onClick={() => handleLanguageChange('en')}>English</button>
            <button className="ruButton" onClick={() => handleLanguageChange('ru')}>Русский</button>
          </div>
          
            <h1>{content[language].title1} <br></br>{content[language].title2} </h1>
            <h5>{content[language].subtitle}</h5>
          </div>
          <div className="ButtonsM">
            <div className="AppleButtonM">
              <a href={content[language].appleLink} target="_blank" rel="noopener noreferrer">
                <AppleDownload className="AppleLogo" />
              </a>
            </div>
            <div className="GooglePlayButtonM" onClick={() => window.open(content[language].googlePlayLink, '_blank')}>
              <img src={whiteGooglePlayImage} alt="Google Play" className="whiteGooglePlayM" />
            </div>
          </div>
          <div className="carouselM">
            {content[language].images.map((img, index) => (
              <div key={index} className="carousel__itemM" style={{ '--i': index }}>
                <img src={img} alt={`Carousel item ${index}`} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
