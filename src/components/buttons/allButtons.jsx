import ButtonCopy from "./ButtonCopy/ButtonCopy";
import ButtonFuture from "./ButtonFuture/ButtonFuture";
import ButtonGlitch from "./ButtonGlitch/ButtonGlitch";
import ButtonNeon from "./ButtonNeon/ButtonNeon";
import ButtonScaner from "./ButtonScaner/ButtonScaner";
import ButtonTricolor from "./ButtonTricolor/ButtonTricolor";
import ButtonBlur from "./ButtonBlur/ButtonBlur";
import ButtonSpace from "./ButtonSpace/ButtonSpace";
import ButtonRainbow from "./ButtonRainbow/ButtonRainbow";
import ButtonAniNeon from "./ButtonAniNeon/ButtonAniNeon";
import ButtonBatman from "./ButtonBatman/ButtonBatman";
import ButtonCrush from "./ButtonCrush/ButtonCrush";
import ButtonAirport from "./ButtonAirport/ButtonAirport";
import ButtonStars from "./ButtonStars/ButtonStars";
import ButtonFlowers from "./ButtonFlowers/ButtonFlowers";
import ButtonDraw from "./ButtonDraw/ButtonDraw";
import ButtonCross from "./ButtonCross/ButtonCross";
import ButtonHeart from "./ButtonHeart/ButtonHeart";
import ButtonMove from "./ButtonMove/ButtonMove";
import ButtonLamp from "./ButtonLamp/ButtonLamp";

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
    `,
  },
  {
    id: 2,
    component: <ButtonNeon />,
    name: "Neon",
    html: `<button> Button
    </button>`,
    scss: `button {
      --glow-color: rgb(217, 176, 255);
      --glow-spread-color: rgba(191, 123, 255, 0.781);
      --enhanced-glow-color: rgb(231, 206, 255);
      --btn-color: rgb(100, 61, 136);
      border: .25em solid var(--glow-color);
      padding: 1em 3em;
      color: var(--glow-color);
      font-size: 15px;
      font-weight: bold;
      background-color: var(--btn-color);
      border-radius: 1em;
      outline: none;
      box-shadow: 0 0 1em .25em var(--glow-color),
             0 0 4em 1em var(--glow-spread-color),
             inset 0 0 .75em .25em var(--glow-color);
      text-shadow: 0 0 .5em var(--glow-color);
      position: relative;
      transition: all 0.3s;
     }
     
     button::after {
      pointer-events: none;
      content: "";
      position: absolute;
      top: 120%;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: var(--glow-spread-color);
      filter: blur(2em);
      opacity: .7;
      transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
     }
     
     button:hover {
      color: var(--btn-color);
      background-color: var(--glow-color);
      box-shadow: 0 0 1em .25em var(--glow-color),
             0 0 4em 2em var(--glow-spread-color),
             inset 0 0 .75em .25em var(--glow-color);
     }
     
     button:active {
      box-shadow: 0 0 0.6em .25em var(--glow-color),
             0 0 2.5em 2em var(--glow-spread-color),
             inset 0 0 .5em .25em var(--glow-color);
     }`,
  },
  {
    id: 3,
    component: <ButtonCopy />,
    name: "Copy",
    html: `
    <button class="buttonDownload">Download</button>`,
    scss: `.buttonDownload {
      display: inline-block;
      position: relative;
      padding: 10px 25px;
      background-color: #4CC713;
      color: white;
      font-family: sans-serif;
      text-decoration: none;
      font-size: 0.9em;
      text-align: center;
      text-indent: 15px;
      border: none;
     }
     
     .buttonDownload:hover {
      background-color: #45a21a;
      color: white;
     }
     
     .buttonDownload:before, .buttonDownload:after {
      content: ' ';
      display: block;
      position: absolute;
      left: 15px;
      top: 52%;
     }
     
     .buttonDownload:before {
      width: 10px;
      height: 2px;
      border-style: solid;
      border-width: 0 2px 2px;
     }
     
     .buttonDownload:after {
      width: 0;
      height: 0;
      margin-left: 3px;
      margin-top: -7px;
      border-style: solid;
      border-width: 4px 4px 0 4px;
      border-color: transparent;
      border-top-color: inherit;
      animation: downloadArrow 1s linear infinite;
      animation-play-state: paused;
     }
     
     .buttonDownload:hover:before {
      border-color: #cdefbd;
     }
     
     .buttonDownload:hover:after {
      border-top-color: #cdefbd;
      animation-play-state: running;
     }
     
     @keyframes downloadArrow {
      0% {
       margin-top: -7px;
       opacity: 1;
      }
     
      0.001% {
       margin-top: -15px;
       opacity: 0.4;
      }
     
      50% {
       opacity: 1;
      }
     
      100% {
       margin-top: 0;
       opacity: 0.4;
      }
     }`,
  },
  {
    id: 4,
    component: <ButtonScaner />,
    name: "Scaner",
    html: `<button data-text="Awesome" class="button">
        <span class="actual-text">&nbsp;uiverse&nbsp;</span>
        <span class="hover-text" aria-hidden="true">&nbsp;uiverse&nbsp;</span>
    </button>`,
    scss: `/* === removing default button style ===*/
        .button {
          margin: 0;
          height: auto;
          background: transparent;
          padding: 0;
          border: none;
        }
        
        /* button styling */
        .button {
          --border-right: 6px;
          --text-stroke-color: rgba(255,255,255,0.6);
          --animation-color: #37FF8B;
          --fs-size: 2em;
          letter-spacing: 3px;
          text-decoration: none;
          font-size: var(--fs-size);
          font-family: "Arial";
          position: relative;
          text-transform: uppercase;
          color: transparent;
          -webkit-text-stroke: 1px var(--text-stroke-color);
        }
        /* this is the text, when you hover on button */
        .hover-text {
          position: absolute;
          box-sizing: border-box;
          content: attr(data-text);
          color: var(--animation-color);
          width: 0%;
          inset: 0;
          border-right: var(--border-right) solid var(--animation-color);
          overflow: hidden;
          transition: 0.5s;
          -webkit-text-stroke: 1px var(--animation-color);
        }
        /* hover */
        .button:hover .hover-text {
          width: 100%;
          filter: drop-shadow(0 0 23px var(--animation-color))
        }`,
  },
  {
    id: 5,
    component: <ButtonFuture />,
    name: "Future",
    html: `<button className="cta">
        <span className="spanFuture">NEXT</span>
        <span className="second">
          <svg width="50px" height="20px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path className="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
              <path className="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
              <path className="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
            </g>
          </svg>
        </span> 
    </button>`,
    scss: `.cta {
          display: flex;
          padding: 11px 33px;
          text-decoration: none;
          font-family: 'Poppins', sans-serif;
          font-size: 25px;
          color: white;
          background: #6225E6;
          transition: 1s;
          box-shadow: 6px 6px 0 black;
          transform: skewX(-15deg);
          border: none;
        }
        
        .cta:focus {
          outline: none;
        }
        
        .cta:hover {
          transition: 0.5s;
          box-shadow: 10px 10px 0 #FBC638;
        }
        
        .cta .second {
          transition: 0.5s;
          margin-right: 0px;
        }
        
        .cta:hover  .second {
          transition: 0.5s;
          margin-right: 45px;
        }
        
        .span {
          transform: skewX(15deg)
        }
        
        .second {
          width: 20px;
          margin-left: 30px;
          position: relative;
          top: 12%;
        }
        
        .one {
          transition: 0.4s;
          transform: translateX(-60%);
        }
        
        .two {
          transition: 0.5s;
          transform: translateX(-30%);
        }
        
        .cta:hover .three {
          animation: color_anim 1s infinite 0.2s;
        }
        
        .cta:hover .one {
          transform: translateX(0%);
          animation: color_anim 1s infinite 0.6s;
        }
        
        .cta:hover .two {
          transform: translateX(0%);
          animation: color_anim 1s infinite 0.4s;
        }
        
        @keyframes color_anim {
          0% {
            fill: white;
          }
        
          50% {
            fill: #FBC638;
          }
        
          100% {
            fill: white;
          }
        }`,
  },
  {
    id: 6,
    component: <ButtonTricolor />,
    name: "btnTricolor",
    html: `<button class="btn">Hover Me!
        </button>`,
    scss: `.btn {
          width: 130px;
          height: 40px;
          font-size: 1.1em;
          cursor: pointer;
          background-color: #171717;
          color: #fff;
          border: none;
          border-radius: 5px;
          transition: all .4s;
         }
         
         .btn:hover {
          border-radius: 5px;
          transform: translateY(-10px);
          box-shadow: 0 7px 0 -2px #f85959,
           0 15px 0 -4px #39a2db,
           0 16px 10px -3px #39a2db;
         }
         
         .btn:active {
          transition: all 0.2s;
          transform: translateY(-5px);
          box-shadow: 0 2px 0 -2px #f85959,
           0 8px 0 -4px #39a2db,
           0 12px 10px -3px #39a2db;
         }`,
  },
  {
    id: 7,
    component: <ButtonBlur />,
    name: "Blur",
    html: `<button class="bn">Hover!</button>`,
    scss: `button {
          --border-radius: 25px;
          --border-width: 7px;
          appearance: none;
          position: relative;
          padding: 1em 2em;
          border: 0;
          background-color: #212121;
          font-family: "Roboto", Arial, "Segoe UI", sans-serif;
          font-size: 18px;
          font-weight: 500;
          color: #ffff;
          z-index: 2;
        }
        
        button::after {
          --m-i: linear-gradient(#000, #000);
          --m-o: content-box, padding-box;
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          padding: var(--border-width);
          background-image: conic-gradient(
            #ff0080,
            #ff0080,
            #ff0080,
            #ff0080,
            #ff0080,
            #ff0080,
            #ff0080
          );
          -webkit-mask-image: var(--m-i), var(--m-i);
          mask-image: var(--m-i), var(--m-i);
          -webkit-mask-origin: var(--m-o);
          mask-origin: var(--m-o);
          mask-clip: var(--m-o);
          mask-composite: exclude;
          -webkit-mask-composite: destination-out;
          filter: hue-rotate(0);
          animation: rotate-hue634 linear 500ms infinite;
          animation-play-state: paused;
          border-radius: 20px;
          border-color: #000;
        }
        
        button:hover::after {
          animation-play-state: running;
          border-radius: 10px;
        }
        
        @keyframes rotate-hue634 {
          to {
            filter: hue-rotate(1turn);
          }
        }
        
        button,
        button::after {
          box-sizing: border-box;
          border-radius: 20px;
        }
        
        button:active {
          --border-width: 5px;
        }
        
        .bn {
          padding: 0.9em 1.6em;
          border: none;
          outline: none;
          color: #FFF;
          font-family: inherit;
          font-weight: 500;
          font-size: 17px;
          cursor: pointer;
          position: relative;
          z-index: 0;
          border-radius: 32px;
        }
        
        .bn::after {
          content: "";
          z-index: -1;
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgb(46, 46, 46);
          left: 0;
          top: 0;
          border-radius: 10px;
        }
        
        .bn::before {
          content: "";
          background: linear-gradient(
            45deg,
            #07d888, #e40851, #2f00ff, #00ff37,
              #ec0808, #2600ff, #0bd157, #2f00ff
        );
          position: absolute;
          top: -2px;
          left: -2px;
          background-size: 600%;
          z-index: -1;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          filter: blur(8px);
          animation: glowing345 20s linear infinite;
          transition: opacity .3s ease-in-out;
          border-radius: 20px;
          opacity: 0;
        }
        
        @keyframes glowing345 {
          0% {
            background-position: 0 0;
          }
        
          50% {
            background-position: 400% 0;
          }
        
          100% {
            background-position: 0 0;
          }
        }
        
        .bn:hover::before {
          opacity: 1;
        }
        
        .bn:active:after {
          background: transparent;
        }
        
        .bn:active {
          color: #000;
          font-weight: bold;
        }`,
  },
  {
    id: 8,
    component: <ButtonSpace />,
    name: "Space",
    html: `<button class="btn" type="button">
        <strong>SPACE</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>
      
        <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </button>
      `,
    scss: `.btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 13rem;
          height: 3rem;
          background-size: 300% 300%;
          backdrop-filter: blur(1rem);
          border-radius: 5rem;
          transition: 0.5s;
          animation: gradient_301 5s ease infinite;
          border: double 4px transparent;
          background-image: linear-gradient(#212121, #212121),  linear-gradient(137.48deg, #ffdb3b 10%,#FE53BB 45%, #8F51EA 67%, #0044ff 87%);
          background-origin: border-box;
          background-clip: content-box, border-box;
        }
        
        #container-stars {
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          overflow: hidden;
          transition: 0.5s;
          backdrop-filter: blur(1rem);
          border-radius: 5rem;
        }
        
        strong {
          z-index: 2;
          font-family: 'Avalors Personal Use';
          font-size: 12px;
          letter-spacing: 5px;
          color: #FFFFFF;
          text-shadow: 0 0 4px white;
        }
        
        #glow {
          position: absolute;
          display: flex;
          width: 12rem;
        }
        
        .circle {
          width: 100%;
          height: 30px;
          filter: blur(2rem);
          animation: pulse_3011 4s infinite;
          z-index: -1;
        }
        
        .circle:nth-of-type(1) {
          background: rgba(254, 83, 186, 0.636);
        }
        
        .circle:nth-of-type(2) {
          background: rgba(142, 81, 234, 0.704);
        }
        
        .btn:hover #container-stars {
          z-index: 1;
          background-color: #212121;
        }
        
        .btn:hover {
          transform: scale(1.1)
        }
        
        .btn:active {
          border: double 4px #FE53BB;
          background-origin: border-box;
          background-clip: content-box, border-box;
          animation: none;
        }
        
        .btn:active .circle {
          background: #FE53BB;
        }
        
        #stars {
          position: relative;
          background: transparent;
          width: 200rem;
          height: 200rem;
        }
        
        #stars::after {
          content: "";
          position: absolute;
          top: -10rem;
          left: -100rem;
          width: 100%;
          height: 100%;
          animation: animStarRotate 90s linear infinite;
        }
        
        #stars::after {
          background-image: radial-gradient(#ffffff 1px, transparent 1%);
          background-size: 50px 50px;
        }
        
        #stars::before {
          content: "";
          position: absolute;
          top: 0;
          left: -50%;
          width: 170%;
          height: 500%;
          animation: animStar 60s linear infinite;
        }
        
        #stars::before {
          background-image: radial-gradient(#ffffff 1px, transparent 1%);
          background-size: 50px 50px;
          opacity: 0.5;
        }
        
        @keyframes animStar {
          from {
            transform: translateY(0);
          }
        
          to {
            transform: translateY(-135rem);
          }
        }
        
        @keyframes animStarRotate {
          from {
            transform: rotate(360deg);
          }
        
          to {
            transform: rotate(0);
          }
        }
        
        @keyframes gradient_301 {
          0% {
            background-position: 0% 50%;
          }
        
          50% {
            background-position: 100% 50%;
          }
        
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes pulse_3011 {
          0% {
            transform: scale(0.75);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
          }
        
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
          }
        
          100% {
            transform: scale(0.75);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
        }`,
  },
  {
    id: 9,
    component: <ButtonRainbow />,
    name: "Rainbow",
    html: `<button>
        Join now
    </button>`,
    scss: `/* this button is inspired from this -- https://www.newline.co/pricing */
        button {
          --width: 150px;
          --timing: 2s;
          border: 0;
          width: var(--width);
          padding-block: 1em;
          color: #fff;
          font-weight: bold;
          font-size: 1em;
          background: rgb(64, 192, 87);
          transition: all 0.2s;
          border-radius: 3px;
        }
        
        button:hover {
          background-image: linear-gradient(to right, rgb(250, 82, 82), rgb(250, 82, 82) 16.65%, rgb(190, 75, 219) 16.65%, rgb(190, 75, 219) 33.3%, rgb(76, 110, 245) 33.3%, rgb(76, 110, 245) 49.95%, rgb(64, 192, 87) 49.95%, rgb(64, 192, 87) 66.6%, rgb(250, 176, 5) 66.6%, rgb(250, 176, 5) 83.25%, rgb(253, 126, 20) 83.25%, rgb(253, 126, 20) 100%, rgb(250, 82, 82) 100%);
          animation: var(--timing) linear dance6123 infinite;
          transform: scale(1.1) translateY(-1px);
        }
        
        @keyframes dance6123 {
          to {
            background-position: var(--width);
          }
        }
        
        `,
  },
  {
    id: 10,
    component: <ButtonAniNeon />,
    name: "AniNeon ",
    html: `<button>
        <span></span>
        <span></span>
        <span></span>
        <span></span> Hover me
      </button>`,
    scss: `button {
          position: relative;
          padding: 1em 1.8em;
          outline: none;
          border: 1px solid #303030;
          background: #212121;
          color: #ae00ff;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 15px;
          overflow: hidden;
          transition: 0.2s;
          border-radius: 20px;
          cursor: pointer;
          font-weight: bold;
         }
         
         button:hover {
          box-shadow: 0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;
          transition-delay: 0.6s;
         }
         
         button span {
          position: absolute;
         }
         
         button span:nth-child(1) {
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ae00ff);
         }
         
         button:hover span:nth-child(1) {
          left: 100%;
          transition: 0.7s;
         }
         
         button span:nth-child(3) {
          bottom: 0;
          right: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #001eff);
         }
         
         button:hover span:nth-child(3) {
          right: 100%;
          transition: 0.7s;
          transition-delay: 0.35s;
         }
         
         button span:nth-child(2) {
          top: -100%;
          right: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, transparent, #ae00ff);
         }
         
         button:hover span:nth-child(2) {
          top: 100%;
          transition: 0.7s;
          transition-delay: 0.17s;
         }
         
         button span:nth-child(4) {
          bottom: -100%;
          left: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(360deg, transparent, #001eff);
         }
         
         button:hover span:nth-child(4) {
          bottom: 100%;
          transition: 0.7s;
          transition-delay: 0.52s;
         }
         
         button:active {
          background: #ae00af;
          background: linear-gradient(to top right, #ae00af, #001eff);
          color: #bfbfbf;
          box-shadow: 0 0 8px #ae00ff, 0 0 8px #001eff, 0 0 8px #ae00ff;
          transition: 0.1s;
         }
         
         button:active span:nth-child(1) 
         span:nth-child(2) 
         span:nth-child(2) 
         span:nth-child(2) {
          transition: none;
          transition-delay: none;
         }
         `,
  },
  {
    id: 11,
    component: <ButtonBatman />,
    name: "Batman",
    html: `<button>
        <span>PLAY NOW</span>
      </button>`,
    scss: `button {
          border: none;
          position: relative;
          width: 200px;
          height: 73px;
          padding: 0;
          z-index: 2;
          -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
          mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
          -webkit-mask-size: 100%;
          cursor: pointer;
          background-color: transparent;
          transform: translateY(8px)
         }
         
         button:after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          box-shadow: 0px 0 0 0 white;
          transition: all 2s ease;
         }
         
         button:hover:after {
          box-shadow: 0px -13px 56px 12px #ffffffa6;
         }
         
         button span {
          position: absolute;
          width: 100%;
          font-size: 15px;
          font-weight: 100;
          left: 50%;
          top: 39%;
          letter-spacing: 3px;
          text-align: center;
          transform: translate(-50%,-50%);
          color: black;
          transition: all 2s ease;
         }
         
         button:hover span {
          color: white;
         }
         
         button:before {
          content: '';
          position: absolute;
          width: 0;
          height: 100%;
          background-color: black;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: all 1s ease;
         }
         
         button:hover:before {
          width: 100%;
         }
         
         `,
  },
  {
    id: 12,
    component: <ButtonCrush />,
    name: "Crush",
    html: `<button>
        <p>Crush!</p>
      </button>`,
    scss: `button {
          border: none;
          width: 140px;
          height: 50px;
          color: #fff;
          z-index: 1;
          display: flex;
          background: #000;
          position: relative;
         }
         
         button p {
          margin: 0 auto;
          align-self: center;
          font-size: 17px;
          font-weight: bold;
          text-align: center;
         }
         
         button::after {
          position: absolute;
          content: "";
          width: 100%;
          z-index: -1;
          height: 10%;
          bottom: 0;
          clip-path: polygon(0% 74%, 4% 75%, 8% 76%, 11% 77%, 15% 78%, 20% 78%, 25% 77%, 32% 77%, 37% 75%, 40% 74%, 43% 74%, 46% 73%, 52% 72%, 57% 72%, 65% 74%, 66% 75%, 71% 78%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100%);
          background: #8792eb;
          transition: 0.2s ease;
         }
         
         button::before {
          position: absolute;
          content: "";
         /*   bottom: 80%; */
          transform: rotate(180deg);
          width: 100%;
          height: 10%;
          transition: 0.2s ease;
         /*   bottom:; */
          z-index: -1;
          clip-path: polygon(0% 74%, 4% 75%, 8% 76%, 11% 77%, 15% 78%, 20% 78%, 25% 77%, 32% 77%, 37% 75%, 40% 74%, 43% 74%, 46% 73%, 52% 72%, 57% 72%, 65% 74%, 66% 75%, 71% 78%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100%);
          background: #8792eb;
         }
         
         button:hover::after {
          clip-path: polygon(0 30%, 9% 34%, 7% 39%, 11% 43%, 13% 33%, 17% 30%, 24% 34%, 25% 35%, 30% 31%, 30% 38%, 39% 33%, 35% 43%, 43% 45%, 55% 46%, 65% 74%, 67% 66%, 81% 57%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100%);
          height: 80%;
         }
         
         button:hover::before {
          clip-path: polygon(0 30%, 9% 34%, 7% 39%, 11% 43%, 13% 33%, 17% 30%, 24% 34%, 25% 35%, 30% 31%, 30% 38%, 39% 33%, 35% 43%, 43% 45%, 55% 46%, 65% 74%, 67% 66%, 81% 57%, 75% 82%, 81% 86%, 83% 88%, 88% 91%, 90% 94%, 94% 96%, 98% 98%, 100% 100%, 82% 100%, 0 100%);
          height: 80%;
         }
         
         `,
  },
  {
    id: 13,
    component: <ButtonAirport />,
    name: "Airport",
    html: `<button className="ui-btn">
        <span className='ui-span'>
          Button 
        </span>
      </button>`,
    scss: `.ui-btn {
          --btn-default-bg: rgb(100, 100, 100);
          --btn-padding: 15px 20px;
          --btn-hover-bg: rgb(90, 90, 90);
          --btn-transition: .3s;
          --btn-letter-spacing: .1rem;
          --btn-animation-duration: 1.2s;
          --btn-shadow-color: rgba(0, 0, 0, 0.137);
          --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
          --hover-btn-color: #FAC921;
          --default-btn-color: #fff;
          --font-size: 16px;
          /* 👆 this field should not be empty */
          --font-weight: 600;
          --font-family: Menlo,Roboto Mono,monospace;
          /* 👆 this field should not be empty */
        }
        
        /* button settings 👆 */
        
        .ui-btn {
          box-sizing: border-box;
          padding: var(--btn-padding);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--default-btn-color);
          font: var(--font-weight) var(--font-size) var(--font-family);
          background: var(--btn-default-bg);
          border: none;
          cursor: pointer;
          transition: var(--btn-transition);
          overflow: hidden;
          box-shadow: var(--btn-shadow);
        }
        
        .ui-btn .ui-span {
          letter-spacing: var(--btn-letter-spacing);
          transition: var(--btn-transition);
          box-sizing: border-box;
          position: relative;
          background: inherit;
        }
        
        .ui-btn .ui-span::before {
          box-sizing: border-box;
          position: absolute;
          content: "";
          background: inherit;
        }
        
        .ui-btn:hover, .ui-btn:focus {
          background: var(--btn-hover-bg);
        }
        
        .ui-btn:hover .ui-span, .ui-btn:focus .ui-span {
          color: var(--hover-btn-color);
        }
        
        .ui-btn:hover .ui-span::before, .ui-btn:focus .ui-span::before {
          animation: chitchat linear both var(--btn-animation-duration);
        }
        
        @keyframes chitchat {
          0% {
            content: "#";
          }
        
          5% {
            content: ".";
          }
        
          10% {
            content: "^{";
          }
        
          15% {
            content: "-!";
          }
        
          20% {
            content: "#$_";
          }
        
          25% {
            content: "№:0";
          }
        
          30% {
            content: "#3+.7";
          }
        
          35% {
            content: "@}-?";
          }
        
          40% {
            content: "?{4@%";
          }
        
          45% {
            content: "=.,^!";
          }
        
          50% {
            content: "?2@%";
          }
        
          55% {
            content: "r;1}]";
          }
        
          60% {
            content: "?{%:%";
            right: 0;
          }
        
          65% {
            content: "|{f[4";
            right: 0;
          }
        
          70% {
            content: "{4%0%";
            right: 0;
          }
        
          75% {
            content: "'1_0<";
            right: 0;
          }
        
          80% {
            content: "{0%";
            right: 0;
          }
        
          85% {
            content: "]>'";
            right: 0;
          }
        
          90% {
            content: "4";
            right: 0;
          }
        
          95% {
            content: "2";
            right: 0;
          }
        
          100% {
            content: "";
            right: 0;
          }
        }`,
  },
  {
    id: 14,
    component: <ButtonStars />,
    name: "btnStars",
    html: `<div class="sp">

        <button class="sparkle-button">
          <span class="spark"></span>
          
          <span class="backdrop"></span>
          <svg class="sparkle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <span class="text">Generate Site</span>
        </button>
        <div class="bodydrop"></div>
        <span aria-hidden="true" class="particle-pen">
          <svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg><svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg><svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg><svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg><svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg><svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg><svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg><svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg><svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg><svg class="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
      </div>`,
    scss: `.sparkle-button {
          --active: 0;
          --bg: radial-gradient(
              40% 50% at center 100%,
              hsl(270 calc(var(--active) * 97%) 72% / var(--active)),
              transparent
            ),
            radial-gradient(
              80% 100% at center 120%,
              hsl(260 calc(var(--active) * 97%) 70% / var(--active)),
              transparent
            ),
            hsl(260 calc(var(--active) * 97%) calc((var(--active) * 44%) + 12%));
          background: var(--bg);
          font-size: 1.2rem;
          font-weight: 500;
          border: 0;
          cursor: pointer;
          padding: 1em 1em;
          display: flex;
          align-items: center;
          gap: 0.25em;
          white-space: nowrap;
          border-radius: 100px;
          position: relative;
          box-shadow: 0 0 calc(var(--active) * 3em) calc(var(--active) * 1em) hsl(260 97% 61% / 0.75),
            0 0em 0 0 hsl(260 calc(var(--active) * 97%) calc((var(--active) * 50%) + 30%)) inset,
            0 -0.05em 0 0 hsl(260 calc(var(--active) * 97%) calc(var(--active) * 60%)) inset;
          transition: box-shadow var(--transition), scale var(--transition), background var(--transition);
          scale: calc(1 + (var(--active) * 0.1));
          transition: .3s;
        }
        
        .sparkle-button:active {
          scale: 1;
          transition: .3s;
        }
        
        .sparkle path {
          color: hsl(0 0% calc((var(--active, 0) * 70%) + var(--base)));
          transform-box: fill-box;
          transform-origin: center;
          fill: currentColor;
          stroke: currentColor;
          animation-delay: calc((var(--transition) * 1.5) + (var(--delay) * 1s));
          animation-duration: 0.6s;
          transition: color var(--transition);
        }
        
        .sparkle-button:is(:hover, :focus-visible) path {
          animation-name: bounce;
        }
        
        @keyframes bounce {
          35%, 65% {
            scale: var(--scale);
          }
        }
        
        .sparkle path:nth-of-type(1) {
          --scale: 0.5;
          --delay: 0.1;
          --base: 40%;
        }
        
        .sparkle path:nth-of-type(2) {
          --scale: 1.5;
          --delay: 0.2;
          --base: 20%;
        }
        
        .sparkle path:nth-of-type(3) {
          --scale: 2.5;
          --delay: 0.35;
          --base: 30%;
        }
        
        .sparkle-button:before {
          content: "";
          position: absolute;
          inset: -0.2em;
          z-index: -1;
          border: 0.25em solid hsl(260 97% 50% / 0.5);
          border-radius: 100px;
          opacity: var(--active, 0);
          transition: opacity var(--transition);
        }
        
        .spark {
          position: absolute;
          inset: 0;
          border-radius: 100px;
          rotate: 0deg;
          overflow: hidden;
          mask: linear-gradient(white, transparent 50%);
          animation: flip calc(var(--spark) * 2) infinite steps(2, end);
        }
        
        @keyframes flip {
          to {
            rotate: 360deg;
          }
        }
        
        .spark:before {
          content: "";
          position: absolute;
          width: 200%;
          aspect-ratio: 1;
          top: 0%;
          left: 50%;
          z-index: -1;
          translate: -50% -15%;
          rotate: 0;
          transform: rotate(-90deg);
          opacity: calc((var(--active)) + 0.4);
          background: conic-gradient(
            from 0deg,
            transparent 0 340deg,
            white 360deg
          );
          transition: opacity var(--transition);
          animation: rotate var(--spark) linear infinite both;
        }
        
        .spark:after {
          content: "";
          position: absolute;
          inset: var(--cut);
          border-radius: 100px;
        }
        
        .backdrop {
          position: absolute;
          inset: var(--cut);
          background: var(--bg);
          border-radius: 100px;
          transition: background var(--transition);
        }
        
        @keyframes rotate {
          to {
            transform: rotate(90deg);
          }
        }
        
        @supports(selector(:has(:is(+ *)))) {
          body:has(button:is(:hover, :focus-visible)) {
            --active: 1;
            --play-state: running;
          }
        
          .bodydrop {
            display: none;
          }
        }
        
        .sparkle-button:is(:hover, :focus-visible) ~ :is(.bodydrop, .particle-pen) {
          --active: 1;
          --play-state: runnin;
        }
        
        .sparkle-button:is(:hover, :focus-visible) {
          --active: 1;
          --play-state: running;
        }
        
        .sp {
          position: relative;
        }
        
        .particle-pen {
          position: absolute;
          width: 200%;
          aspect-ratio: 1;
          top: 50%;
          left: 50%;
          translate: -50% -50%;
          -webkit-mask: radial-gradient(white, transparent 65%);
          z-index: -1;
          opacity: var(--active, 0);
          transition: opacity var(--transition);
        }
        
        .particle {
          fill: white;
          width: calc(var(--size, 0.25) * 1rem);
          aspect-ratio: 1;
          position: absolute;
          top: calc(var(--y) * 1%);
          left: calc(var(--x) * 1%);
          opacity: var(--alpha, 1);
          animation: float-out calc(var(--duration, 1) * 1s) calc(var(--delay) * -1s) infinite linear;
          transform-origin: var(--origin-x, 1000%) var(--origin-y, 1000%);
          z-index: -1;
          animation-play-state: var(--play-state, paused);
        }
        
        .particle path {
          fill: hsl(0 0% 90%);
          stroke: none;
        }
        
        .particle:nth-of-type(even) {
          animation-direction: reverse;
        }
        
        @keyframes float-out {
          to {
            rotate: 360deg;
          }
        }
        
        .text {
          translate: 2% -6%;
          letter-spacing: 0.01ch;
          background: linear-gradient(90deg, hsl(0 0% calc((var(--active) * 100%) + 65%)), hsl(0 0% calc((var(--active) * 100%) + 26%)));
          -webkit-background-clip: text;
          color: transparent;
          transition: background var(--transition);
        }
        
        .sparkle-button svg {
          inline-size: 1.25em;
          translate: -25% -5%;
        }`,
  },
  {
    id: 15,
    component: <ButtonFlowers />,
    name: "Flowers",
    html: `<button class="btn">
        <div class="wrapper">
            <p class="text">Flowers </p>
    
            <div class="flower flower1">
                <div class="petal one"></div>
                <div class="petal two"></div>
                <div class="petal three"></div>
                <div class="petal four"></div>
            </div>
            <div class="flower flower2">
                <div class="petal one"></div>
                <div class="petal two"></div>
                <div class="petal three"></div>
                <div class="petal four"></div>
            </div>
            <div class="flower flower3">
                <div class="petal one"></div>
                <div class="petal two"></div>
                <div class="petal three"></div>
                <div class="petal four"></div>
            </div>
            <div class="flower flower4">
                <div class="petal one"></div>
                <div class="petal two"></div>
                <div class="petal three"></div>
                <div class="petal four"></div>
            </div>
            <div class="flower flower5">
                <div class="petal one"></div>
                <div class="petal two"></div>
                <div class="petal three"></div>
                <div class="petal four"></div>
            </div>
            <div class="flower flower6">
                <div class="petal one"></div>
                <div class="petal two"></div>
                <div class="petal three"></div>
                <div class="petal four"></div>
            </div>
        </div>
    </button>`,
    scss: `.btn {
          height: 4em;
          width: 12em;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 0px solid black;
        }
        
        .wrapper {
          height: 2em;
          width: 8em;
          position: relative;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .text {
          font-size: 17px;
          z-index: 1;
          color: #000;
          padding: 4px 12px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.7);
          transition: all 0.5s ease;
        }
        
        .flower {
          display: grid;
          grid-template-columns: 1em 1em;
          position: absolute;
          transition: grid-template-columns 0.8s ease;
        }
        
        .flower1 {
          top: -12px;
          left: -13px;
          transform: rotate(5deg);
        }
        
        .flower2 {
          bottom: -5px;
          left: 8px;
          transform: rotate(35deg);
        }
        
        .flower3 {
          bottom: -15px;
          transform: rotate(0deg);
        }
        
        .flower4 {
          top: -14px;
          transform: rotate(15deg);
        }
        
        .flower5 {
          right: 11px;
          top: -3px;
          transform: rotate(25deg);
        }
        
        .flower6 {
          right: -15px;
          bottom: -15px;
          transform: rotate(30deg);
        }
        
        .petal {
          height: 1em;
          width: 1em;
          border-radius: 40% 70% / 7% 90%;
          background: linear-gradient(#07a6d7, #93e0ee);
          border: 0.5px solid #96d1ec;
          z-index: 0;
          transition: width 0.8s ease, height 0.8s ease;
        }
        
        .two {
          transform: rotate(90deg);
        }
        
        .three {
          transform: rotate(270deg);
        }
        
        .four {
          transform: rotate(180deg);
        }
        
        .btn:hover .petal {
          background: linear-gradient(#0761d7, #93bdee);
          border: 0.5px solid #96b4ec;
        }
        
        .btn:hover .flower {
          grid-template-columns: 1.5em 1.5em;
        }
        
        .btn:hover .flower .petal {
          width: 1.5em;
          height: 1.5em;
        }
        
        .btn:hover .text {
          background: rgba(255, 255, 255, 0.4);
        }
        
        .btn:hover div.flower1 {
          animation: 15s linear 0s normal none infinite running flower1;
        }
        
        @keyframes flower1 {
          0% {
            transform: rotate(5deg);
          }
        
          100% {
            transform: rotate(365deg);
          }
        }
        
        .btn:hover div.flower2 {
          animation: 13s linear 1s normal none infinite running flower2;
        }
        
        @keyframes flower2 {
          0% {
            transform: rotate(35deg);
          }
        
          100% {
            transform: rotate(-325deg);
          }
        }
        
        .btn:hover div.flower3 {
          animation: 16s linear 1s normal none infinite running flower3;
        }
        
        @keyframes flower3 {
          0% {
            transform: rotate(0deg);
          }
        
          100% {
            transform: rotate(360deg);
          }
        }
        
        .btn:hover div.flower4 {
          animation: 17s linear 1s normal none infinite running flower4;
        }
        
        @keyframes flower4 {
          0% {
            transform: rotate(15deg);
          }
        
          100% {
            transform: rotate(375deg);
          }
        }
        
        .btn:hover div.flower5 {
          animation: 20s linear 1s normal none infinite running flower5;
        }
        
        @keyframes flower5 {
          0% {
            transform: rotate(25deg);
          }
        
          100% {
            transform: rotate(-335deg);
          }
        }
        
        .btn:hover div.flower6 {
          animation: 15s linear 1s normal none infinite running flower6;
        }
        
        @keyframes flower6 {
          0% {
            transform: rotate(30deg);
          }
        
          100% {
            transform: rotate(390deg);
          }
        }`,
  },
  {
    id: 16,
    component: <ButtonDraw />,
    name: "Draw",
    html: `<button>

        <div class="state" id="moon">Send</div>
        <div class="state" id="sun">Send</div>
        <span class="lightRotation"></span>
        <span class="lightRotation2"></span>
        <span class="lightRotation3"></span>
        <span class="lightRotation4"></span>
        </button>`,
    scss: `button {
          --sunGradient: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);
          --moonGradient: linear-gradient(to top, #cc208e 0%, #6713d2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 140px;
          height: 60px;
          color: white;
          font-size: 1em;
          font-weight: bold;
          text-transform: uppercase;
          border-radius: 15px;
          background-color: transparent;
          transition: 0.5s;
          overflow: hidden;
          border: 4px solid black;
        }
        
        button:hover {
          box-shadow: -15px -15px 500px white;
          transition: 0.2s;
        }
        
        button:hover span {
          background: var(--sunGradient);
        }
        
        .state {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: inherit;
          transition: 0.4s;
          width: 85%;
          height: 82%;
          border: 4px solid black;
        }
        
        #sun {
          display: none;
          background-color: #212121;
          opacity: 0.85;
        }
        
        #moon {
          background-color: #212121;
          opacity: 0.85;
        }
        
        button:hover #sun {
          display: flex;
        }
        
        button:hover #moon {
          display: none;
        }
        
        button:hover .lightRotation {
          animation: 1s linear reverse infinite rotation413;
        }
        
        button:hover .lightRotation2 {
          animation: 2s linear infinite rotation_413;
        }
        
        button:hover .lightRotation3 {
          animation: 10s linear reverse infinite rotation_413;
        }
        
        button:hover .lightRotation4 {
          animation: 3s linear infinite rotation_413;
        }
        
        .lightRotation {
          position: absolute;
          transition: 0.4s;
          z-index: -1;
          width: 60px;
          height: 500px;
          transform: rotate(50deg);
          border-radius: inherit;
          background: var(--moonGradient);
        }
        
        .lightRotation2 {
          position: absolute;
          transition: 0.4s;
          z-index: -1;
          width: 75px;
          height: 500px;
          transform: rotate(110deg);
          border-radius: inherit;
          background: var(--moonGradient);
        }
        
        .lightRotation3 {
          position: absolute;
          transition: 0.4s;
          z-index: -1;
          width: 40px;
          height: 260px;
          border-radius: inherit;
          background: var(--moonGradient);
        }
        
        .lightRotation4 {
          position: absolute;
          transition: 0.4s;
          z-index: -1;
          width: 24px;
          height: 220px;
          transform: rotate(100deg);
          border-radius: inherit;
          background: var(--moonGradient);
        }
        
        @keyframes rotation_413 {
          from {
            transform: rotate(0deg)
          }
        
          to {
            transform: rotate(360deg)
          }
        }
        `,
  },
  {
    id: 17,
    component: <ButtonCross />,
    name: "Cross",
    html: `<a href="#" class="button">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Button
      </a>`,
    scss: `.button {
          position: relative;
          padding: 12px 25px;
          font-size: 1.5rem;
          color: #1e9bff;
          border: 2px solid rgba(0, 0, 0, 0.5);
          border-radius: 4px;
          text-shadow: 0 0 15px #1e9bff;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          transition: 0.5s;
          z-index: 1;
        }
        
        .button:hover {
          color: #fff;
          border: 2px solid rgba(0, 0, 0, 0);
          box-shadow: 0 0 0px #1e9bff;
        }
        
        .button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #1e9bff;
          z-index: -1;
          transform: scale(0);
          transition: 0.5s;
        }
        
        .button:hover::before {
          transform: scale(1);
          transition-delay: 0.5s;
          box-shadow: 0 0 10px #1e9bff,
            0 0 30px #1e9bff,
            0 0 60px #1e9bff;
        }
        
        .button span {
          position: absolute;
          background: #1e9bff;
          pointer-events: none;
          border-radius: 2px;
          box-shadow: 0 0 10px #1e9bff,
            0 0 20px #1e9bff,
            0 0 30px #1e9bff,
            0 0 50px #1e9bff,
            0 0 100px #1e9bff;
          transition: 0.5s ease-in-out;
          transition-delay: 0.25s;
        }
        
        .button:hover span {
          opacity: 0;
          transition-delay: 0s;
        }
        
        .button span:nth-child(1),
        .button span:nth-child(3) {
          width: 40px;
          height: 4px;
        }
        
        .button:hover span:nth-child(1),
        .button:hover span:nth-child(3) {
          transform: translateX(0);
        }
        
        .button span:nth-child(2),
        .button span:nth-child(4) {
          width: 4px;
          height: 40px;
        }
        
        .button:hover span:nth-child(1),
        .button:hover span:nth-child(3) {
          transform: translateY(0);
        }
        
        .button span:nth-child(1) {
          top: calc(50% - 2px);
          left: -50px;
          transform-origin: left;
        }
        
        .button:hover span:nth-child(1) {
          left: 50%;
        }
        
        .button span:nth-child(3) {
          top: calc(50% - 2px);
          right: -50px;
          transform-origin: right;
        }
        
        .button:hover span:nth-child(3) {
          right: 50%;
        }
        
        .button span:nth-child(2) {
          left: calc(50% - 2px);
          top: -50px;
          transform-origin: top;
        }
        
        .button:hover span:nth-child(2) {
          top: 50%;
        }
        
        .button span:nth-child(4) {
          left: calc(50% - 2px);
          bottom: -50px;
          transform-origin: bottom;
        }
        
        .button:hover span:nth-child(4 ) {
          bottom: 50%;
        }`,
  },
  {
    id: 18,
    component: <ButtonHeart />,
    name: "Heart",
    html: `<button>Hover me
        <div class="star-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25" height="25">
        <path fill="#fd1853" d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
          c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
          c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
          C475.116,213.899,475.116,136.489,427.313,88.686z"></path>
      </svg>
      
      
        </div>
        <div class="star-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
        <path fill="#fd1853" d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
          c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
          c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
          C475.116,213.899,475.116,136.489,427.313,88.686z"></path>
      </svg>
      
        </div>
        <div class="star-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="9" height="9">
        <path fill="#fd1853" d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
          c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
          c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
          C475.116,213.899,475.116,136.489,427.313,88.686z"></path>
      </svg>
      
        </div>
        <div class="star-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10" height="10">
        <path fill="#fd1853" d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
          c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
          c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
          C475.116,213.899,475.116,136.489,427.313,88.686z"></path>
      </svg>
      
        </div>
        <div class="star-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
        <path fill="#fd1853" d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
          c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
          c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
          C475.116,213.899,475.116,136.489,427.313,88.686z"></path>
      </svg>
      
        </div>
        <div class="star-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="7" height="7">
        <path fill="#fd1853" d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
          c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
          c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
          C475.116,213.899,475.116,136.489,427.313,88.686z"></path>
      </svg>
      
        </div>
      </button>
      
      
      `,
    scss: `button {
          background: linear-gradient(45deg, transparent 27%, #fd1853 5%, #fd1853 73%, transparent 27%);
          box-shadow: 6px 0px 0px #00e6f6;
          position: relative;
          padding: 12px 35px;
          font-size: 20px;
          font-weight: 500;
          color: white;
          border: 3px solid #00e6f6;
          border-radius: 8px;
          box-shadow: 0 0 0 #fec1958c;
          transition: all .3s ease-in-out;
        }
        
        .star-1 {
          position: absolute;
          top: 20%;
          left: 20%;
          width: 25px;
          height: auto;
          filter: drop-shadow(0 0 0 #fd1853);
          z-index: -5;
          transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
        }
        
        .star-2 {
          position: absolute;
          top: 45%;
          left: 45%;
          width: 15px;
          height: auto;
          filter: drop-shadow(0 0 0 #fd1853);
          z-index: -5;
          transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
        }
        
        .star-3 {
          position: absolute;
          top: 40%;
          left: 40%;
          width: 5px;
          height: auto;
          filter: drop-shadow(0 0 0 #fd1853);
          z-index: -5;
          transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
        }
        
        .star-4 {
          position: absolute;
          top: 20%;
          left: 40%;
          width: 8px;
          height: auto;
          filter: drop-shadow(0 0 0 #fd1853);
          z-index: -5;
          transition: all .8s cubic-bezier(0, 0.4, 0, 1.01);
        }
        
        .star-5 {
          position: absolute;
          top: 25%;
          left: 45%;
          width: 15px;
          height: auto;
          filter: drop-shadow(0 0 0 #fd1853);
          z-index: -5;
          transition: all .6s cubic-bezier(0, 0.4, 0, 1.01);
        }
        
        .star-6 {
          position: absolute;
          top: 5%;
          left: 50%;
          width: 5px;
          height: auto;
          filter: drop-shadow(0 0 0 #fd1853);
          z-index: -5;
          transition: all .8s ease;
        }
        
        button:hover {
          background: transparent;
          color: #00e6f6;
          box-shadow: 0 0 50px #fd1853;
        }
        
        button:hover .star-1 {
          position: absolute;
          top: -80%;
          left: -30%;
          width: 25px;
          height: auto;
          filter: drop-shadow(0 0 10px #fd1853);
          z-index: 2;
        }
        
        button:hover .star-2 {
          position: absolute;
          top: -25%;
          left: 10%;
          width: 15px;
          height: auto;
          filter: drop-shadow(0 0 10px #fd1853);
          z-index: 2;
        }
        
        button:hover .star-3 {
          position: absolute;
          top: 55%;
          left: 25%;
          width: 5px;
          height: auto;
          filter: drop-shadow(0 0 10px #fd1853);
          z-index: 2;
        }
        
        button:hover .star-4 {
          position: absolute;
          top: 30%;
          left: 80%;
          width: 8px;
          height: auto;
          filter: drop-shadow(0 0 10px #fd1853);
          z-index: 2;
        }
        
        button:hover .star-5 {
          position: absolute;
          top: 25%;
          left: 115%;
          width: 15px;
          height: auto;
          filter: drop-shadow(0 0 10px #fd1853);
          z-index: 2;
        }
        
        button:hover .star-6 {
          position: absolute;
          top: 5%;
          left: 60%;
          width: 5px;
          height: auto;
          filter: drop-shadow(0 0 10px #fd1853);
          z-index: 2;
        }
        
        .fil0 {
          fill: #fd1853
        }`,
  },
  {
    id: 19,
    component: <ButtonMove />,
    name: "btnMove",
    html: `<button>
        <span>Button</span><i></i>
    </button>`,
    scss: `button {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 10px 30px;
          transition: 0.5s;
          position: relative;
          font-size: 17px;
          background: #333;
          border: none;
          color: #fff;
        }
        
        button:hover {
          letter-spacing: 0.25em;
          background: #ff1867;
          color: #ff1867;
          box-shadow: 0 0 45px #ff1867;
        }
        
        button::before {
          content: '';
          position: absolute;
          inset: 2px;
          background: #222222;
        }
        
        button span {
          position: relative;
          z-index: 1;
        }
        
        button i {
          position: absolute;
          inset: 0;
          display: block;
        }
        
        button i::before {
          content: '';
          position: absolute;
          border: 2px solid #ff1867;
          width: 7px;
          height: 4px;
          top: -3.5px;
          left: 80%;
          background: #222222;
          transform: translateX(-50%);
          transition: 0.5s;
        }
        
        button:hover i::before {
          width: 20px;
          left: 20%;
        }
        
        button i::after {
          content: '';
          position: absolute;
          border: 2px solid #ff1867;
          width: 7px;
          height: 4px;
          bottom: -3.5px;
          left: 20%;
          background: #222222;
          transform: translateX(-50%);
          transition: 0.5s;
        }
        
        button:hover i::after {
          width: 20px;
          left: 80%;
        }`,
  },
  {
    id: 20,
    component: <ButtonLamp />,
    name: "Lamp",
    html: `<button class="cti">
        <div class="CTI">
          Code to Infinity
        </div>
      </button>`,
    scss: `.cti {
          background-color: #6019bd;
          padding: 17px 30px;
          border: 3px solid transparent;
          border-radius: 0.6em;
          transition: 0.2s;
        }
        
        .cti:hover {
          background-color: transparent;
          border: 3px solid #6019bd;
          box-shadow: 0px 0px 27px 5px #6019bd;
        }
        
        .CTI {
          color: #fff;
          font-family: 'Courier New', Courier, monospace;
          font-size: 17px;
          font-weight: bold;
          overflow: hidden;
          border-right: 4px solid transparent;
          white-space: nowrap;
          margin: 0 auto;
        }
        
        .cti:hover .CTI {
          border-right: 4px solid #6019bd;
          animation: letters 1.75s steps(22, end),
            cursor .4s step-end infinite;
        }
        
        @keyframes letters {
          from {
            width: 0;
          }
        
          to {
            width: 100%;
          }
        }
        
        @keyframes cursor {
          from {
            border-color: transparent
          }
        
          50% {
            border-color: #6019bd
          }
        }`,
  },
  //     {
  //     id: ,
  //     component: ,
  //     name: '',
  //     html: ``,
  //     scss: ``
  // },
];
