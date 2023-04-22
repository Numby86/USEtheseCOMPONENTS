import ButtonCopy from "./ButtonCopy/ButtonCopy";
import ButtonGlitch from "./ButtonGlitch/ButtonGlitch";
import ButtonNeon from "./ButtonNeon/ButtonNeon";

export const allButtons = [
  {
    id: 1,
    component: <ButtonGlitch />,
    name: "Glitch", 
    html: `<button className='glitch'> GLITCH </button>`, 
    scss: `.glitch, .glitch::after {
      padding: 10px 50px;
      font-size: 20px;
      border: none;
      border-radius: 5px;
      color: white;
      background-color: transparent;
      position: relative;
  }
  
  .glitch::after {
      --move1: inset(50% 50% 50% 50%);
      --move2: inset(31% 0 40% 0);
      --move3: inset(39% 0 15% 0);
      --move4: inset(45% 0 40% 0);
      --move5: inset(45% 0 6% 0);
      --move6: inset(14% 0 61% 0);
      clip-path: var(--move1);
      content: 'GLITCH';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
  }
  
  .glitch:hover::after {
      animation: glitch_4011 1s;
      text-shadow: 10 10px 10px black;
      animation-timing-function: steps(2, end);
      text-shadow: -3px -3px 0px #1df2f0, 3px 3px 0px #E94BE8;
      background-color: transparent;
      border: 3px solid rgb(0, 255, 213);
  }
  
  .glitch:hover {
      text-shadow: -1px -1px 0px #1df2f0, 1px 1px 0px #E94BE8;
  }
  
  .glitch:hover {
      background-color: transparent;
      border: 1px solid rgb(0, 255, 213);
      box-shadow: 0px 10px 10px -10px rgb(0, 255, 213);
  }
  
  
      
    @keyframes glitch_4011 {
      0% {
        clip-path: var(--move1);
        transform: translate(0px,-10px);
      }
    
      10% {
        clip-path: var(--move2);
        transform: translate(-10px,10px);
      }
    
      20% {
        clip-path: var(--move3);
        transform: translate(10px,0px);
      }
    
      30% {
        clip-path: var(--move4);
        transform: translate(-10px,10px);
      }
    
      40% {
        clip-path: var(--move5);
        transform: translate(10px,-10px);
      }
    
      50% {
        clip-path: var(--move6);
        transform: translate(-10px,10px);
      }
    
      60% {
        clip-path: var(--move1);
        transform: translate(10px,-10px);
      }
    
      70% {
        clip-path: var(--move3);
        transform: translate(-10px,10px);
      }
    
      80% {
        clip-path: var(--move2);
        transform: translate(10px,-10px);
      }
    
      90% {
        clip-path: var(--move4);
        transform: translate(-10px,10px);
      }
    
      100% {
        clip-path: var(--move1);
        transform: translate(0);
      }
    }
    `
  },
  {
    id: 2,
    component: <ButtonNeon />,
    name: "Neon", 
    html: `<button className="bottone1"><strong> BUTTON </strong></button>`, 
    scss: `.bottone1 {
      padding-left: 33px;
      padding-right: 33px;
      padding-bottom: 16px;
      padding-top: 16px;
      border-radius: 9px;
      background: #d5f365;
      border: none;
      font-family: inherit;
      text-align: center;
      cursor: pointer;
      transition: 0.4s;
  }
     
  .bottone1:hover {
  box-shadow: 7px 5px 56px -14px #C3D900;
  }
     
  .bottone1:active {
  transform: scale(0.97);
  box-shadow: 7px 5px 56px -10px #C3D900;
  }`
  },
  {
    id: 3,
    component: <ButtonCopy />,
    name: "Copy",
    html: `<button className='copy'> Button </button>`,
    scss: `.copy {
      font-family: monospace;
      background-color: #f3f7fe;
      color: #3b82f6;
      border: none;
      border-radius: 8px;
      width: 100px;
      height: 45px;
      transition: .3s;
    }
  
  .copy:hover {
    background-color: #3b82f6;
    box-shadow: 0 0 0 5px #3b83f65f;
    color: #fff;
  }`,
  },
];
