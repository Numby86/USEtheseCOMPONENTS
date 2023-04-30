import CheckboxStar from "./CheckboxStar/CheckboxStar";
import CheckboxAnimated from "./CheckboxAnimated/CheckboxAnimated";
import CheckboxWhite from "./CheckboxWhite/CheckboxWhite";
import CheckboxIphone from "./CheckboxIphone/CheckboxIphone";
import CheckboxPadlock from "./CheckboxPadlock/CheckboxPadlock";
import CheckboxHambur from "./CheckboxHambur/CheckboxHambur";
import CheckboxBlur from "./CheckboxBlur/CheckboxBlur";
import CheckboxCyber from "./CheckboxCyber/CheckboxCyber";
import CheckboxYeah from "./CheckboxYeah/CheckboxYeah";
import CheckboxLike from "./CheckboxLike/CheckboxLike";
import CheckboxNeon from "./CheckboxNeon/CheckboxNeon";
import CheckboxGradient from "./CheckboxGradient/CheckboxGradient";
import CheckboxAgree from "./CheckboxAgree/CheckboxAgree";
import CheckboxThumb from "./CheckboxThumb/CheckboxThumb";
import CheckboxEye from "./CheckboxEye/CheckboxEye";
import CheckboxCustom from "./CheckboxCustom/CheckboxCustom";
import CheckboxTurn from "./CheckboxTurn/CheckboxTurn";
import CheckboxSimple from "./CheckboxSimple/CheckboxSimple";
import CheckboxList from "./CheckboxList/CheckboxList";
import CheckboxMore from "./CheckboxMore/CheckboxMore";

export const allCheckboxes = [
  {
    id: 301,
    component: <CheckboxStar />,
    name: "Star",
    html: `<label class="container">
    <input type="checkbox">
    <svg height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path></g></g></svg>
  </label>`,
    scss: `.container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      
      .container {
        display: block;
        position: relative;
        cursor: pointer;
        user-select: none;
      }
      
      .container svg {
        position: relative;
        top: 0;
        left: 0;
        height: 50px;
        width: 50px;
        transition: all 0.3s;
        fill: #666;
      }
      
      .container svg:hover {
        transform: scale(1.1);
      }
      
      .container input:checked ~ svg {
        fill: #ffeb49;
      }
      `,
  },
  {
    id: 302,
    component: <CheckboxWhite />,
    name: "White",
    html: `<div class="content">
    <label class="checkBox">
      <input id="ch1" type="checkbox">
      <div class="transition"></div>
    </label>
  </div>`,
    scss: `.clear {
        clear: both;
      }
      
      .checkBox {
        display: block;
        cursor: pointer;
        width: 30px;
        height: 30px;
        border: 3px solid rgba(255, 255, 255, 0);
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        box-shadow: 0px 0px 0px 2px #fff;
      }
      
      .checkBox div {
        width: 60px;
        height: 60px;
        background-color: #fff;
        top: -52px;
        left: -52px;
        position: absolute;
        transform: rotateZ(45deg);
        z-index: 100;
      }
      
      .checkBox input[type=checkbox]:checked + div {
        left: -10px;
        top: -10px;
      }
      
      .checkBox input[type=checkbox] {
        position: absolute;
        left: 50px;
        visibility: hidden;
      }
      
      .transition {
        transition: 300ms ease;
      }`,
  },
  {
    id: 303,
    component: <CheckboxAnimated />,
    name: "Animated",
    html: `<div className="containerAnimated">
    <input type="checkbox" id="cbx" />
    <label for="cbx" className="checkAnimated">
        <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
        </svg>
    </label>
</div>`,
    scss: `.checkAnimated {
        cursor: pointer;
        position: relative;
        margin: auto;
        width: 18px;
        height: 18px;
        -webkit-tap-highlight-color: transparent;
        transform: translate3d(0, 0, 0);
      }
      
      .checkAnimated:before {
        content: "";
        position: absolute;
        top: -15px;
        left: -15px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: rgba(34,50,84,0.03);
        opacity: 0;
        transition: opacity 0.2s ease;
      }
      
      .checkAnimated svg {
        position: relative;
        z-index: 1;
        fill: none;
        strokeLinecap: round;
        strokeLinejoin: round;
        stroke: #c8ccd4;
        stroke-width: 1.5;
        transform: translate3d(0, 0, 0);
        transition: all 0.2s ease;
      }
      
      .checkAnimated svg path {
        stroke-dasharray: 60;
        stroke-dashoffset: 0;
      }
      
      .checkAnimated svg polyline {
        stroke-dasharray: 22;
        stroke-dashoffset: 66;
      }
      
      .checkAnimated:hover:before {
        opacity: 1;
      }
      
      .checkAnimated:hover svg {
        stroke: #4285f4;
      }
      
      #cbx{
        display: none;
      }
      #cbx:checked + .checkAnimated svg {
        stroke: #4285f4;
      }
      
      #cbx:checked + .checkAnimated svg path {
        stroke-dashoffset: 60;
        transition: all 0.3s linear;
      }
      
      #cbx:checked + .checkAnimated svg polyline {
        stroke-dashoffset: 42;
        transition: all 0.2s linear;
        transition-delay: 0.15s;
      }
    `,
  },
  {
    id: 304,
    component: <CheckboxIphone />,
    name: "Iphone",
    html: `<div class="checkbox-apple">
        <input class="yep" id="check-apple" type="checkbox">
        <label for="check-apple"></label>
      </div>`,
    scss: `.checkbox-apple {
          position: relative;
          width: 50px;
          height: 25px;
          margin: 20px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        .checkbox-apple label {
          position: absolute;
          top: 0;
          left: 0;
          width: 50px;
          height: 25px;
          border-radius: 50px;
          background: linear-gradient(to bottom, #b3b3b3, #e6e6e6);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .checkbox-apple label:after {
          content: '';
          position: absolute;
          top: 1px;
          left: 1px;
          width: 23px;
          height: 23px;
          border-radius: 50%;
          background-color: #fff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .checkbox-apple input[type="checkbox"]:checked + label {
          background: linear-gradient(to bottom, #4cd964, #5de24e);
        }
        
        .checkbox-apple input[type="checkbox"]:checked + label:after {
          transform: translateX(25px);
        }
        
        .checkbox-apple label:hover {
          background: linear-gradient(to bottom, #b3b3b3, #e6e6e6);
        }
        
        .checkbox-apple label:hover:after {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
        
        .yep {
          position: absolute;
          top: 0;
          left: 0;
          width: 50px;
          height: 25px;
        }`,
  },
  {
    id: 305,
    component: <CheckboxPadlock />,
    name: "Padlock",
    html: `<input id="inpLock" type="checkbox">
        <label class="btn-lock" for="inpLock">
            <svg width="36" height="40" viewBox="0 0 36 40">
                <path class="lockb" d="M27 27C27 34.1797 21.1797 40 14 40C6.8203 40 1 34.1797 1 27C1 19.8203 6.8203 14 14 14C21.1797 14 27 19.8203 27 27ZM15.6298 26.5191C16.4544 25.9845 17 25.056 17 24C17 22.3431 15.6569 21 14 21C12.3431 21 11 22.3431 11 24C11 25.056 11.5456 25.9845 12.3702 26.5191L11 32H17L15.6298 26.5191Z"></path>
                <path class="lock" d="M6 21V10C6 5.58172 9.58172 2 14 2V2C18.4183 2 22 5.58172 22 10V21"></path>
                <path class="bling" d="M29 20L31 22"></path>
                <path class="bling" d="M31.5 15H34.5"></path>
                <path class="bling" d="M29 10L31 8"></path>
            </svg>
        </label>`,
    scss: `.btn-lock {
          position: absolute;
          top: calc(50% - 32px);
          left: calc(50% - 32px);
          display: inline-block;
          background: #ff5b5b;
          width: 64px;
          height: 64px;
          box-sizing: border-box;
          padding: 12px 0 0 18px;
          border-radius: 50%;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        
        .btn-lock svg {
          fill: none;
          transform: translate3d(0, 0, 0);
        }
        
        .btn-lock svg .bling {
          stroke: #fff;
          stroke-width: 2.5;
          strokeLinecap: round;
          stroke-dasharray: 3;
          stroke-dashoffset: 15;
          transition: all 0.3s ease;
        }
        
        .btn-lock svg .lock {
          stroke: #fff;
          stroke-width: 4;
          strokeLinejoin: round;
          strokeLinecap: round;
          stroke-dasharray: 36;
          transition: all 0.4s ease;
        }
        
        .btn-lock svg .lockb {
          fill: #fff;
          fill-rule: evenodd;
          clip-rule: evenodd;
          transform: rotate(8deg);
          transform-origin: 14px 20px;
          transition: all 0.2s ease;
        }
        
        #inpLock {
          display: none;
        }
        
        #inpLock:checked + label {
          background: #20cca5;
        }
        
        #inpLock:checked + label svg {
          opacity: 1;
        }
        
        #inpLock:checked + label svg .bling {
          animation: bling6132 0.3s linear forwards;
          animation-delay: 0.2s;
        }
        
        #inpLock:checked + label svg .lock {
          stroke-dasharray: 48;
          animation: locked 0.3s linear forwards;
        }
        
        #inpLock:checked + label svg .lockb {
          transform: rotate(0);
          transform-origin: 14px 22px;
        }
        
        @keyframes bling6132 {
          50% {
            stroke-dasharray: 3;
            stroke-dashoffset: 12;
          }
        
          100% {
            stroke-dasharray: 3;
            stroke-dashoffset: 9;
          }
        }
        
        @keyframes locked {
          50% {
            transform: translateY(1px);
          }
        }
        `,
  },
  {
    id: 306,
    component: <CheckboxHambur />,
    name: "Hamburguer",
    html: `<label class="hamburger">
        <input type="checkbox">
        <svg viewBox="0 0 32 32">
          <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path class="line" d="M7 16 27 16"></path>
        </svg>
      </label>`,
    scss: `.hamburger {
          cursor: pointer;
        }
        
        .hamburger input {
          display: none;
        }
        
        .hamburger svg {
          /* The size of the SVG defines the overall size */
          height: 3em;
          /* Define the transition for transforming the SVG */
          transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .line {
          fill: none;
          stroke: white;
          strokeLinecap: round;
          strokeLinejoin: round;
          stroke-width: 3;
          /* Define the transition for transforming the Stroke */
          transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .line-top-bottom {
          stroke-dasharray: 12 63;
        }
        
        .hamburger input:checked + svg {
          transform: rotate(-45deg);
        }
        
        .hamburger input:checked + svg .line-top-bottom {
          stroke-dasharray: 20 300;
          stroke-dashoffset: -32.42;
        }
        `,
  },
  {
    id: 307,
    component: <CheckboxBlur />,
    name: "Blur",
    html: `<label class="container">
        <input type="checkbox">
        <div class="checkmark"></div>
      </label>`,
    scss: `/* Hide the default checkbox */
        .container input {
         position: absolute;
         opacity: 0;
         cursor: pointer;
         height: 0;
         width: 0;
        }
        
        .container {
         display: block;
         position: relative;
         cursor: pointer;
         font-size: 25px;
         user-select: none;
        }
        
        /* Create a custom checkbox */
        .checkmark {
         position: relative;
         top: 0;
         left: 0;
         height: 1.3em;
         width: 1.3em;
         background: black;
         border-radius: 50px;
         transition: all 0.7s;
         --spread: 20px;
        }
        
        /* When the checkbox is checked, add a blue background */
        .container input:checked ~ .checkmark {
         background: black;
         box-shadow: -10px -10px var(--spread) 0px #5B51D8, 0 -10px var(--spread) 0px #833AB4, 10px -10px var(--spread) 0px #E1306C, 10px 0 var(--spread) 0px #FD1D1D, 10px 10px var(--spread) 0px #F77737, 0 10px var(--spread) 0px #FCAF45, -10px 10px var(--spread) 0px #FFDC80;
        }
        
        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
         content: "";
         position: absolute;
         display: none;
        }
        
        /* Show the checkmark when checked */
        .container input:checked ~ .checkmark:after {
         display: block;
        }
        
        /* Style the checkmark/indicator */
        .container .checkmark:after {
         left: 0.45em;
         top: 0.25em;
         width: 0.25em;
         height: 0.5em;
         border: solid #f0f0f0;
         border-width: 0 0.15em 0.15em 0;
         transform: rotate(45deg);
        }`,
  },
  {
    id: 308,
    component: <CheckboxCyber />,
    name: "Cyber",
    html: `<label class="cyberpunk-checkbox-label">
        <input class="cyberpunk-checkbox" type="checkbox">
        Check me</label>`,
    scss: `.cyberpunk-button {
          background-color: #30cfd0;
          color: #fff;
          font-size: 18px;
          border: none;
          border-radius: 5px;
          padding: 15px 25px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }
        
        .cyberpunk-checkbox {
          appearance: none;
          width: 20px;
          height: 20px;
          border: 2px solid #30cfd0;
          border-radius: 5px;
          background-color: transparent;
          display: inline-block;
          position: relative;
          margin-right: 10px;
          cursor: pointer;
        }
        
        .cyberpunk-checkbox:before {
          content: "";
          background-color: #30cfd0;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          width: 10px;
          height: 10px;
          border-radius: 3px;
          transition: all 0.3s ease-in-out;
        }
        
        .cyberpunk-checkbox:checked:before {
          transform: translate(-50%, -50%) scale(1);
        }
        
        .cyberpunk-checkbox-label {
          font-size: 18px;
          color: #fff;
          cursor: pointer;
          user-select: none;
          display: flex;
          align-items: center;
        }`,
  },
  {
    id: 309,
    component: <CheckboxYeah />,
    name: "Yeah",
    html: `<label class="material-checkbox">
        <input type="checkbox">
        <span class="checkmark"></span>
        Checkbox Label
      </label>`,
    scss: `.material-checkbox {
          display: flex;
          align-items: center;
          font-size: 16px;
          color: #777777;
          cursor: pointer;
        }
        
        .material-checkbox input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }
        
        .checkmark {
          position: relative;
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 12px;
          border: 2px solid #454B00;
          border-radius: 4px;
          transition: all 0.3s;
        }
        
        .material-checkbox input[type="checkbox"]:checked ~ .checkmark {
          background-color: #2F3300;
          border-color: #454B00;
        }
        
        .material-checkbox input[type="checkbox"]:checked ~ .checkmark:after {
          content: "";
          position: absolute;
          top: 2px;
          left: 6px;
          width: 4px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
        
        .material-checkbox input[type="checkbox"]:focus ~ .checkmark {
          box-shadow: 0 0 0 2px #dfec5065;
        }
        
        .material-checkbox:hover input[type="checkbox"] ~ .checkmark {
          border-color: #C3CF34;
        }
        
        .material-checkbox input[type="checkbox"]:disabled ~ .checkmark {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .material-checkbox input[type="checkbox"]:disabled ~ .checkmark:hover {
          border-color: #4d4d4d;
        }
        `,
  },
  {
    id: 310,
    component: <CheckboxLike />,
    name: "Like",
    html: `<div class="con-like">
        <input title="like" type="checkbox" class="like">
        <div class="checkmark">
          <svg viewBox="0 0 24 24" class="outline" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
          </svg>
          <svg viewBox="0 0 24 24" class="filled" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
          </svg>
          <svg class="celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="10,10 20,20" class="poly"></polygon>
            <polygon points="10,50 20,50" class="poly"></polygon>
            <polygon points="20,80 30,70" class="poly"></polygon>
            <polygon points="90,10 80,20" class="poly"></polygon>
            <polygon points="90,50 80,50" class="poly"></polygon>
            <polygon points="80,80 70,70" class="poly"></polygon>
          </svg>
        </div>
      </div>`,
    scss: `.con-like {
          --red: #ee427b;
          position: relative;
          width: 50px;
          height: 50px;
        }
        
        .con-like .like {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 20;
          cursor: pointer;
        }
        
        .con-like .checkmark {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .con-like .outline,
        .con-like .filled {
          fill: var(--red);
          position: absolute;
        }
        
        .con-like .filled {
          animation: kfr-filled 0.5s;
          display: none;
        }
        
        .con-like .celebrate {
          position: absolute;
          animation: kfr-celebrate 0.5s;
          animation-fill-mode: forwards;
          display: none;
        }
        
        .con-like .poly {
          stroke: var(--red);
          fill: var(--red);
        }
        
        .con-like .like:checked ~ .checkmark .filled {
          display: block
        }
        
        .con-like .like:checked ~ .checkmark .celebrate {
          display: block
        }
        
        @keyframes kfr-filled {
          0% {
            opacity: 0;
            transform: scale(0);
          }
        
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        @keyframes kfr-celebrate {
          0% {
            transform: scale(0);
          }
        
          50% {
            opacity: 0.8;
          }
        
          100% {
            transform: scale(1.2);
            opacity: 0;
            display: none;
          }
        }`,
  },
  {
    id: 311,
    component: <CheckboxNeon />,
    name: "Neon",
    html: `<div class="checkbox-wrapper-33">
        <label class="checkbox">
          <input type="checkbox" class="checkbox__trigger visuallyhidden">
          <span class="checkbox__symbol">
            <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 28 28" height="28px" width="28px" class="icon-checkbox" aria-hidden="true">
              <path d="M4 14l8 7L24 7"></path>
            </svg>
          </span>
          <p class="checkbox__textwrapper">Checkbox</p>
        </label>
      </div>`,
    scss: `.checkbox-wrapper-33 {
          --s-xsmall: 0.625em;
          --s-small: 1.2em;
          --border-width: 1px;
          --c-primary: #5F11E8;
          --c-primary-20-percent-opacity: rgb(95 17 232 / 20%);
          --c-primary-10-percent-opacity: rgb(95 17 232 / 10%);
          --t-base: 0.4s;
          --t-fast: 0.2s;
          --e-in: ease-in;
          --e-out: cubic-bezier(.11,.29,.18,.98);
        }
        
        .checkbox-wrapper-33 .visuallyhidden {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }
        
        .checkbox-wrapper-33 .checkbox {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        
        .checkbox-wrapper-33 .checkbox + .checkbox {
          margin-top: var(--s-small);
        }
        
        .checkbox-wrapper-33 .checkbox__symbol {
          display: inline-block;
          display: flex;
          margin-right: calc(var(--s-small) * 0.7);
          border: var(--border-width) solid var(--c-primary);
          position: relative;
          border-radius: 0.1em;
          width: 1.5em;
          height: 1.5em;
          transition: box-shadow var(--t-base) var(--e-out), background-color var(--t-base);
          box-shadow: 0 0 0 0 var(--c-primary-10-percent-opacity);
        }
        
        .checkbox-wrapper-33 .checkbox__symbol:after {
          content: "";
          position: absolute;
          top: 0.5em;
          left: 0.5em;
          width: 0.25em;
          height: 0.25em;
          background-color: var(--c-primary-20-percent-opacity);
          opacity: 0;
          border-radius: 3em;
          transform: scale(1);
          transform-origin: 50% 50%;
        }
        
        .checkbox-wrapper-33 .checkbox .icon-checkbox {
          width: 1em;
          height: 1em;
          margin: auto;
          fill: none;
          stroke-width: 3;
          stroke: currentColor;
          strokeLinecap: round;
          strokeLinejoin: round;
          stroke-miterlimit: 10;
          color: var(--c-primary);
          display: inline-block;
        }
        
        .checkbox-wrapper-33 .checkbox .icon-checkbox path {
          transition: stroke-dashoffset var(--t-fast) var(--e-in);
          stroke-dasharray: 30px, 31px;
          stroke-dashoffset: 31px;
        }
        
        .checkbox-wrapper-33 .checkbox__textwrapper {
          margin: 0;
        }
        
        .checkbox-wrapper-33 .checkbox__trigger:checked + .checkbox__symbol:after {
          -webkit-animation: ripple-33 1.5s var(--e-out);
          animation: ripple-33 1.5s var(--e-out);
        }
        
        .checkbox-wrapper-33 .checkbox__trigger:checked + .checkbox__symbol .icon-checkbox path {
          transition: stroke-dashoffset var(--t-base) var(--e-out);
          stroke-dashoffset: 0px;
        }
        
        .checkbox-wrapper-33 .checkbox__trigger:focus + .checkbox__symbol {
          box-shadow: 0 0 0 0.25em var(--c-primary-20-percent-opacity);
        }
        
        @-webkit-keyframes ripple-33 {
          from {
            transform: scale(0);
            opacity: 1;
          }
        
          to {
            opacity: 0;
            transform: scale(20);
          }
        }
        
        @keyframes ripple-33 {
          from {
            transform: scale(0);
            opacity: 1;
          }
        
          to {
            opacity: 0;
            transform: scale(20);
          }
        }`,
  },
  {
    id: 312,
    component: <CheckboxGradient />,
    name: "Gradient",
    html: `<label class="container">
        <input type="checkbox">
        <div class="checkmark"></div>
      </label>`,
    scss: `/* Hide the default checkbox */
        .container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        
        .container {
          display: block;
          position: relative;
          cursor: pointer;
          font-size: 20px;
          user-select: none;
        }
        
        .container::before {
          position: absolute;
          left: 0;
          top: 0;
          content: "";
          width: 100%;
          height: 100%;
          border-radius: 50%;
          filter: blur(5px);
          background-color: #b899ff;
          background-image: radial-gradient(at 6% 13%, hsla(322,81%,60%,1) 0px, transparent 50%),
        radial-gradient(at 9% 59%, hsla(209,65%,71%,1) 0px, transparent 50%),
        radial-gradient(at 39% 16%, hsla(325,93%,79%,1) 0px, transparent 50%);
        }
        
        /* Create a custom checkbox */
        .checkmark {
          position: relative;
          top: 0;
          left: 0;
          height: 2em;
          width: 2em;
          border-radius: 50%;
          background-color: rgb(255, 255, 255);
        }
        
        /* When the checkbox is checked, add a blue background */
        .container input:checked ~ .checkmark {
          height: 2em;
          width: 2em;
          border-radius: 50%;
          position: relative;
        }
        
        .container input:checked ~ .checkmark::before {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 65%;
          height: 65%;
          content: "";
          border-radius: 50%;
          background-color: #ff99f0;
          background-image: radial-gradient(at 86% 29%, hsla(277,65%,76%,1) 0px, transparent 50%),
          radial-gradient(at 13% 20%, hsla(54,73%,71%,1) 0px, transparent 50%),
          radial-gradient(at 76% 0%, hsla(145,64%,69%,1) 0px, transparent 50%);
          animation: animation__checked 600ms normal;
        }
        
        @keyframes animation__checked {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
        
          100% {
            opacity: 100;
            transform: scale(1);
          }
        }`,
  },
  {
    id: 313,
    component: <CheckboxAgree />,
    name: "Agree",
    html: `<label class="checkbox">
        <input type="checkbox">
        <span class="checkmark"></span>
        <span class="text">Agree</span>
      </label>
      `,
    scss: `.checkbox {
          position: relative;
          display: inline-block;
          cursor: pointer;
          font-size: 16px;
          color: whitesmoke;
          line-height: 1.5;
          margin-bottom: 20px;
          font-family: Arial, sans-serif;
          user-select: none;
        }
        
        .checkbox .ipt {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }
        
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 30px;
          width: 30px;
          border: 2px solid whitesmoke;
          border-radius: 5px;
          transition: all 0.2s ease-in-out;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .checkbox:hover .checkmark {
          transform: translateX(-20px) translateY(-2px) rotate(10deg);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }
        
        .checkbox .ipt:checked ~ .checkmark {
          background-color: whitesmoke;
          border-color: whitesmoke;
        }
        
        .checkbox .ipt:checked ~ .checkmark:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 14px;
          border: solid darkslateblue;
          border-width: 0 2px 2px 0;
          transform: translate(-50%, -50%) rotate(45deg);
        }
        
        .text {
          margin-left: 40px;
          display: inline-block;
          transition: all 0.2s ease-in-out;
        }
        `,
  },
  {
    id: 314,
    component: <CheckboxThumb />,
    name: "Thumb",
    html: `<label class="container">
        <input type="checkbox" />
        <div class="checkmark">
          <svg fill="none" viewBox="0 0 24 24">
          <path strokeLinejoin="round" strokeLinecap="round" stroke-width="1.3" stroke="#FFFFFF" d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"></path>
          </svg>
        </div>
      </label>`,
    scss: `.container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        
        .container {
          display: block;
          position: relative;
          cursor: pointer;
          font-size: 25px;
          user-select: none;
          transition: 100ms;
        }
        
        .checkmark {
          top: 0;
          left: 0;
          height: 2em;
          width: 2em;
          transition: 100ms;
          animation: dislike_401 400ms ease;
        }
        
        .container input:checked ~ .checkmark path {
          fill: #1C7DFF;
          stroke-width: 1.2;
          stroke: #212121;
         /*same background color*/
        }
        
        .container input:checked ~ .checkmark {
          animation: like_401 400ms ease;
        }
        
        .container:hover {
          transform: scale(1.1);
        }
        
        @keyframes like_401 {
          0% {
            transform: scale(0);
          }
        
          50% {
            transform: scale(1.2);
          }
        
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes dislike_401 {
          0% {
            transform: scale(0);
          }
        
          50% {
            transform: scale(1.2);
          }
        
          100% {
            transform: scale(1);
          }
        }`,
  },
  {
    id: 315,
    component: <CheckboxEye />,
    name: "Eye",
    html: `<label class="container">
        <input type="checkbox">
        <div class="checkmark"></div>
      </label>`,
    scss: `/* Hide the default checkbox */
        .container input {
         position: absolute;
         opacity: 0;
         cursor: pointer;
         height: 0;
         width: 0;
        }
        
        .container {
         display: block;
         position: relative;
         cursor: pointer;
         font-size: 20px;
         user-select: none;
        }
        
        /* Create a custom checkbox */
        .checkmark {
         position: relative;
         top: 0;
         left: 0;
         height: 1.4em;
         width: 1.4em;
         border: 2px solid #2196F3;
         border-radius: 1rem 0rem 1rem;
         transform: rotate(45deg);
         transition: all .5s ease-in-out;
        }
        
        /* When the checkbox is checked, add a blue background */
        .container input:checked ~ .checkmark {
         box-shadow: 0px 0px 40px 5px #2196F3;
         border-radius: 1rem 0rem 1rem;
         background-color: #2195f31f;
        }
        
        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
         content: "";
         position: absolute;
         display: none;
        }
        
        /* Show the checkmark when checked */
        .container input:checked ~ .checkmark:after {
         display: block;
        }
        
        /* Style the checkmark/indicator */
        .container .checkmark:after {
         left: 0.35em;
         top: 0.20em;
         width: 0.25em;
         height: 0.5em;
         border: solid #2196F3;
         border-width: 0 0.15em 0.15em 0;
         transform: rotate(-5deg);
         animation: upAnimate 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        @keyframes upAnimate {
         from {
          transform: translate(-20px, -20px) rotate(-5deg);
          opacity: 0;
         }
        
         to {
          transform: translate(0, 0) rotate(-5deg);
          opacity: 1;
         }
        }`,
  },
  {
    id: 316,
    component: <CheckboxCustom />,
    name: "Custom",
    html: `<div class="customCheckBoxHolder">

        <input type="checkbox" id="cCB1" class="customCheckBoxInput">
        <label for="cCB1" class="customCheckBoxWrapper">
            <div class="customCheckBox">
                <div class="inner">Toggle Me</div>
            </div>
        </label>
    
    </div>`,
    scss: `.customCheckBoxHolder {
          margin: 5px;
          display: flex;
        }
        
        .customCheckBox {
          width: fit-content;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          user-select: none;
          padding: 2px 8px;
          background-color: rgba(0, 0, 0, 0.16);
          border-radius: 0px;
          color: rgba(255, 255, 255, 0.7);
          transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
          transition-duration: 300ms;
          transition-property: color, background-color, box-shadow;
          display: flex;
          height: 32px;
          align-items: center;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px 1px 1px 0px;
          outline: none;
          justify-content: center;
          min-width: 55px;
        }
        
        .customCheckBox:hover {
          background-color: #2c2c2c;
          color: white;
          box-shadow: rgba(0, 0, 0, 0.23) 0px -4px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px -1px 1px 0px, rgba(0, 0, 0, 0.17) 0px 2px 4px 1px;
        }
        
        .customCheckBox .inner {
          font-size: 18px;
          font-weight: 900;
          pointer-events: none;
          transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
          transition-duration: 300ms;
          transition-property: transform;
          transform: translateY(0px);
        }
        
        .customCheckBox:hover .inner {
          transform: translateY(-2px);
        }
        
        /* Multiple Checkboxes can be chained together for a radio input */
        .customCheckBoxWrapper:first-of-type .customCheckBox {
          border-bottom-left-radius: 5px;
          border-top-left-radius: 5px;
          border-right: 0px;
        }
        
        .customCheckBoxWrapper:last-of-type .customCheckBox {
          border-bottom-right-radius: 5px;
          border-top-right-radius: 5px;
          border-left: 0px;
        }
        
        .customCheckBoxInput {
          display: none;
        }
        
        .customCheckBoxInput:checked + .customCheckBoxWrapper .customCheckBox {
          background-color: #2d6737;
          color: white;
          box-shadow: rgba(0, 0, 0, 0.23) 0px -4px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px -1px 1px 0px, rgba(0, 0, 0, 0.17) 0px 2px 4px 1px;
        }
        
        .customCheckBoxInput:checked + .customCheckBoxWrapper .customCheckBox .inner {
          transform: translateY(-2px);
        }
        
        .customCheckBoxInput:checked + .customCheckBoxWrapper .customCheckBox:hover {
          background-color: #34723f;
          box-shadow: rgba(0, 0, 0, 0.26) 0px -4px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px -1px 1px 0px, rgba(0, 0, 0, 0.15) 0px 3px 6px 2px;
        }
        
        .customCheckBoxWrapper .customCheckBox:hover .inner {
          transform: translateY(-2px);
        }`,
  },
  {
    id: 317,
    component: <CheckboxTurn />,
    name: "Turn",
    html: `<label class="container">
        <input type="checkbox" >
        <div class="checkmark"></div>
      </label>`,
    scss: `/* Hide the default checkbox */
        .container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        
        .container {
          display: block;
          position: relative;
          cursor: pointer;
          font-size: 20px;
          user-select: none;
        }
        
        /* Create a custom checkbox */
        .checkmark {
          position: relative;
          top: 0;
          left: 0;
          height: 2.3em;
          width: 2.3em;
          background-color: #ccc;
          border-radius: 50%;
          transition: .4s;
        }
        
        .checkmark:hover {
          box-shadow: inset 17px 17px 16px #b3b3b3,
                    inset -17px -17px 16px #ffffff;
        }
        
        /* When the checkbox is checked, add a blue background */
        .container input:checked ~ .checkmark {
          box-shadow: none;
          background-color: limegreen;
          transform: rotateX(360deg);
        }
        
        .container input:checked ~ .checkmark:hover {
          box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
        }
        
        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }
        
        /* Show the checkmark when checked */
        .container input:checked ~ .checkmark:after {
          display: block;
        }
        
        /* Style the checkmark/indicator */
        .container .checkmark:after {
          left: 0.96em;
          top: 0.7em;
          width: 0.25em;
          height: 0.5em;
          border: solid white;
          border-width: 0 0.15em 0.15em 0;
          box-shadow: 0.1em 0.1em 0em 0 rgba(0,0,0,0.3);
          transform: rotate(45deg);
        }`,
  },
  {
    id: 318,
    component: <CheckboxSimple />,
    name: "Simple",
    html: `<label class="container">
        <input checked="checked" type="checkbox">
        <div class="checkmark"></div>
      </label>`,
    scss: `/* Hide the default checkbox */
        .container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        
        .container {
          display: flex;
          gap: 10px;
        }
        
        
        /* Create a custom checkbox */
        .checkmark {
          position: relative;
          box-shadow: rgb(255, 84, 0) 0px 0px 0px 2px;
          background-color: rgba(16, 16, 16, 0.5);
          height: 20px;
          width: 20px;
          margin-right: 10px;
          flex-shrink: 0;
          margin-top: -1px;
          transition: all 0.2s ease 0s;
          cursor: pointer;
          transform-origin: 0px 10px;
          border-radius: 4px;
          margin: -1px 10px 0px 0px;
          padding: 0px;
          box-sizing: border-box;
        }
        
        .container input:checked ~ .checkmark {
          box-shadow: rgb(255, 84, 0) 0px 0px 0px 2px;
          background-color: rgba(245, 24, 24, 0.5);
          height: 20px;
          width: 20px;
          margin-right: 10px;
          flex-shrink: 0;
          margin-top: -1px;
          transition: all 0.2s ease 0s;
          cursor: pointer;
          transform-origin: 0px 10px;
          border-radius: 4px;
          margin: -1px 10px 0px 0px;
          padding: 0px;
          box-sizing: border-box;
        }
        
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }
        
        .container input:checked ~ .checkmark:after {
          display: block;
        }
        
        /* Style the checkmark/indicator */
        .container .checkmark:after {
          left: 0.45em;
          top: 0.25em;
          width: 0.25em;
          height: 0.5em;
          border: solid white;
          border-width: 0 0.15em 0.15em 0;
          transform: rotate(45deg);
          transition: all 500ms ease-in-out;
        }`,
  },
  {
    id: 319,
    component: <CheckboxList />,
    name: "List",
    html: `<div id="checklist">
        <input className='iptList' value="1" name="r" type="checkbox" id="01" />
        <label className='labelList' for="01">Bread</label>
        <input className='iptList' value="2" name="r" type="checkbox" id="02" />
        <label className='labelList' for="02">Cheese</label>
        <input className='iptList' value="3" name="r" type="checkbox" id="03" />
        <label className='labelList' for="03">Coffee</label>
      </div>`,
    scss: `#checklist {
          --background: #fff;
          --text: #414856;
          --check: #4f29f0;
          --disabled: #c3c8de;
          --width: 100px;
          --height: 180px;
          --border-radius: 10px;
          background: var(--background);
          width: var(--width);
          height: var(--height);
          border-radius: var(--border-radius);
          position: relative;
          box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
          padding: 30px 85px;
          display: grid;
          grid-template-columns: 30px auto;
          align-items: center;
          justify-content: center;
        }
        
        #checklist .labelList {
          color: var(--text);
          position: relative;
          cursor: pointer;
          display: grid;
          align-items: center;
          width: fit-content;
          transition: color 0.3s ease;
          margin-right: 20px;
        }
        
        #checklist .labelList::before, #checklist .labelList::after {
          content: "";
          position: absolute;
        }
        
        #checklist .labelList::before {
          height: 2px;
          width: 8px;
          left: -27px;
          background: var(--check);
          border-radius: 2px;
          transition: background 0.3s ease;
        }
        
        #checklist .labelList:after {
          height: 4px;
          width: 4px;
          top: 8px;
          left: -25px;
          border-radius: 50%;
        }
        
        #checklist .iptList[type="checkbox"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          position: relative;
          height: 15px;
          width: 15px;
          outline: none;
          border: 0;
          margin: 0 15px 0 0;
          cursor: pointer;
          background: var(--background);
          display: grid;
          align-items: center;
          margin-right: 20px;
        }
        
        #checklist .iptList[type="checkbox"]::before, #checklist .iptList[type="checkbox"]::after {
          content: "";
          position: absolute;
          height: 2px;
          top: auto;
          background: var(--check);
          border-radius: 2px;
        }
        
        #checklist .iptList[type="checkbox"]::before {
          width: 0px;
          right: 60%;
          transform-origin: right bottom;
        }
        
        #checklist .iptList[type="checkbox"]::after {
          width: 0px;
          left: 40%;
          transform-origin: left bottom;
        }
        
        #checklist .iptList[type="checkbox"]:checked::before {
          animation: check-01 0.4s ease forwards;
        }
        
        #checklist .iptList[type="checkbox"]:checked::after {
          animation: check-02 0.4s ease forwards;
        }
        
        #checklist .iptList[type="checkbox"]:checked + .labelList {
          color: var(--disabled);
          animation: move 0.3s ease 0.1s forwards;
        }
        
        #checklist .iptList[type="checkbox"]:checked + .labelList::before {
          background: var(--disabled);
          animation: slice 0.4s ease forwards;
        }
        
        #checklist .iptList[type="checkbox"]:checked + .labelList::after {
          animation: firework 0.5s ease forwards 0.1s;
        }
        
        @keyframes move {
          50% {
            padding-left: 8px;
            padding-right: 0px;
          }
        
          100% {
            padding-right: 4px;
          }
        }
        
        @keyframes slice {
          60% {
            width: 100%;
            left: 4px;
          }
        
          100% {
            width: 100%;
            left: -2px;
            padding-left: 0;
          }
        }
        
        @keyframes check-01 {
          0% {
            width: 4px;
            top: auto;
            transform: rotate(0);
          }
        
          50% {
            width: 0px;
            top: auto;
            transform: rotate(0);
          }
        
          51% {
            width: 0px;
            top: 8px;
            transform: rotate(45deg);
          }
        
          100% {
            width: 5px;
            top: 8px;
            transform: rotate(45deg);
          }
        }
        
        @keyframes check-02 {
          0% {
            width: 4px;
            top: auto;
            transform: rotate(0);
          }
        
          50% {
            width: 0px;
            top: auto;
            transform: rotate(0);
          }
        
          51% {
            width: 0px;
            top: 8px;
            transform: rotate(-45deg);
          }
        
          100% {
            width: 10px;
            top: 8px;
            transform: rotate(-45deg);
          }
        }
        
        @keyframes firework {
          0% {
            opacity: 1;
            box-shadow: 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0;
          }
        
          30% {
            opacity: 1;
          }
        
          100% {
            opacity: 0;
            box-shadow: 0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0, 14px 8px 0 0px #4f29f0, 0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0, -14px -8px 0 0px #4f29f0;
          }
        }`,
  },
  {
    id: 320,
    component: <CheckboxMore />,
    name: "More",
    html: `<label class="container">
        <input type="checkbox" checked="checked">
        <div class="line"></div>
        <div class="line line-indicator"></div>
      </label>`,
    scss: `/* Hide the default checkbox */
.container input {
  opacity: 0;
  cursor: pointer;
  width: 0;
  height: 0;
}

.container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  background: rgba(216, 216, 216, 0.603);
}

.container:hover {
  background: rgba(197, 197, 197, 0.527);
}

.line {
  width: calc(100% - 8px);
  height: 3px;
  left: 4px;
  background: rgb(58, 58, 58);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: .7s transform cubic-bezier(0,1,.33,1.2), background .4s;
}

.line-indicator {
  transform: translateY(-50%) rotate(90deg);
}

.container input:checked ~ .line-indicator {
  transform: translateY(-50%);
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
