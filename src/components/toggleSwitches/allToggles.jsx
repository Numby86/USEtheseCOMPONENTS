import ToggleSun from "./ToggleSun/ToggleSun";
import TogglePower from "./TogglePower/TogglePower";
import ToggleOnOff from "./ToggleOnOff/ToggleOnOff";

export const allToggles = [
        {
        id: 1, 
        component: <ToggleSun/>, 
        name: 'Sun', 
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
          }`
    }, 
    {
        id: 2, 
        component: <TogglePower/>, 
        name: 'Power', 
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
        
        `
    }, 
    {
        id: 3, 
        component: <ToggleOnOff/>, 
        name: 'OnOff', 
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
        }`
    }, 
]
