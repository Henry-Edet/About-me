import React from 'react';
// import ReactDOM from 'react-dom/client';
import  ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Headers from './Headers';
import Htags from './Htags';
import Unordereds from './Unordereds';
import Foot from './Foot';
import reportWebVitals from './reportWebVitals';






// let Sayhi = ()=> {
//   return <p>welcome Henry</p>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const makeNew = document.getElementById("root");
// const subRoot = ReactDOM.createRoot(makeNew)
// subRoot.render(
//   <Sayhi/>
// );

// testing
// const h1 = document.createElement("h1")
// h1.textContent = "Henry do not give up, you'll get it"
// h1.className = "header"
// document.getElementById("root").append(h1)

// const navbar = (
//   <nav>
//     <h1 className='header'>Edcorp</h1>
//     <ul className='listing'>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   navbar
// )

// const page = (
//   <div>
//     <h1>Hello World</h1>
//     <p>Welcome to Edcorp</p>
//     <img src= "./logo512.png" width="40%" height="40%"/>
//     <footer>
//       <p>Edcorp © 2021</p>
//     </footer>
//   </div>
// )
// ReactDOM.render(page, document.getElementById("root"))

// const Newpage = ()=> {
//   return (
//     <div>
//       <Headers/>
//       <div>
//         <Htags />
//         <Unordereds/>
//       </div>

//       <Foot/>
//     </div>
//   )
// }

// ReactDOM.render(<Newpage/>, document.getElementById("root"))

// Business card test

const Businesscard = ()=> {
  return (
    <div className='start'>
      <div className='maindiv'>
        <div className='div1'>
          <img src="./tx4buo.jpg" width="70px" className='image'/>
        </div>
        <div className='namesection'>
          <h1 id='henry'>
            Henry Edet
          </h1>
          <h4 id='jobtype'>Full Stack Engineer <i>MERP</i></h4>
          <email>skole.com</email>
          <div className='btndiv'>
            <button id='emailbtn'>
              <i className='fa-solid fa-envelope fa-2xs'></i>
              <p className='mail'>Email</p>
            </button>
            <button id='linkedbtn'>
              <i className='fa-brands fa-linkedin fa-2xs'></i>
              <p className='linked'>LinkedIn</p>
            </button>
          </div>
          <div id='bio'>
            <p className='abb'>About</p>
            <p className='smwrite'>
            I am a frontend developer with a particular interest in making things simple
            and automating daily tasks. I try to keep up with security and best practices, 
            and am always looking for new things to learn.
            </p>
            <p className='int'>Interests</p>
            <p className='whatever'>Food expert. Music scholar. Reader. Internet fanatic.
              Bacon buff. Entrepreneur. Travel geek. 
              Pop culture ninja. Coffee fanatic.</p>
          </div>
        </div>
        <div className='foot'>
          <img src='./icons8-twitter-48.png' width="30px" id='twit'/>
          <img src='./icons8-facebook-48.png' width="30px" id="face"/>
          <img src='./icons8-instagram-48.png' width="30px" id="ig"/>
          <img src='./icons8-github-48.png' width="30px" id='git'/>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<Businesscard/>, document.getElementById("root"));

reportWebVitals();
