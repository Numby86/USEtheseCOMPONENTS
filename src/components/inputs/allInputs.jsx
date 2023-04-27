import InputAnimated from "./InputAnimated/InputAnimated";
import InputTransition from "./InputTransition/InputTransition";
import InputDiagonally from "./InputDiagonally/InputDiagonally";
import InputAqua from "./InputAqua/InputAqua";
import InputBandW from "./InputBandW/InputBandW";
import InputPurple from "./InputPurple/InputPurple";
import InputGoogle from "./InputGoogle/InputGoogle";
import InputClassic from "./InputClassic/InputClassic";
import InputGrey from "./InputGrey/InputGrey";
import InputLines from "./InputLines/InputLines";
import InputColors from "./InputColors/InputColors";
import InputSearch from "./InputSearch/InputSearch";
import InputRed from "./InputRed/InputRed";
import InputValidate from "./InputValidate/InputValidate";
import InputTriple from "./InputTriple/InputTriple";
import InputMatrix from "./InputMatrix/InputMatrix";
import InputRainbow from "./InputRainbow/InputRainbow";
import InputCyber from "./InputCyber/InputCyber";
import InputBlue from "./InputBlue/InputBlue";
import InputYellow from "./InputYellow/InputYellow";

export const allInputs = [
  {
    id: 1,
    component: <InputAnimated />,
    name: "Animated",
    html: `<div class="form__group field">
        <input type="input" class="form__field" placeholder="Name" required="">
        <label for="name" class="form__label">Name</label>
    </div>`,
    scss: `.form__group {
            position: relative;
            padding: 20px 0 0;
            width: 100%;
            max-width: 180px;
          }
          
          .form__field {
            font-family: inherit;
            width: 100%;
            border: none;
            border-bottom: 2px solid #9b9b9b;
            outline: 0;
            font-size: 17px;
            color: #fff;
            padding: 7px 0;
            background: transparent;
            transition: border-color 0.2s;
          }
          
          .form__field::placeholder {
            color: transparent;
          }
          
          .form__field:placeholder-shown ~ .form__label {
            font-size: 17px;
            cursor: text;
            top: 20px;
          }
          
          .form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 17px;
            color: #9b9b9b;
            pointer-events: none;
          }
          
          .form__field:focus {
            padding-bottom: 6px;
            font-weight: 700;
            border-width: 3px;
            border-image: linear-gradient(to right, #116399, #38caef);
            border-image-slice: 1;
          }
          
          .form__field:focus ~ .form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 17px;
            color: #38caef;
            font-weight: 700;
          }
          
          /* reset input */
          .form__field:required, .form__field:invalid {
            box-shadow: none;
          }`,
  },
  {
    id: 2,
    component: <InputDiagonally />,
    name: "Diagonally",
    html: `<div class="input__container">
        <div class="shadow__input"></div>
        <button class="input__button__shadow">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px">
            <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fill-rule="evenodd" fill="#17202A"></path>
          </svg>
        </button>
        <input type="text" name="text" class="input__search" placeholder="What do you want to search?" />
      </div>`,
    scss: `.input__container {
            position: relative;
            background: rgba(255, 255, 255, 0.664);
            padding: 10px 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            border-radius: 22px;
            max-width: 300px;
            transition: transform 400ms;
            transform-style: preserve-3d;
            transform: rotateX(15deg) rotateY(-20deg);
            perspective: 500px;
          }
          
          .shadow__input {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            bottom: 0;
            z-index: -1;
            filter: blur(30px);
            border-radius: 20px;
            background-color: #999cff;
            background-image: radial-gradient(at 85% 51%, hsla(60,60%,61%,1) 0px, transparent 50%),
              radial-gradient(at 74% 68%, hsla(235,69%,77%,1) 0px, transparent 50%),
              radial-gradient(at 64% 79%, hsla(284,72%,73%,1) 0px, transparent 50%),
              radial-gradient(at 75% 16%, hsla(283,60%,72%,1) 0px, transparent 50%),
              radial-gradient(at 90% 65%, hsla(153,70%,64%,1) 0px, transparent 50%),
              radial-gradient(at 91% 83%, hsla(283,74%,69%,1) 0px, transparent 50%),
              radial-gradient(at 72% 91%, hsla(213,75%,75%,1) 0px, transparent 50%);
          }
          
          .input__button__shadow {
            cursor: pointer;
            border: none;
            background: none;
            transition: transform 400ms, background 400ms;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
            padding: 5px;
          }
          
          .input__button__shadow:hover {
            background: rgba(255, 255, 255, 0.411);
          }
          
          .input__search {
            width: 100%;
            border-radius: 20px;
            outline: none;
            border: none;
            padding: 8px;
            position: relative;
          }`,
  },
  {
    id: 3,
    component: <InputTransition />,
    name: "Transition",
    html: `<div class="form">
        <input class="input" placeholder="Type your text" required="" type="text" />
        <span class="input-border"></span>
      </div>`,
    scss: `.form {
            --width-of-input: 200px;
            --border-height: 1px;
            --border-before-color: rgba(221, 221, 221, 0.39);
            --border-after-color: #5891ff;
            --input-hovered-color: #4985e01f;
            position: relative;
            width: var(--width-of-input);
           }
           /* styling of Input */
           .input {
            color: #fff;
            font-size: 0.9rem;
            background-color: transparent;
            width: 100%;
            box-sizing: border-box;
            padding-inline: 0.5em;
            padding-block: 0.7em;
            border: none;
            border-bottom: var(--border-height) solid var(--border-before-color);
           }
           /* styling of animated border */
           .input-border {
            position: absolute;
            background: var(--border-after-color);
            width: 0%;
            height: 2px;
            bottom: 0;
            left: 0;
            transition: 0.3s;
           }
           /* Hover on Input */
           input:hover {
            background: var(--input-hovered-color);
           }
           
           input:focus {
            outline: none;
           }
           /* here is code of animated border */
           input:focus ~ .input-border {
            width: 100%;
           }
           /* === if you want to do animated border on typing === */
           /* remove input:focus code and uncomment below code */
           /* input:valid ~ .input-border{
             width: 100%;
           } */`,
  },
  {
    id: 4,
    component: <InputAqua />,
    name: "Aqua",
    html: `<div class="inputbox">
        <input required="required" type="text">
        <span>Username</span>
        <i></i>
    </div>`,
    scss: `.inputbox {
          position: relative;
          width: 196px;
        }
        
        .inputbox input {
          position: relative;
          width: 100%;
          padding: 20px 10px 10px;
          background: transparent;
          outline: none;
          box-shadow: none;
          border: none;
          color: #23242a;
          font-size: 1em;
          letter-spacing: 0.05em;
          transition: 0.5s;
          z-index: 10;
        }
        
        .inputbox span {
          position: absolute;
          top: 0;
          left: 0;
          padding: 20px 10px 10px;
          font-size: 1em;
          color: #8f8f8f;
          letter-spacing: 00.05em;
          transition: 0.5s;
          pointer-events: none;
        }
        
        .inputbox input:valid ~span,
        .inputbox input:focus ~span {
          color: #45f3ff;
          transform: translateX(-10px) translateY(-34px);
          font-size: 0,75em;
        }
        
        .inputbox i {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: #45f3ff;
          border-radius: 4px;
          transition: 0.5s;
          pointer-events: none;
          z-index: 9;
        }
        
        .inputbox input:valid ~i,
        .inputbox input:focus ~i {
          height: 44px;
        }`,
  },
  {
    id: 5,
    component: <InputBandW />,
    name: "BandW",
    html: `<div class="input-container">
        <input class="input" name="text" type="text">
        <label class="label" for="input">Enter Your Name</label>
        <div class="topline"></div>
        <div class="underline"></div>
        </div>`,
    scss: `.input-container {
          position: relative;
        }
        
        .input {
          padding: 10px;
          height: 40px;
          border: 2px solid #0B2447;
          border-top: none;
          border-bottom: none;
          font-size: 16px;
          background: transparent;
          outline: none;
          box-shadow: 7px 7px 0px 0px #0B2447;
          transition: all 0.5s;
        }
        
        .input:focus {
          box-shadow: none;
          transition: all 0.5s;
        }
        
        .label {
          position: absolute;
          top: 10px;
          left: 10px;
          color: #0B2447;
          transition: all 0.5s;
          transform: scale(0);
          z-index: -1;
        }
        
        .input-container .topline {
          position: absolute;
          content: "";
          background-color: #0B2447;
          width: 0%;
          height: 2px;
          right: 0;
          top: 0;
          transition: all 0.5s;
        }
        
        .input-container input[type="text"]:focus ~ .topline {
          width: 27%;
          transition: all 0.5s;
        }
        
        .input-container .underline {
          position: absolute;
          content: "";
          background-color: #0B2447;
          width: 0%;
          height: 2px;
          right: 0;
          bottom: 0;
          transition: all 0.5s;
        }
        
        .input-container input[type="text"]:focus ~ .underline {
          width: 100%;
          transition: all 0.5s;
        }
        
        .input-container input[type="text"]:focus ~ .label {
          top: -10px;
          transform: scale(1);
          transition: all 0.5s;
        }`,
  },
  {
    id: 6,
    component: <InputPurple />,
    name: "Purple",
    html: `
        <input type="text" name="text" class="input" placeholder="Type something here....">`,
    scss: `.input {
          color: #8707ff;
          border: 2px solid #8707ff;
          border-radius: 10px;
          padding: 10px 25px;
          background: transparent;
          max-width: 190px;
         }
         
         .input:focus {
          box-shadow: 2px 2px 15px #8707ff inset;
         }`,
  },
  {
    id: 7,
    component: <InputGoogle />,
    name: "Google",
    html: `<div class="searchbar">
        <div class="searchbar-wrapper">
            <div class="searchbar-left">
                <div class="search-icon-wrapper">
                    <span class="search-icon searchbar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                            </path>
                        </svg>
                    </span>
                </div>
            </div>
    
            <div class="searchbar-center">
                <div class="searchbar-input-spacer"></div>
    
                <input type="text" class="searchbar-input" maxlength="2048" name="q" autocapitalize="off" autocomplete="off" title="Search" role="combobox" placeholder="Search Google">
            </div>
    
            <div class="searchbar-right">
                <svg class="voice-search" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z">
                    </path>
                    <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                    <path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z">
                    </path>
                    <path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z">
                    </path>
                </svg>
            </div>
        </div>
    </div>`,
    scss: `.searchbar {
          font-size: 14px;
          font-family: arial, sans-serif;
          color: #202124;
          display: flex;
          z-index: 3;
          height: 44px;
          background: white;
          border: 1px solid #dfe1e5;
          box-shadow: none;
          border-radius: 24px;
          margin: 0 auto;
          width: auto;
          max-width: 224px;
        }
        
        .searchbar:hover {
          box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
          border-color: rgba(223,225,229,0);
        }
        
        .searchbar-wrapper {
          flex: 1;
          display: flex;
          padding: 5px 8px 0 14px;
        }
        
        .searchbar-left {
          font-size: 14px;
          font-family: arial, sans-serif;
          color: #202124;
          display: flex;
          align-items: center;
          padding-right: 13px;
          margin-top: -5px;
        }
        
        .search-icon-wrapper {
          margin: auto;
        }
        
        .search-icon {
          margin-top: 3px;
          color: #9aa0a6;
          height: 20px;
          line-height: 20px;
          width: 20px;
        }
        
        .searchbar-icon {
          display: inline-block;
          fill: currentColor;
          height: 24px;
          line-height: 24px;
          position: relative;
          width: 24px;
        }
        
        .searchbar-center {
          display: flex;
          flex: 1;
          flex-wrap: wrap;
        }
        
        .searchbar-input-spacer {
          color: transparent;
          flex: 100%;
          white-space: pre;
          height: 34px;
          font-size: 16px;
        }
        
        .searchbar-input {
          background-color: transparent;
          border: none;
          margin: 0;
          padding: 0;
          color: rgba(0, 0, 0, .87);
          word-wrap: break-word;
          outline: none;
          display: flex;
          flex: 100%;
          margin-top: -37px;
          height: 34px;
          font-size: 16px;
          max-width: 100%;
          width: 100%;
        }
        
        .searchbar-right {
          display: flex;
          flex: 0 0 auto;
          margin-top: -5px;
          align-items: stretch;
          flex-direction: row
        }
        
        .searchbar-clear-icon {
          margin-right: 12px
        }
        
        .voice-search {
          flex: 1 0 auto;
          display: flex;
          cursor: pointer;
          align-items: center;
          border: 0;
          background: transparent;
          outline: none;
          padding: 0 8px;
          width: 2.8em;
        }`,
  },
  {
    id: 8,
    component: <InputClassic />,
    name: "Classic",
    html: `
        <input type="text" name="text" class="input" placeholder="Type your text">`,
    scss: `.input {
          background-color: #505050;
          border: 1px solid none;
          border-top-width: 0.7em;
          margin: 0;
          padding: 0;
          color: #505050;
          word-wrap: break-word;
          outline: 7px solid #505050;
          height: 30px;
          font-size: 17px;
          text-align: center;
          transition: all 1s;
          max-width: 190px;
          font-weight: bold;
          font-family: 'Courier New', Courier, monospace;
         }
         
         .input:hover {
          border-top-width: 0.2em;
          background-color: #f1e8e8;
         }
         
         .input:focus {
          border-top-width: 0.2em;
          background-color: #f1e8e8;
         }`,
  },
  {
    id: 9,
    component: <InputGrey />,
    name: "Grey",
    html: `
        <input type="text" name="text" class="input" placeholder="Type here...">`,
    scss: `.input {
          border: none;
          padding: 1rem;
          border-radius: 1rem;
          background: #e8e8e8;
          box-shadow: 20px 20px 60px #c5c5c5,
             -20px -20px 60px #ffffff;
          transition: 0.3s;
         }
         
         .input:focus {
          outline-color: #e8e8e8;
          background: #e8e8e8;
          box-shadow: inset 20px 20px 60px #c5c5c5,
             inset -20px -20px 60px #ffffff;
          transition: 0.3s;
         }`,
  },
  {
    id: 10,
    component: <InputLines />,
    name: "Lines",
    html: `<div class="input-container">
        <input class="ipt" required="" id="input" type="text">
        <label class="label" for="input">Enter Text</label>
        <div class="underline"></div>
        <div class="sideline"></div>
        <div class="upperline"></div>
        <div class="line"></div>
    </div>`,
    scss: `/* use it in dark theme */
        .inputContainer {
            position: relative;
            margin: 50px auto;
            width: 190px;
          }
          
          .inputContainer .ipt {
            font-size: 20px;
            color: rgb(255, 255, 255);
            border: none;
            border-bottom: 2px solid #a5a2a2;
            outline: none;
            width: 100%;
            background-color: transparent;
          }
          
          .label {
            transition: all 0.3s ease;
            color: #d3d2d2;
            position: absolute;
            top: 0;
            left: 0;
            pointer-events: none;
          }
          
          .inputContainer .ipt:focus ~ .label 
                   {
            top: -20px;
            transition: 0.3s;
            color: rgb(172, 46, 172);
          }
          
          .inputContainer .underline {
            position: absolute;
            bottom: 4px;
            left: -7px;
            height: 2px;
            width: 110%;
            background-color: rgb(172, 46, 172);
            transform: scaleX(0);
          }
          
          .inputContainer .sideline {
            position: relative;
            bottom: 15px;
            right: 18px;
            height: 2px;
            width: 18%;
            background-color: rgb(172, 46, 172);
            transform: scaleX(0);
            rotate: 90deg;
          }
          
          .inputContainer .upperline {
            position: absolute;
            bottom: 30px;
            left: -8px;
            height: 2px;
            width: 110%;
            background-color: rgb(172, 46, 172);
            transform: scaleX(0);
          }
          
          .inputContainer .line {
            position: relative;
            bottom: 17px;
            left: 178px;
            height: 2px;
            width: 18%;
            background-color: rgb(172, 46, 172);
            transform: scaleX(0);
            rotate: 90deg;
          }
          
          .inputContainer .ipt:focus ~ .underline  {
            transform: scaleX(1);
            transition: 1s;
          }
          
          .inputContainer .ipt:focus ~ .sideline  {
            transform: scaleX(1);
            transition: 1s;
          }
          
          .inputContainer .ipt:focus ~ .upperline  {
            transform: scaleX(1);
            transition: 1s;
          }
          
          .inputContainer .ipt:focus ~ .line  {
            transform: scaleX(1);
            transition: 1s;
          }`,
  },
  {
    id: 11,
    component: <InputColors />,
    name: "Colors",
    html: `<input type="text" autocomplete="off" placeholder="Type your text" name="text" class="inputColors">`,
    scss: `.inputColors {
          /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
          /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
         /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          background-repeat: no-repeat;
          border-radius: 89% 29% 90% 23% / 0% 100% 0% 100%;
          border-color: whitesmoke;
          width: 200px;
          max-height: 50px;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-weight: 500;
          font-family: inherit;
          box-shadow: 23px 23px 46px #bebebe,
                     -23px -23px 46px #bebebe;
        }
      
        .inputColors:focus {
          background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
          background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
          border-color: black;
        }
      
        .inputColors:hover {
          background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
          background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
        }
      
        .inputColors::placeholder {
          color: white;
        }`,
  },
  {
    id: 12,
    component: <InputSearch />,
    name: "Search",
    html: `<div class="input__container">
        <label class="input__label">Username</label>
        <input placeholder="Enter your username" class="input" name="text" type="text">
        <p class="input__description">What do you want to call yourself?</p>
      </div>`,
    scss: `.input__container {
          max-width: 200px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: rgba(255, 255, 255, 0.3);
          padding: 15px;
          border-radius: 20px;
          position: relative;
        }
        
        .input__container::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: -1;
          filter: blur(25px);
          border-radius: 20px;
          background-color: #e499ff;
          background-image: radial-gradient(at 47% 69%, hsla(17,62%,65%,1) 0px, transparent 50%),
        radial-gradient(at 9% 32%, hsla(222,75%,60%,1) 0px, transparent 50%);
        }
        
        .input__label {
          display: block;
          margin-left: 0.4em;
          color: #000;
          text-transform: uppercase;
          font-size: 0.9em;
          font-weight: bold;
        }
        
        .input__description {
          font-size: 0.6em;
          font-weight: bold;
          text-align: center;
          color: rgba(0, 0, 0, 0.5);
        }
        
        .input {
          border: none;
          outline: none;
          width: 90%;
          padding: 0.6em;
          border-radius: 20px;
          background: #fff;
          transition: background 300ms, color 300ms;
        }
        
        .input:hover,.input:focus {
          background: rgb(0, 0, 0);
          color: #fff;
        }`,
  },
  {
    id: 13,
    component: <InputRed />,
    name: "Red",
    html: `<input placeholder="Type here" class="input" name="text" type="text">`,
    scss: `.input {
          max-width: 190px;
          height: 30px;
          border: 2px solid transparent;
          outline: none;
          border-bottom: 2px solid #3f3f3f;
          caret-color: #3f3f3f;
          background-color: #212121;
          padding: 5px;
          transition: .5s linear;
          font-family: monospace;
          letter-spacing: 1px;
        }
        
        .input:focus {
          border: 2px solid #fa4753;
          caret-color: #fa4753;
          color: #fa4753;
          box-shadow: 4px 4px 10px #070707;
        }
        
        .input:focus::placeholder {
          color: #fa4753;
        }`,
  },
  {
    id: 14,
    component: <InputValidate />,
    name: "Validate",
    html: `<div class="containerInput">
        <input placeholder="Type for validate" type="text">
    </div>`,
    scss: `.containerInput {
          background-color: #000;
          position: relative;
          overflow: hidden;
          margin: 0;
          padding: 0 0 4px 0;
          z-index: 1;
          font-size: 15px;
        }
        
        .containerInput::before {
          content: '';
          width: 110%;
          aspect-ratio: 1;
          position: absolute;
          inset: 0 0 0 0;
          margin: auto;
          animation: rotate6234 2.5s ease-in-out infinite;
          z-index: -1;
          background-image: conic-gradient(from 0deg at 50% 50%, #073AFF00 0%, #FF0000FF 25%, #073AFF00 25%);
        }
        
        .containerInput > input {
          width: 210px;
          height: 50px;
          font-size: inherit;
          color: #fff;
          border: none;
          padding: 12px;
          background-color: #0a0a0a;
          outline: 5px solid #0a0a0a;
        }
        
        .containerInput > input:focus {
          outline: none;
        }
        
        .containerInput > input:not(:placeholder-shown) {
          outline: none;
        }
        
        .containerInput > input:not(:placeholder-shown):valid {
          outline: 4px solid rgb(0, 255, 183);
          border-radius: 0;
        }
        
        @keyframes rotate6234 {
          from {
            transform: rotate(0deg);
          }
        
          to {
            transform: rotate(360deg);
          }
        }`,
  },
  {
    id: 15,
    component: <InputTriple />,
    name: "Triple",
    html: `<div className="container">
        <input type="text" name="text" className="input" />
        <input type="text" name="text" className="input" />
        <input type="text" name="text" className="input" />
    </div>`,
    scss: `.container{
          display: flex;
      }
      
      .input {
          max-width: 190px;
          width: 40px;
          height: 40px;
          outline: none;
          margin: 5px;
          transition: .5s;
          border: none;
          border-radius: 10px;
          padding: 10px;
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          transform: rotate(90deg);
        }
      
        input:hover {
          background-color: whitesmoke;
        }
        
        input:focus {
          background-color: whitesmoke;
          width: 150px;
          transform: rotate(0);
        }`,
  },
  {
    id: 16,
    component: <InputMatrix />,
    name: "Matrix",
    html: `<input class="input" placeholder="Search The Matrix">`,
    scss: `.input {
          display: inline-block;
          max-width: 216px;
          -webkit-box-sizing: content-box;
          -moz-box-sizing: content-box;
          box-sizing: content-box;
          padding: 10px 20px;
          border: 5px solid #1fbc00;
          -webkit-border-radius: 11px;
          border-radius: 11px;
          font: normal 19px/normal "Courier New", Courier, monospace;
          color: rgba(42,255,0,1);
          -o-text-overflow: clip;
          text-overflow: clip;
          background: rgba(45,45,45,1);
          box-shadow: 0 0 9px 4px rgba(0,0,0,0.15) , -1px 4px 8px -1px rgba(0,0,0,0.49) inset;
          text-shadow: 1px 1px 0 rgba(255,255,255,0.66);
          transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
          -webkit-transform: rotateX(-16.62deg) rotateY(-28.64788975654116deg);
          transform: rotateX(-16.62deg) rotateY(-28.64788975654116deg);
        }
        
        .input:hover {
          -webkit-transform: rotateX(-15.62deg) rotateY(-23.65deg);
          transform: rotateX(-15.62deg) rotateY(-23.65deg);
          background: rgba(45,45,45,1);
          width: 216px;
        }
        
        .search__icon {
          height: 1.3em;
          width: 1.3em;
          fill: #b4b4b4;
        }
        
        .input:focus {
          outline: none;
          background: rgba(45,45,45,1);
          width: 216px;
        }`,
  },
  {
    id: 17,
    component: <InputRainbow />,
    name: "Rainbow",
    html: `<input placeholder="Enter your text..." class="input" name="text" type="text">`,
    scss: `.input {
          background-color: #212121;
          width: 216px;
          height: 30px;
          padding: 10px;
          border: 2px solid white;
          border-radius: 5px;
        }
        
        .input:focus {
          width: 216px;
          height: 30px;
          color: rgb(0, 255, 255);
          background-color: #212121;
          outline-color: 2px solid rgb(0, 255, 255);
          box-shadow: 0px 0px 15px rgb(0, 255, 255);
          transition: .1s;
          transition-property: box-shadow;
        }
      
        .input:hover{
          background-color: #212121;
        }`,
  },
  {
    id: 18,
    component: <InputCyber />,
    name: "Cyber",
    html: `<form action="" className="containerCyber">
        <div className="input-containerCyber">
            <div className="input-contentCyber">
                <div className="input-distCyber">
                    <div className="input-typeCyber">
                        <input placeholder="User" required="" type="text" className="input-isCyber" />  
                        <input placeholder="Password" required="" type="password" className="input-isCyber" />  
                    </div>
                </div>
            </div>
        </div>
      </form>`,
    scss: `.containerCyber {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-style: italic;
          font-weight: bold;
          display: flex;
          margin: auto;
          aspect-ratio: 16/9;
          align-items: center;
          justify-items: center;
          justify-content: center;
          flex-wrap: wrap;
          flex-direction: column;
          gap: 1em;
        }
        
        .input-containerCyber {
          filter: drop-shadow(46px 36px 24px #4090b5) drop-shadow(-55px -40px 25px #9e30a9);
          animation: blinkShadowsFilter 8s ease-in infinite;
        }
        
        .input-contentCyber {
          display: grid;
          align-content: center;
          justify-items: center;
          align-items: center;
          text-align: center;
          padding-inline: 1em;
        }
        
        .input-contentCyber::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          filter: blur(40px);
          -webkit-clip-path: polygon(26% 0, 66% 0, 92% 0, 100% 8%, 100% 89%, 91% 100%, 7% 100%, 0 92%, 0 0);
          clip-path: polygon(26% 0, 66% 0, 92% 0, 100% 8%, 100% 89%, 91% 100%, 7% 100%, 0 92%, 0 0);
          background: rgba(122, 251, 255, 0.5568627451);
          transition: all 1s ease-in-out;
        }
        
        .input-contentCyber::after {
          content: "";
          position: absolute;
          width: 98%;
          height: 98%;
          box-shadow: inset 0px 0px 20px 20px #212121;
          background: repeating-linear-gradient(to bottom, transparent 0%, rgba(64, 144, 181, 0.6) 1px, rgb(0, 0, 0) 3px, hsl(295, 60%, 12%) 5px, #153544 4px, transparent 0.5%), repeating-linear-gradient(to left, hsl(295, 60%, 12%) 100%, hsla(295, 60%, 12%, 0.99) 100%);
          -webkit-clip-path: polygon(26% 0, 31% 5%, 61% 5%, 66% 0, 92% 0, 100% 8%, 100% 89%, 91% 100%, 7% 100%, 0 92%, 0 0);
          clip-path: polygon(26% 0, 31% 5%, 61% 5%, 66% 0, 92% 0, 100% 8%, 100% 89%, 91% 100%, 7% 100%, 0 92%, 0 0);
          animation: backglitch 50ms linear infinite;
        }
        
        .input-distCyber {
          z-index: 80;
          display: grid;
          align-items: center;
          text-align: center;
          width: 100%;
          padding-inline: 1em;
          padding-block: 1.2em;
          grid-template-columns: 1fr;
        }
        
        .input-typeCyber {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          gap: 1em;
          font-size: 1.1rem;
          background-color: transparent;
          width: 100%;
          border: none;
        }
        
        .input-isCyber {
          color: #fff;
          font-size: 0.9rem;
          background-color: transparent;
          width: 100%;
          box-sizing: border-box;
          padding-inline: 0.5em;
          padding-block: 0.7em;
          border: none;
          transition: all 1s ease-in-out;
          border-bottom: 1px solid hsl(221, 26%, 43%);
        }
        
        .input-isCyber:hover {
          transition: all 1s ease-in-out;
          background: linear-gradient(90deg, transparent 0%, rgba(102, 224, 255, 0.2) 27%, rgba(102, 224, 255, 0.2) 63%, transparent 100%);
        }
        
        .input-contentCyber:focus-within::before {
          transition: all 1s ease-in-out;
          background: hsla(0, 0%, 100%, 0.814);
        }
        
        .input-isCyber:focus {
          outline: none;
          border-bottom: 1px solid hsl(192, 100%, 100%);
          color: hsl(192, 100%, 88%);
          background: linear-gradient(90deg, transparent 0%, rgba(102, 224, 255, 0.2) 27%, rgba(102, 224, 255, 0.2) 63%, transparent 100%);
        }
        
        .input-isCyber::-moz-placeholder {
          color: hsla(192, 100%, 88%, 0.806);
        }
        
        .input-isCyber::placeholder {
          color: hsla(192, 100%, 88%, 0.806);
        }
        
        @keyframes backglitch {
          0% {
            box-shadow: inset 0px 20px 20px 30px #212121;
          }
        
          50% {
            box-shadow: inset 0px -20px 20px 30px hsl(297, 42%, 10%);
          }
        
          to {
            box-shadow: inset 0px 20px 20px 30px #212121;
          }
        }
        
        @keyframes rotate {
          0% {
            transform: rotate(0deg) translate(-50%, 20%);
          }
        
          50% {
            transform: rotate(180deg) translate(40%, 10%);
          }
        
          to {
            transform: rotate(360deg) translate(-50%, 20%);
          }
        }
        
        @keyframes blinkShadowsFilter {
          0% {
            filter: drop-shadow(46px 36px 28px rgba(64, 144, 181, 0.3411764706)) drop-shadow(-55px -40px 28px #9e30a9);
          }
        
          25% {
            filter: drop-shadow(46px -36px 24px rgba(64, 144, 181, 0.8980392157)) drop-shadow(-55px 40px 24px #9e30a9);
          }
        
          50% {
            filter: drop-shadow(46px 36px 30px rgba(64, 144, 181, 0.8980392157)) drop-shadow(-55px 40px 30px rgba(159, 48, 169, 0.2941176471));
          }
        
          75% {
            filter: drop-shadow(20px -18px 25px rgba(64, 144, 181, 0.8980392157)) drop-shadow(-20px 20px 25px rgba(159, 48, 169, 0.2941176471));
          }
        
          to {
            filter: drop-shadow(46px 36px 28px rgba(64, 144, 181, 0.3411764706)) drop-shadow(-55px -40px 28px #9e30a9);
          }
        }`,
  },
  {
    id: 19,
    component: <InputBlue />,
    name: "Blue",
    html: `<input type="text" name="text" className="input" placeholder="Write a message" />`,
    scss: `.input {
          font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
          font-weight: 500;
          font-size: .8vw;
          color: #fff;
          background-color: rgb(28,28,30);
          box-shadow: 0 0 .4vw rgba(0,0,0,0.5), 0 0 0 .15vw transparent;
          border-radius: 0.4vw;
          border: none;
          outline: none;
          padding: 0.4vw;
          width: 190px;
          transition: .4s;
        }
        
        .input:hover {
          box-shadow: 0 0 0 .15vw rgba(135, 207, 235, 0.186);
          background-color: rgb(28,28,30);
          width: 190px;
        }
        
        .input:focus {
          box-shadow: 0 0 0 .15vw skyblue;
          background-color: rgb(28,28,30);
          width: 190px;
        }`,
  },
  {
    id: 20,
    component: <InputYellow />,
    name: "Yellow",
    html: `<input type="text" placeholder="Write here..." name="text" class="input">`,
    scss: `.input {
          border-radius: 10px;
          outline: 2px solid #FEBF00;
          border: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: #e2e2e2;
          outline-offset: 3px;
          padding: 10px 1rem;
          transition: 0.25s;
        }
        
        .input:focus {
          outline: solid #FEBF00 5px;
          background-color: #fff
        }`,
  },
  // {
  //     id: ,
  //     component: ,
  //     name: '',
  //     html: ``,
  //     scss: ``
  // },
];
