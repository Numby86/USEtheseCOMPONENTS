import ToggleSun from "./ToggleSun/ToggleSun";
import TogglePower from "./TogglePower/TogglePower";
import ToggleOnOff from "./ToggleOnOff/ToggleOnOff";
import ToogleBasic from "./ToggleBasic/ToggleBasic";
import ToogleYellow from "./ToggleYellow/ToggleYellow";
import ToggleButton from "./ToggleButton/ToggleButton";
import ToggleAnimate from "./ToggleAnimate/ToggleAnimate";
import ToggleMetal from "./ToggleMetal/ToggleMetal";
import ToggleSmile from "./ToggleSmile/ToggleSmile";
import ToggleLemon from "./ToggleLemon/ToggleLemon";
import ToggleLightbulb from "./ToggleLightbulb/ToggleLightbulb";
import TogglePlane from "./TogglePlane/TogglePlane";
import ToggleClick from "./ToggleClick/ToggleClick";
import ToggleColors from "./ToggleColors/ToggleColors";
import ToggleBubble from "./ToggleBubble/ToggleBubble";
import ToggleWhite from "./ToggleWhite/ToggleWhite";
import ToggleSound from "./ToggleSound/ToggleSound";
import ToggleText from "./ToggleText/ToggleText";
import ToggleMoon from "./ToggleMoon/ToggleMoon";
import ToggleSum from "./ToggleSum/ToggleSum";

export const allToggles = [
  {
    id: 1,
    component: <ToggleSun />,
    name: "Sun",
    html: `<label class="switch">
        <span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
        <span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
        <input type="checkbox" class="input">
        <span class="slider"></span>
      </label>`,
    scss: `.switch {
            font-size: 17px;
            position: relative;
            display: inline-block;
            width: 64px;
            height: 34px;
          }
          
          .switch input {
            opacity: 0;
            width: 0;
            height: 0;
          }
          
          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #73C0FC;
            transition: .4s;
            border-radius: 30px;
          }
          
          .slider:before {
            position: absolute;
            content: "";
            height: 30px;
            width: 30px;
            border-radius: 20px;
            left: 2px;
            bottom: 2px;
            z-index: 2;
            background-color: #e8e8e8;
            transition: .4s;
          }
          
          .sun svg {
            position: absolute;
            top: 6px;
            left: 36px;
            z-index: 1;
            width: 24px;
            height: 24px;
          }
          
          .moon svg {
            fill: #73C0FC;
            position: absolute;
            top: 5px;
            left: 5px;
            z-index: 1;
            width: 24px;
            height: 24px;
          }
          
          /* .switch:hover */.sun svg {
            animation: rotate 15s linear infinite;
          }
          
          @keyframes rotate {
           
            0% {
              transform: rotate(0);
            }
          
            100% {
              transform: rotate(360deg);
            }
          }
          
          /* .switch:hover */.moon svg {
            animation: tilt 5s linear infinite;
          }
          
          @keyframes tilt {
           
            0% {
              transform: rotate(0deg);
            }
          
            25% {
              transform: rotate(-10deg);
            }
          
            75% {
              transform: rotate(10deg);
            }
          
            100% {
              transform: rotate(0deg);
            }
          }
          
          .input:checked + .slider {
            background-color: #183153;
          }
          
          .input:focus + .slider {
            box-shadow: 0 0 1px #183153;
          }
          
          .input:checked + .slider:before {
            transform: translateX(30px);
          }`,
  },
  {
    id: 2,
    component: <TogglePower />,
    name: "Power",
    html: ` <input type="checkbox" id="checkbox" />
        <label for="checkbox" class="switch">
            <div class="powersign"></div>
        </label>`,
    scss: `#checkbox {
          display: none;
        }
        
        .switch {
          position: relative;
          width: 70px;
          height: 70px;
          background-color: rgb(99, 99, 99);
          border-radius: 50%;
          z-index: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgb(126, 126, 126);
          box-shadow: 0px 0px 3px rgb(2, 2, 2) inset;
        }
        
        .powersign {
          position: relative;
          width: 30%;
          height: 30%;
          border: 4px solid rgb(48, 48, 48);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .powersign::before {
          content: "";
          width: 8px;
          height: 100%;
          background-color: rgb(99, 99, 99);
          position: absolute;
          top: -60%;
          z-index: 2;
        }
        
        .powersign::after {
          content: "";
          width: 4px;
          height: 100%;
          background-color: rgb(48, 48, 48);
          position: absolute;
          top: -60%;
          z-index: 3;
        }
        
        #checkbox:checked + .switch .powersign {
          border: 4px solid rgb(255, 255, 255);
          box-shadow: 0px 0px 10px rgb(151, 243, 255),
            0px 0px 5px rgb(151, 243, 255) inset;
        }
        
        #checkbox:checked + .switch .powersign::after {
          background-color: rgb(255, 255, 255);
          box-shadow: 0px 0px 5px rgb(151, 243, 255);
        }
        
        #checkbox:checked + .switch {
          box-shadow: 0px 0px 1px rgb(151, 243, 255) inset,
            0px 0px 2px rgb(151, 243, 255) inset,
            0px 0px 10px rgb(151, 243, 255) inset,
            0px 0px 40px rgb(151, 243, 255),
            0px 0px 100px rgb(151, 243, 255),
            0px 0px 5px rgb(151, 243, 255);
          border: 2px solid rgb(255, 255, 255);
          background-color: rgb(146, 180, 184);
        }
        
        #checkbox:checked + .switch .powersign::before {
          background-color: rgb(146, 180, 184);
        }
        
        `,
  },
  {
    id: 3,
    component: <ToggleOnOff />,
    name: "OnOff",
    html: `<div class="checkbox-wrapper-8">
        <input type="checkbox" id="cb3-8" class="tgl tgl-skewed">
        <label for="cb3-8" data-tg-on="ON" data-tg-off="OFF" class="tgl-btn"></label>
      </div>`,
    scss: `.checkbox-wrapper-8 .tgl {
          display: none;
        }
        
        .checkbox-wrapper-8 .tgl,
          .checkbox-wrapper-8 .tgl:after,
          .checkbox-wrapper-8 .tgl:before,
          .checkbox-wrapper-8 .tgl *,
          .checkbox-wrapper-8 .tgl *:after,
          .checkbox-wrapper-8 .tgl *:before,
          .checkbox-wrapper-8 .tgl + .tgl-btn {
          box-sizing: border-box;
        }
        
        .checkbox-wrapper-8 .tgl::-moz-selection,
          .checkbox-wrapper-8 .tgl:after::-moz-selection,
          .checkbox-wrapper-8 .tgl:before::-moz-selection,
          .checkbox-wrapper-8 .tgl *::-moz-selection,
          .checkbox-wrapper-8 .tgl *:after::-moz-selection,
          .checkbox-wrapper-8 .tgl *:before::-moz-selection,
          .checkbox-wrapper-8 .tgl + .tgl-btn::-moz-selection,
          .checkbox-wrapper-8 .tgl::selection,
          .checkbox-wrapper-8 .tgl:after::selection,
          .checkbox-wrapper-8 .tgl:before::selection,
          .checkbox-wrapper-8 .tgl *::selection,
          .checkbox-wrapper-8 .tgl *:after::selection,
          .checkbox-wrapper-8 .tgl *:before::selection,
          .checkbox-wrapper-8 .tgl + .tgl-btn::selection {
          background: none;
        }
        
        .checkbox-wrapper-8 .tgl + .tgl-btn {
          outline: 0;
          display: block;
          width: 4em;
          height: 2em;
          position: relative;
          cursor: pointer;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        .checkbox-wrapper-8 .tgl + .tgl-btn:after,
          .checkbox-wrapper-8 .tgl + .tgl-btn:before {
          position: relative;
          display: block;
          content: "";
          width: 50%;
          height: 100%;
        }
        
        .checkbox-wrapper-8 .tgl + .tgl-btn:after {
          left: 0;
        }
        
        .checkbox-wrapper-8 .tgl + .tgl-btn:before {
          display: none;
        }
        
        .checkbox-wrapper-8 .tgl:checked + .tgl-btn:after {
          left: 50%;
        }
        
        .checkbox-wrapper-8 .tgl-skewed + .tgl-btn {
          overflow: hidden;
          transform: skew(-10deg);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transition: all 0.2s ease;
          font-family: sans-serif;
          background: #888;
        }
        
        .checkbox-wrapper-8 .tgl-skewed + .tgl-btn:after,
          .checkbox-wrapper-8 .tgl-skewed + .tgl-btn:before {
          transform: skew(10deg);
          display: inline-block;
          transition: all 0.2s ease;
          width: 100%;
          text-align: center;
          position: absolute;
          line-height: 2em;
          font-weight: bold;
          color: #fff;
          text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
        }
        
        .checkbox-wrapper-8 .tgl-skewed + .tgl-btn:after {
          left: 100%;
          content: attr(data-tg-on);
        }
        
        .checkbox-wrapper-8 .tgl-skewed + .tgl-btn:before {
          left: 0;
          content: attr(data-tg-off);
        }
        
        .checkbox-wrapper-8 .tgl-skewed + .tgl-btn:active {
          background: #888;
        }
        
        .checkbox-wrapper-8 .tgl-skewed + .tgl-btn:active:before {
          left: -10%;
        }
        
        .checkbox-wrapper-8 .tgl-skewed:checked + .tgl-btn {
          background: #86d993;
        }
        
        .checkbox-wrapper-8 .tgl-skewed:checked + .tgl-btn:before {
          left: -100%;
        }
        
        .checkbox-wrapper-8 .tgl-skewed:checked + .tgl-btn:after {
          left: 0;
        }
        
        .checkbox-wrapper-8 .tgl-skewed:checked + .tgl-btn:active:after {
          left: 10%;
        }`,
  },
  {
    id: 4,
    component: <ToogleBasic />,
    name: "Basic",
    html: `<label class="switch">
      <input type="checkbox">
      <span class="slider">
       <svg class="slider-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg> 
      </span>
    </label>`,
    scss: `/* The switch - the box around the slider */
      .switch {
        font-size: 17px;
        position: relative;
        display: inline-block;
        width: 3.5em;
        height: 2em;
      }
      
      /* Hide default HTML checkbox */
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #B0B0B0;
        border: 1px solid #B0B0B0;
        transition: .4s;
        border-radius: 32px;
        outline: none;
      }
      
      .slider:before {
        position: absolute;
        content: "";
        height: 2em;
        width: 2em;
        border-radius: 50%;
        outline: 2px solid #B0B0B0;
        left: -1px;
        bottom: -1px;
        background-color: #fff;
        transition: transform .25s ease-in-out 0s;
      }
      
      .slider-icon {
        opacity: 0;
        height: 12px;
        width: 12px;
        stroke-width: 8;
        position: absolute;
        z-index: 999;
        stroke: #222222;
        right: 60%;
        top: 30%;
        transition: right ease-in-out .3s, opacity ease-in-out .15s;
      }
      
      input:checked + .slider {
        background-color: #222222;
      }
      
      input:checked + .slider .slider-icon {
        opacity: 1;
        right: 20%;
      }
      
      input:checked + .slider:before {
        transform: translateX(1.5em);
        outline-color: #181818;
      }`,
  },
  {
    id: 5,
    component: <ToogleYellow />,
    name: "Yellow",
    html: `<label>
      <input class="toggle-checkbox" type="checkbox">
      <div class="toggle-slot">
        <div class="sun-icon-wrapper">
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
        </div>
        <div class="toggle-button"></div>
        <div class="moon-icon-wrapper">
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
        </div>
      </div>
    </label>
    `,
    scss: `.toggle-checkbox {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      
      .toggle-slot {
        font-size: 10px;
        position: relative;
        height: 3.5em;
        width: 7em;
        border: 0px solid transparent;
        border-radius: 10em;
        background-color: white;
        transition: background-color 250ms;
      }
      
      .toggle-checkbox:checked ~ .toggle-slot {
        background-color: #2e5daa;
      }
      
      .toggle-button {
        transform: translate(0.3em, 0.25em);
        position: absolute;
        height: 3em;
        width: 3em;
        border-radius: 50%;
        background-color: #ffeccf;
        box-shadow: inset 0px 0px 0px 0.75em #ffbb52;
        transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.26,2,.46,.71);
      }
      
      .toggle-checkbox:checked ~ .toggle-slot .toggle-button {
        background-color: #3c64ae;
        box-shadow: inset 0px 0px 0px 0.75em white;
        transform: translate(3.65em, 0.25em);
      }
      
      .sun-icon {
        position: absolute;
        height: 6em;
        width: 6em;
        color: #ffbb52;
      }
      
      .sun-icon-wrapper {
        position: absolute;
        height: 6em;
        width: 6em;
        opacity: 1;
        transform: translate(2em, 2em) rotate(15deg);
        transform-origin: 50% 50%;
        transition: opacity 150ms, transform 500ms cubic-bezier(.26,2,.46,.71);
      }
      
      .toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
        opacity: 0;
        transform: translate(3em, 2em) rotate(0deg);
      }
      
      .moon-icon {
        position: absolute;
        height: 6em;
        width: 6em;
        color: white;
      }
      
      .moon-icon-wrapper {
        position: absolute;
        height: 6em;
        width: 6em;
        opacity: 0;
        transform: translate(11em, 2em) rotate(0deg);
        transform-origin: 50% 50%;
        transition: opacity 150ms, transform 500ms cubic-bezier(.26,2.5,.46,.71);
      }
      
      .toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
        opacity: 1;
        transform: translate(2em, 2em) rotate(-15deg);
      }`,
  },
  {
    id: 6,
    component: <ToggleButton />,
    name: "Button",
    html: `<label class="switch">
      <div class="round"><input name="onoff" id="onoff" type="checkbox">
          <div class="back"><label for="onoff" class="but"><span class="on">0</span><span class="off">I</span></label></div>
      </div>
  </label>`,
    scss: `input {
        display: none
      }
      
      .on,.off {
        position: absolute;
        text-align: center;
        text-shadow: inset 1px 1px 1px black;
        width: 100%;
        right: 0px;
      }
      
      .on {
        color: #fff;
        top: 10px;
        transition: all 0.1s;
        font-family: sans-serif
      }
      
      .off {
        color: #636161;
        bottom: 5px;
        transition: all 0.1s;
        transform: scaleY(0.85);
      }
      
      .but {
        background-color: #000;
        border-radius: 400px 400px 400px 400px / 400px 400px 300px 300px;
        border-bottom-width: 0px;
        box-shadow: inset 8px 6px 5px -7px rgba(0,0,0,1)
          ,inset -8px 6px 5px -7px rgba(0,0,0,1)
          ,inset 0 -3px 2px -2px rgba(200,200,200,.5)
          ,0 3px 3px -2px rgba(0,0,0,1)
          ,inset 0 -230px 60px -200px rgba(255,255,255,.2)
          ,inset 0 220px 40px -200px rgba(0,0,0,.3);
        display: block;
        font-size: 17px;
        height: 60px;
        position: relative;
        transition: all 0.2s;
        width: 40px;
      }
      
      .back {
        background-color: #000;
        background-image: -webkit-linear-gradient(0deg, transparent 30%, transparent 65%)
          ,-webkit-linear-gradient(0deg, rgba(245, 245, 245, 0) 30%, rgba(150,150,150,.1) 50%, rgba(150,150,150,0) 70%);
        border-radius: 115px;
        box-sizing: border-box;
        height: 85px;
        padding: 4px 4px;
        transition: all 0.2s;
        width: 50px;
      }
      
      input:checked + .back .on,input:checked + .back .off {
        text-shadow: inset 1px 1px 1px black;
      }
      
      input:checked + .back .on {
        color: rgb(141, 141, 141);
        top: 10px;
        transform: scaleY(0.85);
      }
      
      input:checked + .back .off {
        color: #fff;
        bottom: 5px;
        transform: scaleY(1);
      }
      
      input:checked + .back .but {
        background: #232323;
        background-image: -webkit-radial-gradient(55% 18%,circle closest-corner,rgba(0,0,0,.3) ,rgba(0,0,0,0));
        border-radius: 410px 410px 410px 410px / 310px 310px 410px 410px;
        box-shadow: inset 8px -4px 5px -7px rgba(0,0,0,1)
          ,inset -8px -4px 5px -7px rgba(0,0,0,1)
          , 0 -3px 8px -4px rgba(250,250,250,.4)
          ,inset 0 3px 4px -2px rgba(10,10,10,1)
          ,inset 0 280px 40px -200px rgba(0,0,0,.2)
          ,inset 0 -200px 40px -200px rgba(180,180,180,.2);
        margin-top: 20px;
      }
      
      input:checked + .back {
        background-image: -webkit-linear-gradient(90deg, black 30%, transparent 65%)
          ,-webkit-linear-gradient(180deg, rgba(250,250,250,0) 0%, rgba(250,250,250,.4) 50%, rgba(150,150,150,0) 100%);
        box-shadow: 28px 28px 28px -28px rgba(0,0,0,.1)
          ,-28px 28px 28px -22px rgba(0,0,0,.1)
          ,0 30px 30px 0px rgba(0,0,0,.2)
          ,inset 0 1px 2px 0 rgba(0,0,0,.6);
        padding: 2px 4px;
      }
      
      .l,.r {
        margin: 0 auto;
        text-align: center;
      }
      
      .round,#onoff,.back,.but,.on,.off {
        user-select: none;
      }`,
  },
  {
    id: 7,
    component: <ToggleAnimate />,
    name: "Animate",
    html: `<label class="switch">
      <input type="checkbox">
      <span class="slider"></span>
    </label>`,
    scss: `/* The switch - the box around the slider */
      .switch {
        font-size: 17px;
        position: relative;
        display: inline-block;
        width: 3.5em;
        height: 2em;
      }
      
      /* Hide default HTML checkbox */
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
        transition: .4s;
        border-radius: 5px;
      }
      
      .slider:before {
        position: absolute;
        content: "";
        height: 1.4em;
        width: 0.1em;
        border-radius: 0px;
        left: 0.3em;
        bottom: 0.3em;
        background-color: white;
        transition: .4s;
      }
      
      input:checked + .slider {
        background-color: #171717;
        box-shadow: inset 2px 5px 10px rgb(0, 0, 0);
      }
      
      input:checked + .slider:before {
        transform: translateX(2.8em) rotate(360deg);
      }`,
  },
  {
    id: 8,
    component: <ToggleMetal />,
    name: "Metal",
    html: ` <input type="checkbox" id="checkboxInput">
      <label for="checkboxInput" class="toggleSwitch">
      </label>`,
    scss: `/* To hide the checkbox */
      #checkboxInput {
        display: none;
      }
      
      .toggleSwitch {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 80px;
        height: 40px;
        background-color: rgb(177, 177, 177);
        border-radius: 20px;
        cursor: pointer;
        box-shadow: 3px 3px 6px rgba(24, 24, 24, 0.493) inset;
        transition-duration: .3s;
      }
      
      .toggleSwitch::after {
        content: "";
        position: absolute;
        height: 40px;
        width: 40px;
        left: 0px;
        background: conic-gradient(rgba(26, 26, 26, 0.555),white,rgba(26, 26, 26, 0.555),white,rgba(26, 26, 26, 0.555));
        border-radius: 50%;
        transition-duration: .3s;
        box-shadow: 5px 2px 7px rgba(8, 8, 8, 0.377);
      }
      
      #checkboxInput:checked+.toggleSwitch::after {
        transform: translateX(100%) rotate(90deg);
        transition-duration: .3s;
      }
      /* Switch background change */
      #checkboxInput:checked+.toggleSwitch {
        background-color: rgb(252, 250, 250);
        transition-duration: .3s;
      }`,
  },
  {
    id: 9,
    component: <ToggleSmile />,
    name: "Smile",
    html: `<div class="checkbox-wrapper-5">
      <div class="check">
        <input type="checkbox" id="check-5">
        <label for="check-5"></label>
      </div>
    </div>
    `,
    scss: `.checkbox-wrapper-5 .check {
        --size: 40px;
        position: relative;
        background: linear-gradient(90deg, #f19af3, #f099b5);
        line-height: 0;
        perspective: 400px;
        font-size: var(--size);
      }
      
      .checkbox-wrapper-5 .check input[type="checkbox"],
        .checkbox-wrapper-5 .check label,
        .checkbox-wrapper-5 .check label::before,
        .checkbox-wrapper-5 .check label::after,
        .checkbox-wrapper-5 .check {
        appearance: none;
        display: inline-block;
        border-radius: var(--size);
        border: 0;
        transition: .35s ease-in-out;
        box-sizing: border-box;
        cursor: pointer;
      }
      
      .checkbox-wrapper-5 .check label {
        width: calc(2.2 * var(--size));
        height: var(--size);
        background: #d7d7d7;
        overflow: hidden;
      }
      
      .checkbox-wrapper-5 .check input[type="checkbox"] {
        position: absolute;
        z-index: 1;
        width: calc(.8 * var(--size));
        height: calc(.8 * var(--size));
        top: calc(.1 * var(--size));
        left: calc(.1 * var(--size));
        background: linear-gradient(45deg, #dedede, #ffffff);
        box-shadow: 0 6px 7px rgba(0,0,0,0.3);
        outline: none;
        margin: 0;
      }
      
      .checkbox-wrapper-5 .check input[type="checkbox"]:checked {
        left: calc(1.3 * var(--size));
      }
      
      .checkbox-wrapper-5 .check input[type="checkbox"]:checked + label {
        background: transparent;
      }
      
      .checkbox-wrapper-5 .check label::before,
        .checkbox-wrapper-5 .check label::after {
        content: "· ·";
        position: absolute;
        overflow: hidden;
        left: calc(.15 * var(--size));
        top: calc(.5 * var(--size));
        height: var(--size);
        letter-spacing: calc(-0.04 * var(--size));
        color: #9b9b9b;
        font-family: "Times New Roman", serif;
        z-index: 2;
        font-size: calc(.6 * var(--size));
        border-radius: 0;
        transform-origin: 0 0 calc(-0.5 * var(--size));
        backface-visibility: hidden;
      }
      
      .checkbox-wrapper-5 .check label::after {
        content: "●";
        top: calc(.65 * var(--size));
        left: calc(.2 * var(--size));
        height: calc(.1 * var(--size));
        width: calc(.35 * var(--size));
        font-size: calc(.2 * var(--size));
        transform-origin: 0 0 calc(-0.4 * var(--size));
      }
      
      .checkbox-wrapper-5 .check input[type="checkbox"]:checked + label::before,
        .checkbox-wrapper-5 .check input[type="checkbox"]:checked + label::after {
        left: calc(1.55 * var(--size));
        top: calc(.4 * var(--size));
        line-height: calc(.1 * var(--size));
        transform: rotateY(360deg);
      }
      
      .checkbox-wrapper-5 .check input[type="checkbox"]:checked + label::after {
        height: calc(.16 * var(--size));
        top: calc(.55 * var(--size));
        left: calc(1.6 * var(--size));
        font-size: calc(.6 * var(--size));
        line-height: 0;
      }
      `,
  },
  {
    id: 10,
    component: <ToggleLemon />,
    name: "Lemon",
    html: `<div class="checkbox-wrapper-41">
      <input type="checkbox">
    </div>`,
    scss: `.checkbox-wrapper-41 {
        --size: 100px;
      }
      
      .checkbox-wrapper-41 input[type="checkbox"] {
        -webkit-appearance: none;
        width: var(--size);
        height: calc(var(--size) / 2);
        background-color: #fff;
        border: 3px solid #222;
        border-radius: 30px 100px 100px 100px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        outline: none;
        cursor: pointer;
        position: relative;
        transition: all 0.5s;
      }
      
      .checkbox-wrapper-41 input[type="checkbox"]::before {
        content: "";
        position: absolute;
        width: calc(var(--size) / 2);
        height: calc(var(--size) / 2);
        left: 0;
        top: 50%;
        transform: translateY(-50%) scale(0.7);
        border: 3px solid #222;
        border-radius: 30px 100px 100px 100px;
        background-color: #fde881;
        box-sizing: border-box;
        transition: all 0.5s;
      }
      
      .checkbox-wrapper-41 input[type="checkbox"]:checked {
        background-color: #fde881;
        border-radius: 100px 100px 30px 100px;
      }
      
      .checkbox-wrapper-41 input[type="checkbox"]:checked::before {
        left: 50%;
        background-color: #fff;
        border-radius: 100px 100px 30px 100px;
      }`,
  },
  {
    id: 11,
    component: <ToggleLightbulb />,
    name: "Lightbulb",
    html: `<input type="checkbox" class="l">`,
    scss: `.l {
        display: block;
        margin-bottom: 1.5em;
        font-size: 1em;
      }
      
      .l {
        background-color: rgba(0,0,0,0.7);
        border-radius: 0.75em;
        box-shadow: 0.125em 0.125em 0 0.125em rgba(0,0,0,0.3) inset;
        color: #fdea7b;
        display: inline-flex;
        align-items: center;
        margin: auto;
        padding: 0.15em;
        width: 3em;
        height: 1.5em;
        transition: background-color 0.1s 0.3s ease-out, box-shadow 0.1s 0.3s ease-out;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      
      .l:before, .l:after {
        content: "";
        display: block;
      }
      
      .l:before {
        background-color: #d7d7d7;
        border-radius: 50%;
        width: 1.2em;
        height: 1.2em;
        transition: background-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
        z-index: 1;
      }
      
      .l:after {
        background: linear-gradient(transparent 50%, rgba(0,0,0,0.15) 0) 0 50% / 50% 100%,
          repeating-linear-gradient(90deg,#bbb 0,#bbb,#bbb 20%,#999 20%,#999 40%) 0 50% / 50% 100%,
          radial-gradient(circle at 50% 50%,#888 25%, transparent 26%);
        background-repeat: no-repeat;
        border: 0.25em solid transparent;
        border-left: 0.4em solid #d8d8d8;
        border-right: 0 solid transparent;
        transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
        transform: translateX(-22.5%);
        transform-origin: 25% 50%;
        width: 1.2em;
        height: 1em;
        box-sizing: border-box;
      }
      /* Checked */
      .l:checked {
        background-color: rgba(0,0,0,0.45);
        box-shadow: 0.125em 0.125em 0 0.125em rgba(0,0,0,0.1) inset;
      }
      
      .l:checked:before {
        background-color: currentColor;
        transform: translateX(125%)
      }
      
      .l:checked:after {
        border-left-color: currentColor;
        transform: translateX(-2.5%) rotateY(180deg);
      }
      /* Other States */
      .l:focus {
        /* Usually an anti-A11Y practice but set to remove an annoyance just for this demo */
        outline: 0;
      }`,
  },
  {
    id: 12,
    component: <TogglePlane />,
    name: "Plane",
    html: `<label class="plane-switch">
      <input type="checkbox">
      <div>
          <div>
              <svg viewBox="0 0 13 13">
                  <path d="M1.55989957,5.41666667 L5.51582215,5.41666667 L4.47015462,0.108333333 L4.47015462,0.108333333 C4.47015462,0.0634601974 4.49708054,0.0249592654 4.5354546,0.00851337035 L4.57707145,0 L5.36229752,0 C5.43359776,0 5.50087375,0.028779451 5.55026392,0.0782711996 L5.59317877,0.134368264 L7.13659662,2.81558333 L8.29565964,2.81666667 C8.53185377,2.81666667 8.72332694,3.01067661 8.72332694,3.25 C8.72332694,3.48932339 8.53185377,3.68333333 8.29565964,3.68333333 L7.63589819,3.68225 L8.63450135,5.41666667 L11.9308317,5.41666667 C12.5213171,5.41666667 13,5.90169152 13,6.5 C13,7.09830848 12.5213171,7.58333333 11.9308317,7.58333333 L8.63450135,7.58333333 L7.63589819,9.31666667 L8.29565964,9.31666667 C8.53185377,9.31666667 8.72332694,9.51067661 8.72332694,9.75 C8.72332694,9.98932339 8.53185377,10.1833333 8.29565964,10.1833333 L7.13659662,10.1833333 L5.59317877,12.8656317 C5.55725264,12.9280353 5.49882018,12.9724157 5.43174295,12.9907056 L5.36229752,13 L4.57707145,13 L4.55610333,12.9978962 C4.51267695,12.9890959 4.48069792,12.9547924 4.47230803,12.9134397 L4.47223088,12.8704208 L5.51582215,7.58333333 L1.55989957,7.58333333 L0.891288881,8.55114605 C0.853775374,8.60544678 0.798421006,8.64327676 0.73629202,8.65879796 L0.672314689,8.66666667 L0.106844414,8.66666667 L0.0715243949,8.66058466 L0.0715243949,8.66058466 C0.0297243066,8.6457608 0.00275502199,8.60729104 0,8.5651586 L0.00593007386,8.52254537 L0.580855011,6.85813984 C0.64492547,6.67265611 0.6577034,6.47392717 0.619193545,6.28316421 L0.580694768,6.14191703 L0.00601851064,4.48064746 C0.00203480725,4.4691314 0,4.45701613 0,4.44481314 C0,4.39994001 0.0269259152,4.36143908 0.0652999725,4.34499318 L0.106916826,4.33647981 L0.672546853,4.33647981 C0.737865848,4.33647981 0.80011301,4.36066329 0.848265401,4.40322477 L0.89131128,4.45169723 L1.55989957,5.41666667 Z" fill="currentColor"></path>
              </svg>
          </div>
          <span class="street-middle"></span>
          <span class="cloud"></span>
          <span class="cloud two"></span>
      </div>
  </label>`,
    scss: `.plane-switch {
        --dot: #fff;
        --street: #6B6D76;
        --street-line: #A8AAB4;
        --street-line-mid: #C0C2C8;
        --sky-1: #60A7FA;
        --sky-2: #2F8EFC;
        --light-1: rgba(255, 233, 0, 1);
        --light-2: rgba(255, 233, 0, .3);
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      }
      
      .plane-switch input {
        display: none;
      }
      
      .plane-switch input + div {
        -webkit-mask-image: -webkit-radial-gradient(white, black);
        position: relative;
        overflow: hidden;
        width: 50px;
        height: 25px;
        padding: 1px;
        border-radius: 13px;
        background: linear-gradient(90deg, var(--street) 0%, var(--street) 25%, var(--sky-1) 75%, var(--sky-2) 100%) left var(--p, 0%) top 0;
        background-position-x: var(--p, 0%);
        background-size: 400% auto;
        transition: background-position 0.6s;
      }
      
      .plane-switch input + div:before, .plane-switch input + div:after {
        content: "";
        display: block;
        position: absolute;
        transform: translateX(var(--s, 0));
        transition: transform 0.3s;
      }
      
      .plane-switch input + div:before {
        width: 42px;
        right: 2px;
        top: 4px;
        height: 1px;
        background: var(--street-line);
        box-shadow: 0 16px 0 0 var(--street-line);
      }
      
      .plane-switch input + div:after {
        width: 2px;
        height: 2px;
        border-radius: 50%;
        left: 23px;
        top: 1px;
        -webkit-animation: lights2 2s linear infinite;
        animation: lights2 2s linear infinite;
        box-shadow: inset 0 0 0 2px var(--light-1), 0 21px 0 var(--light-1), 8px 0 0 var(--light-2), 8px 21px 0 var(--light-2), 16px 0 0 var(--light-2), 16px 21px 0 var(--light-2);
      }
      
      .plane-switch input + div span {
        display: block;
        position: absolute;
      }
      
      .plane-switch input + div span.street-middle {
        top: 12px;
        left: 21px;
        width: 3px;
        height: 1px;
        transform: translateX(var(--s, 0));
        background: var(--street-line-mid);
        box-shadow: 5px 0 0 var(--street-line-mid), 10px 0 0 var(--street-line-mid), 15px 0 0 var(--street-line-mid), 20px 0 0 var(--street-line-mid), 25px 0 0 var(--street-line-mid);
        transition: transform 0.3s;
      }
      
      .plane-switch input + div span.cloud {
        width: 12px;
        height: 4px;
        border-radius: 2px;
        background: #fff;
        position: absolute;
        top: var(--ct, 8px);
        left: 100%;
        opacity: var(--co, 0);
        transition: opacity 0.3s;
        -webkit-animation: clouds2 2s linear infinite var(--cd, 0s);
        animation: clouds2 2s linear infinite var(--cd, 0s);
      }
      
      .plane-switch input + div span.cloud:before, .plane-switch input + div span.cloud:after {
        content: "";
        position: absolute;
        transform: translateX(var(--cx, 0));
        border-radius: 50%;
        width: var(--cs, 5px);
        height: var(--cs, 5px);
        background: #fff;
        bottom: 1px;
        left: 1px;
      }
      
      .plane-switch input + div span.cloud:after {
        --cs: 6px;
        --cx: 4px;
      }
      
      .plane-switch input + div span.cloud.two {
        --ct: 20px;
        --cd: 1s;
        opacity: var(--co-2, 0);
      }
      
      .plane-switch input + div div {
        display: table;
        position: relative;
        z-index: 1;
        padding: 5px;
        border-radius: 50%;
        background: var(--dot);
        transform: translateX(var(--x, 0));
        transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.35, 1.2);
      }
      
      .plane-switch input + div div svg {
        width: 13px;
        height: 13px;
        display: block;
        color: var(--c, var(--street));
        transition: color 0.6s;
      }
      
      .plane-switch input:checked + div {
        --p: 100%;
        --x: 25px;
        --s: -50px;
        --c: var(--sky-2);
        --co: .8;
        --co-2: .6;
      }
      
      @keyframes lights2 {
        20%, 30% {
          box-shadow: inset 0 0 0 2px var(--light-2), 0 21px 0 var(--light-2), 8px 0 0 var(--light-1), 8px 21px 0 var(--light-1), 16px 0 0 var(--light-2), 16px 21px 0 var(--light-2);
        }
      
        55%, 65% {
          box-shadow: inset 0 0 0 2px var(--light-2), 0 21px 0 var(--light-2), 8px 0 0 var(--light-2), 8px 21px 0 var(--light-2), 16px 0 0 var(--light-1), 16px 21px 0 var(--light-1);
        }
      
        90%, 100% {
          box-shadow: inset 0 0 0 2px var(--light-1), 0 21px 0 var(--light-1), 8px 0 0 var(--light-2), 8px 21px 0 var(--light-2), 16px 0 0 var(--light-2), 16px 21px 0 var(--light-2);
        }
      }
      
      @keyframes clouds2 {
        97% {
          transform: translateX(-72px);
          visibility: visible;
        }
      
        98%, 100% {
          visibility: hidden;
        }
      
        99% {
          transform: translateX(-72px);
        }
      
        100% {
          transform: translateX(0);
        }
      }`,
  },
  {
    id: 13,
    component: <ToggleClick />,
    name: "Click",
    html: `<label class="switch">
      <input type="checkbox">
      <span class="slider"></span>
    </label>`,
    scss: `/* The switch - the box around the slider */
      .switch {
       font-size: 1rem;
       position: relative;
       display: inline-block;
       width: 4em;
       height: 2em;
      }
      
      /* Hide default HTML checkbox */
      .switch input {
       opacity: 0;
       width: 0;
       height: 0;
      }
      
      /* The slider */
      .slider {
       position: absolute;
       cursor: pointer;
       inset: 0;
       background-color: #eee;
       transition: 0.4s;
       border-radius: 0.5em;
       box-shadow: 0 0.2em #dfd9d9;
      }
      
      .slider:before {
       position: absolute;
       content: "";
       height: 1.5em;
       width: 1.4em;
       border-radius: 0.3em;
       left: 0.3em;
       bottom: 0.7em;
       background-color: lightsalmon;
       transition: 0.4s;
       box-shadow: 0 0.4em #bcb4b4;
      }
      
      .slider:hover::before {
       box-shadow: 0 0.2em #bcb4b4;
       bottom: 0.5em;
      }
      
      input:checked+.slider:before {
       transform: translateX(2em);
       background: lightgreen;
      }`,
  },
  {
    id: 14,
    component: <ToggleColors />,
    name: "Colors",
    html: `<label class="switch">
      <input type="checkbox" class="input__check">
      <span class="slider"></span>
    </label>`,
    scss: `/* The switch - the box around the slider */
      .switch {
        font-size: 17px;
        position: relative;
        display: inline-block;
        width: 3.5em;
        height: 2em;
        transform-style: preserve-3d;
        perspective: 500px;
        animation: toggle__animation 3s infinite;
      }
      
      .switch::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        filter: blur(20px);
        z-index: -1;
        border-radius: 50px;
        background-color: #d8ff99;
        background-image: radial-gradient(at 21% 46%, hsla(183,65%,60%,1) 0px, transparent 50%),
      radial-gradient(at 23% 25%, hsla(359,74%,70%,1) 0px, transparent 50%),
      radial-gradient(at 20% 1%, hsla(267,83%,75%,1) 0px, transparent 50%),
      radial-gradient(at 86% 87%, hsla(204,69%,68%,1) 0px, transparent 50%),
      radial-gradient(at 99% 41%, hsla(171,72%,77%,1) 0px, transparent 50%),
      radial-gradient(at 55% 24%, hsla(138,60%,62%,1) 0px, transparent 50%);
      }
      
      /* Hide default HTML checkbox */
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fdfefedc;
        transition: .4s;
        border-radius: 30px;
      }
      
      .slider:before {
        position: absolute;
        content: "";
        height: 1.4em;
        width: 1.4em;
        left: 0.3em;
        bottom: 0.35em;
        transition: .4s;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.17) 0px -10px 10px 0px inset,
           rgba(0, 0, 0, 0.09) 0px -1px 15px -8px;
        background-color: #ff99fd;
        background-image: radial-gradient(at 81% 39%, hsla(327,79%,79%,1) 0px, transparent 50%),
        radial-gradient(at 11% 72%, hsla(264,64%,79%,1) 0px, transparent 50%),
        radial-gradient(at 23% 20%, hsla(75,98%,71%,1) 0px, transparent 50%);
      }
      
      .input__check:checked + .slider {
        background-color: #17202A;
      }
      
      .input__check:checked + .slider:before {
        transform: translateX(1.5em);
      }
      
      @keyframes toggle__animation {
        0%, 100% {
          transform: translateY(-10px) rotateX(15deg) rotateY(-20deg);
        }
      
        50% {
          transform: translateY(0px) rotateX(15deg) rotateY(-20deg);
        }
      }`,
  },
  {
    id: 15,
    component: <ToggleBubble />,
    name: "Bubble",
    html: `<label class="switch">
      <input type="checkbox" class="chk">
      <span class="slider"></span>
    </label>`,
    scss: `/* The switch - the box around the slider */
      .switch {
        font-size: 17px;
        position: relative;
        display: inline-block;
        width: 1.2em;
        height: 3.3em;
      }
      
      /* Hide default HTML checkbox */
      .switch .chk {
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 5px;
      }
      
      .slider:before {
        position: absolute;
        content: "";
        height: .5em;
        width: 2.4em;
        border-radius: 5px;
        left: -0.6em;
        top: 0.2em;
        background-color: white;
        box-shadow: 0 6px 7px rgba(0,0,0,0.3);
        transition: .4s;
      }
      
      .slider:before, .slider:after {
        content: "";
        display: block;
      }
      
      .slider:after {
        background: linear-gradient(transparent 50%, rgba(255, 255, 255, 0.15) 0) 0 50% / 50% 100%,
          repeating-linear-gradient(90deg,rgb(255, 255, 255) 0,rgb(255, 255, 255),rgb(255, 255, 255) 20%,rgb(255, 255, 255) 20%,rgb(255, 255, 255) 40%) 0 50% / 50% 100%,
          radial-gradient(circle at 50% 50%,rgb(255, 255, 255) 25%, transparent 26%);
        background-repeat: no-repeat;
        border: 0.25em solid transparent;
        border-left: 0.4em solid #ffffff;
        border-right: 0 solid transparent;
        transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
        transform: translateX(-22.5%) rotate(90deg);
        transform-origin: 25% 50%;
        position: relative;
        top: 0.5em;
        left: 0.55em;
        width: 2em;
        height: 1em;
        box-sizing: border-box;
      }
      
      .chk:checked + .slider {
        background-color: limegreen;
      }
      
      .chk:focus + .slider {
        box-shadow: 0 0 1px limegreen;
      }
      
      .chk:checked + .slider:before {
        transform: translateY(2.3em);
      }
      
      .chk:checked + .slider:after {
        transform: rotateZ(90deg) rotateY(180deg) translateY(0.45em) translateX(-1.4em);
      }`,
  },
  {
    id: 16,
    component: <ToggleWhite />,
    name: "White",
    html: `<label class="label">
      <div class="toggle">
          <input class="toggle-state" type="checkbox" name="check" value="check">
          <div class="indicator"></div>
      </div>
  </label>`,
    scss: `.label {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        color: #394a56;
      }
      
      .label-text {
        margin-left: 16px;
      }
      
      .toggle {
        isolation: isolate;
        position: relative;
        height: 30px;
        width: 60px;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: -8px -4px 8px 0px #ffffff,
          8px 4px 12px 0px #d1d9e6,
          4px 4px 4px 0px #d1d9e6 inset,
          -4px -4px 4px 0px #ffffff inset;
      }
      
      .toggle-state {
        display: none;
      }
      
      .indicator {
        height: 100%;
        width: 200%;
        background: #ecf0f3;
        border-radius: 15px;
        transform: translate3d(-75%, 0, 0);
        transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
        box-shadow: -8px -4px 8px 0px #ffffff,
          8px 4px 12px 0px #d1d9e6;
      }
      
      .toggle-state:checked ~ .indicator {
        transform: translate3d(25%, 0, 0);
      }`,
  },
  {
    id: 17,
    component: <ToggleSound />,
    name: "Sound",
    html: `<input id="checkbox" type="checkbox">
      <label class="Switch" for="checkbox">
      </label>`,
    scss: `#checkbox {
        display: none;
      }
      
      .Switch {
        position: relative;
        width: 50px;
        height: 100px;
        background-color: rgb(228, 228, 228);
        border-radius: 30px;
        z-index: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.274) inset,
          -2px 0px 5px rgba(255, 255, 255, 0.411) inset;
      }
      
      .Switch::before {
        content: "";
        background-color: rgb(39, 39, 39);
        position: absolute;
        height: 80%;
        width: 5px;
        border-radius: 5px;
      }
      
      .Switch::after {
        background-color: #5e5e5e;
        border: 1px solid rgb(35, 255, 35);
        content: "";
        position: absolute;
        height: 5px;
        width: 25px;
        top: 15px;
        transition-duration: .3s;
        box-shadow: 5px 2px 5px rgba(8, 8, 8, 0.288);
        border-radius: 5px;
      }
      
      #checkbox:checked+.Switch::after {
        transform: translateY(65px);
        transition-duration: .3s;
        border: 1px solid rgb(236, 0, 0);
      }
      `,
  },
  {
    id: 18,
    component: <ToggleText />,
    name: "Text",
    html: `<label class="switch">
      <input type="checkbox">
      <span class="slider">
          <span class="circle"></span>
      </span>
  </label>`,
    scss: `/* Dark Mode Only ;) */

      /* The switch - the box around the slider */
      .switch {
        font-size: 17px;
        position: relative;
        display: inline-block;
        width: 3.5em;
        height: .5em;
      }
      
      /* Hide default HTML checkbox */
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #5B5B5B;
        transition: .4s;
        border-radius: 30px;
        display: flex;
        align-items: center;
      }
      
      .slider .circle {
        background-color: #212121;
        height: 3em;
        width: 3em;
        border-radius: 50%;
        position: absolute;
        left: 0;
        transform: translateX(-50%);
        transition: .4s;
      }
      
      .slider .circle::before {
        position: absolute;
        content: "";
        height: 2.3em;
        width: 2.3em;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(182, 182, 182);
        transition: .4s;
      }
      
      .slider .circle::after {
        content: '';
        background-color: #212121;
        height: 1.7em;
        width: 1.7em;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: .4s;
      }
      
      input:checked + .slider .circle {
        transform: translateX(2em);
        transition: .4s;
      }
      
      input:checked + .slider .circle::before {
        background-color: #e1e1e1;
        transition: .4s;
      }
      
      input:checked + .slider .circle::after {
        width: 0;
        height: 0;
        transition: .4s;
      }`,
  },
  {
    id: 19,
    component: <ToggleMoon />,
    name: "Moon",
    html: `<label class="switch">
      <input type="checkbox">
      <span class="slider"></span>
    </label>`,
    scss: `.switch {
        --light: #ffffff;
        --dark: #00000080;
        font-size: 20px;
        position: relative;
        display: inline-block;
        width: 3.5em;
        height: 2.1em;
        transform: skew(-10deg);
      }
      
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--light);
        border: 1px solid var(--dark);
        box-shadow: 5px 5px 5px var(--dark);
        transition: .4s;
        border-radius: 30px;
      }
      
      .slider:before {
        position: absolute;
        content: "☀";
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.4em;
        width: 1.4em;
        border-radius: 20px;
        left: 0.2em;
        bottom: 0.5em;
        color: var(--dark);
        transition: .4s;
        transform: scale(1.2);
      }
      
      .switch input:checked + .slider:before {
        transform: translateX(1.5em) scale(1.2);
        ;
        content: "☽";
        color: var(--light);
      }
      
      .switch input:checked + .slider {
        background-color: var(--dark);
      }`,
  },
  {
    id: 20,
    component: <ToggleSum />,
    name: "Sum",
    html: `<label class="switch">
      <input class="chk" type="checkbox">
      <span class="slider"></span>
    </label>`,
    scss: `/* The switch - the box around the slider */
      .switch {
        font-size: 17px;
        position: relative;
        display: inline-block;
        width: 2em;
        height: 2em;
      }
      
      /* Hide default HTML checkbox */
      .switch .chk {
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 50%;
      }
      
      .slider:before {
        position: absolute;
        content: "";
        height: 1.4em;
        width: 1.4em;
        border-radius: 2.5px;
        left: 0.3em;
        bottom: 0.3em;
        background-color: white;
        transition: .4s;
        scale: 0;
      }
      
      .chk:checked + .slider {
        background-color: limegreen;
        transform: scale(0.7);
        border-radius: 50%;
      }
      
      .chk:checked + .slider:before {
        transform: rotateZ(360deg);
        scale: 1;
        border-radius: 50%;
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
