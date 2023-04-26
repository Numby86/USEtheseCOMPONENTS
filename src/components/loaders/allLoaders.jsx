import LoaderAnimated from "./LoaderAnimated/LoaderAnimated";
import LoaderKinetic from "./LoaderKinetic/LoaderKinetic";
import LoaderNeon from "./LoaderNeon/LoaderNeon";
import LoaderPuzzle from "./LoaderPuzzle/LoaderPuzzle";
import LoaderBalls from "./LoaderBalls/LoaderBalls";
import LoaderHexagonal from "./LoaderHexagonal/LoaderHexagonal";
import LoaderSpinner from "./LoaderSpinner/LoaderSpinner";
import LoaderHastag from "./LoaderHastag/LoaderHastag";
import LoaderStairs from "./LoaderStairs/LoaderStairs";
import LoaderText from "./LoaderText/LoaderText";
import LoaderCard from "./LoaderCard/LoaderCard";
import LoaderHamster from "./LoaderHamster/LoaderHamster";
import LoaderBars from "./LoaderBars/LoaderBars";
import LoaderAlien from "./LoaderAlien/LoaderAlien";
import LoaderClock from "./LoaderClock/LoaderClock";
import LoadeFollow from "./LoaderFollow/LoaderFollow";
import LoaderSmile from "./LoaderSmile/LoaderSmile";
import LoaderPong from "./LoaderPong/LoaderPong";
import LoaderPercentage from "./LoaderPercentage/LoaderPercentage";
import LoaderStarWars from "./LoaderStarWars/LoaderStarWars";

export const allLoaders = [
  {
    id: 1,
    component: <LoaderAnimated />,
    name: "Animated",
    html: `<svg className="pl" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="pl-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="hsl(193,90%,55%)" />
                <stop offset="100%" stop-color="hsl(223,90%,55%)" />
            </linearGradient>
        </defs>
        <circle className="pl__ring" r="56" cx="64" cy="64" fill="none" stroke="hsla(0,10%,10%,0.1)" stroke-width="16"
            stroke-linecap="round" />
        <path className="pl__worm"
            d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z"
            fill="none" stroke="url(#pl-grad)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"
            stroke-dasharray="44 1111" stroke-dashoffset="10" />
    </svg>`,
    scss: `
        :root {
            --hue: 223;
            --bg: hsl(var(--hue), 10%, 90%);
            --fg: hsl(var(--hue), 10%, 10%);
            font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1280 - 320));
        }
        
        .pl,
        .pl__worm {
            animation-duration: 3s;
            animation-iteration-count: infinite;
        }
        
        .pl {
            animation-name: bump;
            animation-timing-function: linear;
            width: 8em;
            height: 8em;
        }
        
        .pl__ring {
            stroke: hsla(var(--hue), 10%, 10%, 0.1);
            transition: stroke 0.3s;
        }
        
        .pl__worm {
            animation-name: worm;
            animation-timing-function: cubic-bezier(0.42, 0.17, 0.75, 0.83);
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --bg: hsl(var(--hue), 10%, 10%);
                --fg: hsl(var(--hue), 10%, 90%);
            }
        
            .pl__ring {
                stroke: hsla(var(--hue), 10%, 90%, 0.1);
            }
        }
        
        @keyframes bump {
        
            from,
            42%,
            46%,
            51%,
            55%,
            59%,
            63%,
            67%,
            71%,
            74%,
            78%,
            81%,
            85%,
            88%,
            92%,
            to {
                transform: translate(0, 0);
            }
        
            44% {
                transform: translate(1.33%, 6.75%);
            }
        
            53% {
                transform: translate(-16.67%, -0.54%);
            }
        
            61% {
                transform: translate(3.66%, -2.46%);
            }
        
            69% {
                transform: translate(-0.59%, 15.27%);
            }
        
            76% {
                transform: translate(-1.92%, -4.68%);
            }
        
            83% {
                transform: translate(9.38%, 0.96%);
            }
        
            90% {
                transform: translate(-4.55%, 1.98%);
            }
        }
        
        @keyframes worm {
            from {
                stroke-dashoffset: 10;
            }
        
            25% {
                stroke-dashoffset: 295;
            }
        
            to {
                stroke-dashoffset: 1165;
            }
        }
        `,
  },
  {
    id: 2,
    component: <LoaderKinetic />,
    name: "Kinetic",
    html: `<div className="kinetic">
        </div>`,
    scss: `.kinetic {
            position: relative;
            height: 80px;
            width: 80px;
          }
          
          .kinetic::after,
          .kinetic::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            border: 50px solid transparent;
            border-bottom-color: whitesmoke;
            animation: rotateA 2s linear infinite 0.5s;
          }
          
          .kinetic::before {
            transform: rotate(90deg);
            animation: rotateB 2s linear infinite;
          }
          
          @keyframes rotateA {
            0%,
            25% {
              transform: rotate(0deg);
            }
          
            50%,
            75% {
              transform: rotate(180deg);
            }
          
            100% {
              transform: rotate(360deg);
            }
          }
          
          @keyframes rotateB {
            0%,
            25% {
              transform: rotate(90deg);
            }
          
            50%,
            75% {
              transform: rotate(270deg);
            }
          
            100% {
              transform: rotate(450deg);
            }
          }
          `,
  },
  {
    id: 3,
    component: <LoaderNeon />,
    name: "Neon",
    html: `<div className='loader'>
        </div>`,
    scss: `.loader{
            width: 150px;
            height: 150px;
            border-radius: 50%;
            animation: loader 1.2s linear infinite;
        }
        .loader::before,
        .loader::after{
            content: '';
            position: absolute;
            border-radius: inherit;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            
        }
        .loader::before{
            width: 100%;
            height: 100%;
            background-image: linear-gradient(0deg, aqua 0%,#cfff04 70% );
        }
        .loader::after{
            width: 85%;
            height: 85%;
            background-color: black;
        }
        
        @keyframes loader{
            to {
                transform: rotate(360deg);
            }
        }`,
  },
  {
    id: 4,
    component: <LoaderPuzzle />,
    name: "Puzzle",
    html: `<div className="banter-loader">
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
    </div>`,
    scss: `.banter-loader {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 72px;
            height: 72px;
            margin-left: -36px;
            margin-top: -36px;
          }
          
          .banter-loader__box {
            float: left;
            position: relative;
            width: 20px;
            height: 20px;
            margin-right: 6px;
          }
          
          .banter-loader__box:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: whitesmoke;
          }
          
          .banter-loader__box:nth-child(3n) {
            margin-right: 0;
            margin-bottom: 6px;
          }
          
          .banter-loader__box:nth-child(1):before, .banter-loader__box:nth-child(4):before {
            margin-left: 26px;
          }
          
          .banter-loader__box:nth-child(3):before {
            margin-top: 52px;
          }
          
          .banter-loader__box:last-child {
            margin-bottom: 0;
          }
          
          @keyframes moveBox-1 {
            9.0909090909% {
              transform: translate(-26px, 0);
            }
          
            18.1818181818% {
              transform: translate(0px, 0);
            }
          
            27.2727272727% {
              transform: translate(0px, 0);
            }
          
            36.3636363636% {
              transform: translate(26px, 0);
            }
          
            45.4545454545% {
              transform: translate(26px, 26px);
            }
          
            54.5454545455% {
              transform: translate(26px, 26px);
            }
          
            63.6363636364% {
              transform: translate(26px, 26px);
            }
          
            72.7272727273% {
              transform: translate(26px, 0px);
            }
          
            81.8181818182% {
              transform: translate(0px, 0px);
            }
          
            90.9090909091% {
              transform: translate(-26px, 0px);
            }
          
            100% {
              transform: translate(0px, 0px);
            }
          }
          
          .banter-loader__box:nth-child(1) {
            animation: moveBox-1 4s infinite;
          }
          
          @keyframes moveBox-2 {
            9.0909090909% {
              transform: translate(0, 0);
            }
          
            18.1818181818% {
              transform: translate(26px, 0);
            }
          
            27.2727272727% {
              transform: translate(0px, 0);
            }
          
            36.3636363636% {
              transform: translate(26px, 0);
            }
          
            45.4545454545% {
              transform: translate(26px, 26px);
            }
          
            54.5454545455% {
              transform: translate(26px, 26px);
            }
          
            63.6363636364% {
              transform: translate(26px, 26px);
            }
          
            72.7272727273% {
              transform: translate(26px, 26px);
            }
          
            81.8181818182% {
              transform: translate(0px, 26px);
            }
          
            90.9090909091% {
              transform: translate(0px, 26px);
            }
          
            100% {
              transform: translate(0px, 0px);
            }
          }
          
          .banter-loader__box:nth-child(2) {
            animation: moveBox-2 4s infinite;
          }
          
          @keyframes moveBox-3 {
            9.0909090909% {
              transform: translate(-26px, 0);
            }
          
            18.1818181818% {
              transform: translate(-26px, 0);
            }
          
            27.2727272727% {
              transform: translate(0px, 0);
            }
          
            36.3636363636% {
              transform: translate(-26px, 0);
            }
          
            45.4545454545% {
              transform: translate(-26px, 0);
            }
          
            54.5454545455% {
              transform: translate(-26px, 0);
            }
          
            63.6363636364% {
              transform: translate(-26px, 0);
            }
          
            72.7272727273% {
              transform: translate(-26px, 0);
            }
          
            81.8181818182% {
              transform: translate(-26px, -26px);
            }
          
            90.9090909091% {
              transform: translate(0px, -26px);
            }
          
            100% {
              transform: translate(0px, 0px);
            }
          }
          
          .banter-loader__box:nth-child(3) {
            animation: moveBox-3 4s infinite;
          }
          
          @keyframes moveBox-4 {
            9.0909090909% {
              transform: translate(-26px, 0);
            }
          
            18.1818181818% {
              transform: translate(-26px, 0);
            }
          
            27.2727272727% {
              transform: translate(-26px, -26px);
            }
          
            36.3636363636% {
              transform: translate(0px, -26px);
            }
          
            45.4545454545% {
              transform: translate(0px, 0px);
            }
          
            54.5454545455% {
              transform: translate(0px, -26px);
            }
          
            63.6363636364% {
              transform: translate(0px, -26px);
            }
          
            72.7272727273% {
              transform: translate(0px, -26px);
            }
          
            81.8181818182% {
              transform: translate(-26px, -26px);
            }
          
            90.9090909091% {
              transform: translate(-26px, 0px);
            }
          
            100% {
              transform: translate(0px, 0px);
            }
          }
          
          .banter-loader__box:nth-child(4) {
            animation: moveBox-4 4s infinite;
          }
          
          @keyframes moveBox-5 {
            9.0909090909% {
              transform: translate(0, 0);
            }
          
            18.1818181818% {
              transform: translate(0, 0);
            }
          
            27.2727272727% {
              transform: translate(0, 0);
            }
          
            36.3636363636% {
              transform: translate(26px, 0);
            }
          
            45.4545454545% {
              transform: translate(26px, 0);
            }
          
            54.5454545455% {
              transform: translate(26px, 0);
            }
          
            63.6363636364% {
              transform: translate(26px, 0);
            }
          
            72.7272727273% {
              transform: translate(26px, 0);
            }
          
            81.8181818182% {
              transform: translate(26px, -26px);
            }
          
            90.9090909091% {
              transform: translate(0px, -26px);
            }
          
            100% {
              transform: translate(0px, 0px);
            }
          }
          
          .banter-loader__box:nth-child(5) {
            animation: moveBox-5 4s infinite;
          }
          
          @keyframes moveBox-6 {
            9.0909090909% {
              transform: translate(0, 0);
            }
          
            18.1818181818% {
              transform: translate(-26px, 0);
            }
          
            27.2727272727% {
              transform: translate(-26px, 0);
            }
          
            36.3636363636% {
              transform: translate(0px, 0);
            }
          
            45.4545454545% {
              transform: translate(0px, 0);
            }
          
            54.5454545455% {
              transform: translate(0px, 0);
            }
          
            63.6363636364% {
              transform: translate(0px, 0);
            }
          
            72.7272727273% {
              transform: translate(0px, 26px);
            }
          
            81.8181818182% {
              transform: translate(-26px, 26px);
            }
          
            90.9090909091% {
              transform: translate(-26px, 0px);
            }
          
            100% {
              transform: translate(0px, 0px);
            }
          }
          
          .banter-loader__box:nth-child(6) {
            animation: moveBox-6 4s infinite;
          }
          
          @keyframes moveBox-7 {
            9.0909090909% {
              transform: translate(26px, 0);
            }
          
            18.1818181818% {
              transform: translate(26px, 0);
            }
          
            27.2727272727% {
              transform: translate(26px, 0);
            }
          
            36.3636363636% {
              transform: translate(0px, 0);
            }
          
            45.4545454545% {
              transform: translate(0px, -26px);
            }
          
            54.5454545455% {
              transform: translate(26px, -26px);
            }
          
            63.6363636364% {
              transform: translate(0px, -26px);
            }
          
            72.7272727273% {
              transform: translate(0px, -26px);
            }
          
            81.8181818182% {
              transform: translate(0px, 0px);
            }
          
            90.9090909091% {
              transform: translate(26px, 0px);
            }
          
            100% {
              transform: translate(0px, 0px);
            }
          }
          
          .banter-loader__box:nth-child(7) {
            animation: moveBox-7 4s infinite;
          }
          
          @keyframes moveBox-8 {
            9.0909090909% {
              transform: translate(0, 0);
            }
          
            18.1818181818% {
              transform: translate(-26px, 0);
            }
          
            27.2727272727% {
              transform: translate(-26px, -26px);
            }
          
            36.3636363636% {
              transform: translate(0px, -26px);
            }
          
            45.4545454545% {
              transform: translate(0px, -26px);
            }
          
            54.5454545455% {
              transform: translate(0px, -26px);
            }
          
            63.6363636364% {
              transform: translate(0px, -26px);
            }
          
            72.7272727273% {
              transform: translate(0px, -26px);
            }
          
            81.8181818182% {
              transform: translate(26px, -26px);
            }
          
            90.9090909091% {
              transform: translate(26px, 0px);
            }
          
            100% {
              transform: translate(0px, 0px);
            }
          }
          
          .banter-loader__box:nth-child(8) {
            animation: moveBox-8 4s infinite;
          }
          
          @keyframes moveBox-9 {
            9.0909090909% {
              transform: translate(-26px, 0);
            }
          
            18.1818181818% {
              transform: translate(-26px, 0);
            }
          
            27.2727272727% {
              transform: translate(0px, 0);
            }
          
            36.3636363636% {
              transform: translate(-26px, 0);
            }
          
            45.4545454545% {
              transform: translate(0px, 0);
            }
          
            54.5454545455% {
              transform: translate(0px, 0);
            }
          
            63.6363636364% {
              transform: translate(-26px, 0);
            }
          
            72.7272727273% {
              transform: translate(-26px, 0);
            }
          
            81.8181818182% {
              transform: translate(-52px, 0);
            }
          
            90.9090909091% {
              transform: translate(-26px, 0);
            }
          
            100% {
              transform: translate(0px, 0);
            }
          }
          
          .banter-loader__box:nth-child(9) {
            animation: moveBox-9 4s infinite;
          }`,
  },
  {
    id: 5,
    component: <LoaderBalls />,
    name: "Balls",
    html: `<div class="newtons-cradle">
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        </div>`,
    scss: `.newtons-cradle {
          --uib-size: 50px;
          --uib-speed: 1.2s;
          --uib-color: #474554;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: var(--uib-size);
          height: var(--uib-size);
         }
         
         .newtons-cradle__dot {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
          width: 25%;
          transform-origin: center top;
         }
         
         .newtons-cradle__dot::after {
          content: '';
          display: block;
          width: 100%;
          height: 25%;
          border-radius: 50%;
          background-color: var(--uib-color);
         }
         
         .newtons-cradle__dot:first-child {
          animation: swing var(--uib-speed) linear infinite;
         }
         
         .newtons-cradle__dot:last-child {
          animation: swing2 var(--uib-speed) linear infinite;
         }
         
         @keyframes swing {
          0% {
           transform: rotate(0deg);
           animation-timing-function: ease-out;
          }
         
          25% {
           transform: rotate(70deg);
           animation-timing-function: ease-in;
          }
         
          50% {
           transform: rotate(0deg);
           animation-timing-function: linear;
          }
         }
         
         @keyframes swing2 {
          0% {
           transform: rotate(0deg);
           animation-timing-function: linear;
          }
         
          50% {
           transform: rotate(0deg);
           animation-timing-function: ease-out;
          }
         
          75% {
           transform: rotate(-70deg);
           animation-timing-function: ease-in;
          }
         }
         `,
  },
  {
    id: 6,
    component: <LoaderHexagonal />,
    name: "hexagonal",
    html: `
        <div class="socket">
          <div class="gel center-gel">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c1 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c2 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c3 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c4 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c5 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c6 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          
          <div class="gel c7 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          
          <div class="gel c8 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c9 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c10 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c11 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c12 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c13 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c14 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c15 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c16 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c17 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c18 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c19 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c20 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c21 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c22 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c23 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c24 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c25 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c26 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c28 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c29 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c30 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c31 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c32 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c33 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c34 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c35 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c36 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c37 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          
        </div>
      `,
    scss: `.socket {
          width: 200px;
          height: 200px;
          position: absolute;
          left: 50%;
          margin-left: -100px;
          top: 50%;
          margin-top: -100px;
        }
        
        .hex-brick {
          background: #000000;
          width: 30px;
          height: 17px;
          position: absolute;
          top: 5px;
          animation-name: fade00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          -webkit-animation-name: fade00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
        }
        
        .h2 {
          transform: rotate(60deg);
          -webkit-transform: rotate(60deg);
        }
        
        .h3 {
          transform: rotate(-60deg);
          -webkit-transform: rotate(-60deg);
        }
        
        .gel {
          height: 30px;
          width: 30px;
          transition: all .3s;
          -webkit-transition: all .3s;
          position: absolute;
          top: 50%;
          left: 50%;
        }
        
        .center-gel {
          margin-left: -15px;
          margin-top: -15px;
          animation-name: pulse00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          -webkit-animation-name: pulse00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
        }
        
        .c1 {
          margin-left: -47px;
          margin-top: -15px;
        }
        
        .c2 {
          margin-left: -31px;
          margin-top: -43px;
        }
        
        .c3 {
          margin-left: 1px;
          margin-top: -43px;
        }
        
        .c4 {
          margin-left: 17px;
          margin-top: -15px;
        }
        
        .c5 {
          margin-left: -31px;
          margin-top: 13px;
        }
        
        .c6 {
          margin-left: 1px;
          margin-top: 13px;
        }
        
        .c7 {
          margin-left: -63px;
          margin-top: -43px;
        }
        
        .c8 {
          margin-left: 33px;
          margin-top: -43px;
        }
        
        .c9 {
          margin-left: -15px;
          margin-top: 41px;
        }
        
        .c10 {
          margin-left: -63px;
          margin-top: 13px;
        }
        
        .c11 {
          margin-left: 33px;
          margin-top: 13px;
        }
        
        .c12 {
          margin-left: -15px;
          margin-top: -71px;
        }
        
        .c13 {
          margin-left: -47px;
          margin-top: -71px;
        }
        
        .c14 {
          margin-left: 17px;
          margin-top: -71px;
        }
        
        .c15 {
          margin-left: -47px;
          margin-top: 41px;
        }
        
        .c16 {
          margin-left: 17px;
          margin-top: 41px;
        }
        
        .c17 {
          margin-left: -79px;
          margin-top: -15px;
        }
        
        .c18 {
          margin-left: 49px;
          margin-top: -15px;
        }
        
        .c19 {
          margin-left: -63px;
          margin-top: -99px;
        }
        
        .c20 {
          margin-left: 33px;
          margin-top: -99px;
        }
        
        .c21 {
          margin-left: 1px;
          margin-top: -99px;
        }
        
        .c22 {
          margin-left: -31px;
          margin-top: -99px;
        }
        
        .c23 {
          margin-left: -63px;
          margin-top: 69px;
        }
        
        .c24 {
          margin-left: 33px;
          margin-top: 69px;
        }
        
        .c25 {
          margin-left: 1px;
          margin-top: 69px;
        }
        
        .c26 {
          margin-left: -31px;
          margin-top: 69px;
        }
        
        .c27 {
          margin-left: -79px;
          margin-top: -15px;
        }
        
        .c28 {
          margin-left: -95px;
          margin-top: -43px;
        }
        
        .c29 {
          margin-left: -95px;
          margin-top: 13px;
        }
        
        .c30 {
          margin-left: 49px;
          margin-top: 41px;
        }
        
        .c31 {
          margin-left: -79px;
          margin-top: -71px;
        }
        
        .c32 {
          margin-left: -111px;
          margin-top: -15px;
        }
        
        .c33 {
          margin-left: 65px;
          margin-top: -43px;
        }
        
        .c34 {
          margin-left: 65px;
          margin-top: 13px;
        }
        
        .c35 {
          margin-left: -79px;
          margin-top: 41px;
        }
        
        .c36 {
          margin-left: 49px;
          margin-top: -71px;
        }
        
        .c37 {
          margin-left: 81px;
          margin-top: -15px;
        }
        
        .r1 {
          animation-name: pulse00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: .2s;
          -webkit-animation-name: pulse00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-delay: .2s;
        }
        
        .r2 {
          animation-name: pulse00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: .4s;
          -webkit-animation-name: pulse00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-delay: .4s;
        }
        
        .r3 {
          animation-name: pulse00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: .6s;
          -webkit-animation-name: pulse00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-delay: .6s;
        }
        
        .r1 > .hex-brick {
          animation-name: fade00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: .2s;
          -webkit-animation-name: fade00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-delay: .2s;
        }
        
        .r2 > .hex-brick {
          animation-name: fade00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: .4s;
          -webkit-animation-name: fade00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-delay: .4s;
        }
        
        .r3 > .hex-brick {
          animation-name: fade00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: .6s;
          -webkit-animation-name: fade00;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-delay: .6s;
        }
        
        @keyframes pulse00 {
          0% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
        
          50% {
            -webkit-transform: scale(0.01);
            transform: scale(0.01);
          }
        
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
        }
        
        @keyframes fade00 {
          0% {
            background: #252525;
          }
        
          50% {
            background: #000000;
          }
        
          100% {
            background: #353535;
          }
        }
        `,
  },
  {
    id: 7,
    component: <LoaderSpinner />,
    name: "LoaderSpinner",
    html: `<div class="spinner"></div>
        `,
    scss: `.spinner {
          width: 56px;
          height: 56px;
          display: grid;
          border: 4.5px solid #0000;
          border-radius: 50%;
          border-color: #dbdcef #0000;
          animation: spinner-e04l1k 1s infinite linear;
        }
        
        .spinner::before,
        .spinner::after {
          content: "";
          grid-area: 1/1;
          margin: 2.2px;
          border: inherit;
          border-radius: 50%;
        }
        
        .spinner::before {
          border-color: #474bff #0000;
          animation: inherit;
          animation-duration: 0.5s;
          animation-direction: reverse;
        }
        
        .spinner::after {
          margin: 8.9px;
        }
        
        @keyframes spinner-e04l1k {
          100% {
            transform: rotate(1turn);
          }
        }`,
  },
  {
    id: 8,
    component: <LoaderHastag />,
    name: "Hastag",
    html: `
        <div class="loader"></div>`,
    scss: `.loader {
          position: relative;
          width: 2.5em;
          height: 2.5em;
          transform: rotate(165deg);
         }
         
         .loader:before, .loader:after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          display: block;
          width: 0.5em;
          height: 0.5em;
          border-radius: 0.25em;
          transform: translate(-50%, -50%);
         }
         
         .loader:before {
          animation: before8 2s infinite;
         }
         
         .loader:after {
          animation: after6 2s infinite;
         }
         
         @keyframes before8 {
          0% {
           width: 0.5em;
           box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
          }
         
          35% {
           width: 2.5em;
           box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
          }
         
          70% {
           width: 0.5em;
           box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
          }
         
          100% {
           box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
          }
         }
         
         @keyframes after6 {
          0% {
           height: 0.5em;
           box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
          }
         
          35% {
           height: 2.5em;
           box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
          }
         
          70% {
           height: 0.5em;
           box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
          }
         
          100% {
           box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
          }
         }
         
         .loader {
          position: absolute;
          top: calc(50% - 1.25em);
          left: calc(50% - 1.25em);
         }`,
  },
  {
    id: 9,
    component: <LoaderStairs />,
    name: "Stairs",
    html: `<div class="loader"></div>`,
    scss: `.loader {
          position: relative;
          width: 120px;
          height: 90px;
          margin: 0 auto;
        }
        
        .loader:before {
          content: "";
          position: absolute;
          bottom: 30px;
          left: 50px;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          background: #2a9d8f;
          animation: loading-bounce 0.5s ease-in-out infinite alternate;
        }
        
        .loader:after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          height: 7px;
          width: 45px;
          border-radius: 4px;
          box-shadow: 0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2;
          animation: loading-step 1s ease-in-out infinite;
        }
        
        @keyframes loading-bounce {
          0% {
            transform: scale(1, 0.7);
          }
        
          40% {
            transform: scale(0.8, 1.2);
          }
        
          60% {
            transform: scale(1, 1);
          }
        
          100% {
            bottom: 140px;
          }
        }
        
        @keyframes loading-step {
          0% {
            box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
                    0 10px 0 #f2f2f2,
                    -35px 50px 0 #f2f2f2,
                    -70px 90px 0 #f2f2f2;
          }
        
          100% {
            box-shadow: 0 10px 0 #f2f2f2,
                    -35px 50px 0 #f2f2f2,
                    -70px 90px 0 #f2f2f2,
                    -70px 90px 0 rgba(0, 0, 0, 0);
          }
        }`,
  },
  {
    id: 10,
    component: <LoaderText />,
    name: "Text",
    html: `
        <div class="loader">
          <span class="loader-text">loading</span>
            <span class="load"></span>
        </div>
      `,
    scss: `.loader {
          width: 80px;
          height: 50px;
          position: relative;
        }
        
        .loader-text {
          position: absolute;
          top: 0;
          padding: 0;
          margin: 0;
          color: #C8B6FF;
          animation: text_713 3.5s ease both infinite;
          font-size: .8rem;
          letter-spacing: 1px;
        }
        
        .load {
          background-color: #9A79FF;
          border-radius: 50px;
          display: block;
          height: 16px;
          width: 16px;
          bottom: 0;
          position: absolute;
          transform: translateX(64px);
          animation: loading_713 3.5s ease both infinite;
        }
        
        .load::before {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          background-color: #D1C2FF;
          border-radius: inherit;
          animation: loading2_713 3.5s ease both infinite;
        }
        
        @keyframes text_713 {
          0% {
            letter-spacing: 1px;
            transform: translateX(0px);
          }
        
          40% {
            letter-spacing: 2px;
            transform: translateX(26px);
          }
        
          80% {
            letter-spacing: 1px;
            transform: translateX(32px);
          }
        
          90% {
            letter-spacing: 2px;
            transform: translateX(0px);
          }
        
          100% {
            letter-spacing: 1px;
            transform: translateX(0px);
          }
        }
        
        @keyframes loading_713 {
          0% {
            width: 16px;
            transform: translateX(0px);
          }
        
          40% {
            width: 100%;
            transform: translateX(0px);
          }
        
          80% {
            width: 16px;
            transform: translateX(64px);
          }
        
          90% {
            width: 100%;
            transform: translateX(0px);
          }
        
          100% {
            width: 16px;
            transform: translateX(0px);
          }
        }
        
        @keyframes loading2_713 {
          0% {
            transform: translateX(0px);
            width: 16px;
          }
        
          40% {
            transform: translateX(0%);
            width: 80%;
          }
        
          80% {
            width: 100%;
            transform: translateX(0px);
          }
        
          90% {
            width: 80%;
            transform: translateX(15px);
          }
        
          100% {
            transform: translateX(0px);
            width: 16px;
          }
        }
         
         
        
        `,
  },
  {
    id: 11,
    component: <LoaderCard />,
    name: "LoaderCard",
    html: `<div class="loader">
        <div class="wrapper">
          <div class="circle"></div>
          <div class="line-1"></div>
          <div class="line-2"></div>
          <div class="line-3"></div>
          <div class="line-4"></div>
        </div>
      </div>`,
    scss: `.loader {
          position: relative;
          width: 240px;
          height: 130px;
          margin-bottom: 10px;
          border: 1px solid #d3d3d3;
          padding: 15px;
          background-color: #e3e3e3;
          overflow: hidden;
        }
        
        .loader:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(110deg, rgba(227, 227, 227, 0) 0%, rgba(227, 227, 227, 0) 40%, rgba(227, 227, 227, 0.5) 50%, rgba(227, 227, 227, 0) 60%, rgba(227, 227, 227, 0) 100%);
          animation: gradient-animation_2 1.2s linear infinite;
        }
        
        .loader .wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .loader .wrapper > div {
          background-color: #cacaca;
        }
        
        .loader .circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        
        .loader .button {
          display: inline-block;
          height: 32px;
          width: 75px;
        }
        
        .loader .line-1 {
          position: absolute;
          top: 11px;
          left: 58px;
          height: 10px;
          width: 100px;
        }
        
        .loader .line-2 {
          position: absolute;
          top: 34px;
          left: 58px;
          height: 10px;
          width: 150px;
        }
        
        .loader .line-3 {
          position: absolute;
          top: 57px;
          left: 0px;
          height: 10px;
          width: 100%;
        }
        
        .loader .line-4 {
          position: absolute;
          top: 80px;
          left: 0px;
          height: 10px;
          width: 92%;
        }
        
        @keyframes gradient-animation_2 {
          0% {
            transform: translateX(-100%);
          }
        
          100% {
            transform: translateX(100%);
          }
        }`,
  },
  {
    id: 12,
    component: <LoaderHamster />,
    name: "Hamster",
    html: `<div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
        <div class="wheel"></div>
        <div class="hamster">
          <div class="hamster__body">
            <div class="hamster__head">
              <div class="hamster__ear"></div>
              <div class="hamster__eye"></div>
              <div class="hamster__nose"></div>
            </div>
            <div class="hamster__limb hamster__limb--fr"></div>
            <div class="hamster__limb hamster__limb--fl"></div>
            <div class="hamster__limb hamster__limb--br"></div>
            <div class="hamster__limb hamster__limb--bl"></div>
            <div class="hamster__tail"></div>
          </div>
        </div>
        <div class="spoke"></div>
      </div>`,
    scss: `.wheel-and-hamster {
          --dur: 1s;
          position: relative;
          width: 12em;
          height: 12em;
          font-size: 14px;
        }
        
        .wheel,
        .hamster,
        .hamster div,
        .spoke {
          position: absolute;
        }
        
        .wheel,
        .spoke {
          border-radius: 50%;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .wheel {
          background: radial-gradient(100% 100% at center,hsla(0,0%,60%,0) 47.8%,hsl(0,0%,60%) 48%);
          z-index: 2;
        }
        
        .hamster {
          animation: hamster var(--dur) ease-in-out infinite;
          top: 50%;
          left: calc(50% - 3.5em);
          width: 7em;
          height: 3.75em;
          transform: rotate(4deg) translate(-0.8em,1.85em);
          transform-origin: 50% 0;
          z-index: 1;
        }
        
        .hamster__head {
          animation: hamsterHead var(--dur) ease-in-out infinite;
          background: hsl(30,90%,55%);
          border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
          box-shadow: 0 -0.25em 0 hsl(30,90%,80%) inset,
            0.75em -1.55em 0 hsl(30,90%,90%) inset;
          top: 0;
          left: -2em;
          width: 2.75em;
          height: 2.5em;
          transform-origin: 100% 50%;
        }
        
        .hamster__ear {
          animation: hamsterEar var(--dur) ease-in-out infinite;
          background: hsl(0,90%,85%);
          border-radius: 50%;
          box-shadow: -0.25em 0 hsl(30,90%,55%) inset;
          top: -0.25em;
          right: -0.25em;
          width: 0.75em;
          height: 0.75em;
          transform-origin: 50% 75%;
        }
        
        .hamster__eye {
          animation: hamsterEye var(--dur) linear infinite;
          background-color: hsl(0,0%,0%);
          border-radius: 50%;
          top: 0.375em;
          left: 1.25em;
          width: 0.5em;
          height: 0.5em;
        }
        
        .hamster__nose {
          background: hsl(0,90%,75%);
          border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
          top: 0.75em;
          left: 0;
          width: 0.2em;
          height: 0.25em;
        }
        
        .hamster__body {
          animation: hamsterBody var(--dur) ease-in-out infinite;
          background: hsl(30,90%,90%);
          border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
          box-shadow: 0.1em 0.75em 0 hsl(30,90%,55%) inset,
            0.15em -0.5em 0 hsl(30,90%,80%) inset;
          top: 0.25em;
          left: 2em;
          width: 4.5em;
          height: 3em;
          transform-origin: 17% 50%;
          transform-style: preserve-3d;
        }
        
        .hamster__limb--fr,
        .hamster__limb--fl {
          clip-path: polygon(0 0,100% 0,70% 80%,60% 100%,0% 100%,40% 80%);
          top: 2em;
          left: 0.5em;
          width: 1em;
          height: 1.5em;
          transform-origin: 50% 0;
        }
        
        .hamster__limb--fr {
          animation: hamsterFRLimb var(--dur) linear infinite;
          background: linear-gradient(hsl(30,90%,80%) 80%,hsl(0,90%,75%) 80%);
          transform: rotate(15deg) translateZ(-1px);
        }
        
        .hamster__limb--fl {
          animation: hamsterFLLimb var(--dur) linear infinite;
          background: linear-gradient(hsl(30,90%,90%) 80%,hsl(0,90%,85%) 80%);
          transform: rotate(15deg);
        }
        
        .hamster__limb--br,
        .hamster__limb--bl {
          border-radius: 0.75em 0.75em 0 0;
          clip-path: polygon(0 0,100% 0,100% 30%,70% 90%,70% 100%,30% 100%,40% 90%,0% 30%);
          top: 1em;
          left: 2.8em;
          width: 1.5em;
          height: 2.5em;
          transform-origin: 50% 30%;
        }
        
        .hamster__limb--br {
          animation: hamsterBRLimb var(--dur) linear infinite;
          background: linear-gradient(hsl(30,90%,80%) 90%,hsl(0,90%,75%) 90%);
          transform: rotate(-25deg) translateZ(-1px);
        }
        
        .hamster__limb--bl {
          animation: hamsterBLLimb var(--dur) linear infinite;
          background: linear-gradient(hsl(30,90%,90%) 90%,hsl(0,90%,85%) 90%);
          transform: rotate(-25deg);
        }
        
        .hamster__tail {
          animation: hamsterTail var(--dur) linear infinite;
          background: hsl(0,90%,85%);
          border-radius: 0.25em 50% 50% 0.25em;
          box-shadow: 0 -0.2em 0 hsl(0,90%,75%) inset;
          top: 1.5em;
          right: -0.5em;
          width: 1em;
          height: 0.5em;
          transform: rotate(30deg) translateZ(-1px);
          transform-origin: 0.25em 0.25em;
        }
        
        .spoke {
          animation: spoke var(--dur) linear infinite;
          background: radial-gradient(100% 100% at center,hsl(0,0%,60%) 4.8%,hsla(0,0%,60%,0) 5%),
            linear-gradient(hsla(0,0%,55%,0) 46.9%,hsl(0,0%,65%) 47% 52.9%,hsla(0,0%,65%,0) 53%) 50% 50% / 99% 99% no-repeat;
        }
        
        /* Animations */
        @keyframes hamster {
          from, to {
            transform: rotate(4deg) translate(-0.8em,1.85em);
          }
        
          50% {
            transform: rotate(0) translate(-0.8em,1.85em);
          }
        }
        
        @keyframes hamsterHead {
          from, 25%, 50%, 75%, to {
            transform: rotate(0);
          }
        
          12.5%, 37.5%, 62.5%, 87.5% {
            transform: rotate(8deg);
          }
        }
        
        @keyframes hamsterEye {
          from, 90%, to {
            transform: scaleY(1);
          }
        
          95% {
            transform: scaleY(0);
          }
        }
        
        @keyframes hamsterEar {
          from, 25%, 50%, 75%, to {
            transform: rotate(0);
          }
        
          12.5%, 37.5%, 62.5%, 87.5% {
            transform: rotate(12deg);
          }
        }
        
        @keyframes hamsterBody {
          from, 25%, 50%, 75%, to {
            transform: rotate(0);
          }
        
          12.5%, 37.5%, 62.5%, 87.5% {
            transform: rotate(-2deg);
          }
        }
        
        @keyframes hamsterFRLimb {
          from, 25%, 50%, 75%, to {
            transform: rotate(50deg) translateZ(-1px);
          }
        
          12.5%, 37.5%, 62.5%, 87.5% {
            transform: rotate(-30deg) translateZ(-1px);
          }
        }
        
        @keyframes hamsterFLLimb {
          from, 25%, 50%, 75%, to {
            transform: rotate(-30deg);
          }
        
          12.5%, 37.5%, 62.5%, 87.5% {
            transform: rotate(50deg);
          }
        }
        
        @keyframes hamsterBRLimb {
          from, 25%, 50%, 75%, to {
            transform: rotate(-60deg) translateZ(-1px);
          }
        
          12.5%, 37.5%, 62.5%, 87.5% {
            transform: rotate(20deg) translateZ(-1px);
          }
        }
        
        @keyframes hamsterBLLimb {
          from, 25%, 50%, 75%, to {
            transform: rotate(20deg);
          }
        
          12.5%, 37.5%, 62.5%, 87.5% {
            transform: rotate(-60deg);
          }
        }
        
        @keyframes hamsterTail {
          from, 25%, 50%, 75%, to {
            transform: rotate(30deg) translateZ(-1px);
          }
        
          12.5%, 37.5%, 62.5%, 87.5% {
            transform: rotate(10deg) translateZ(-1px);
          }
        }
        
        @keyframes spoke {
          from {
            transform: rotate(0);
          }
        
          to {
            transform: rotate(-1turn);
          }
        }`,
  },
  {
    id: 13,
    component: <LoaderBars />,
    name: "bars",
    html: `<div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>`,
    scss: `.loading {
          --speed-of-animation: 0.9s;
          --gap: 6px;
          --first-color: #4c86f9;
          --second-color: #49a84c;
          --third-color: #f6bb02;
          --fourth-color: #49a84c;
          --fifth-color: #2196f3;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          gap: 6px;
          height: 100px;
         }
         
         .loading span {
          width: 4px;
          height: 50px;
          background: var(--first-color);
          animation: scale var(--speed-of-animation) ease-in-out infinite;
         }
         
         .loading span:nth-child(2) {
          background: var(--second-color);
          animation-delay: -0.8s;
         }
         
         .loading span:nth-child(3) {
          background: var(--third-color);
          animation-delay: -0.7s;
         }
         
         .loading span:nth-child(4) {
          background: var(--fourth-color);
          animation-delay: -0.6s;
         }
         
         .loading span:nth-child(5) {
          background: var(--fifth-color);
          animation-delay: -0.5s;
         }
         
         @keyframes scale {
          0%, 40%, 100% {
           transform: scaleY(0.05);
          }
         
          20% {
           transform: scaleY(1);
          }
         }`,
  },
  {
    id: 14,
    component: <LoaderAlien />,
    name: "alien",
    html: `<div class="spinner"></div>`,
    scss: `/* Normal Usage */
        .spinner:before {
          transform: rotateX(60deg) rotateY(45deg) rotateZ(45deg);
          animation: 750ms rotateBefore infinite linear reverse;
        }
        
        .spinner:after {
          transform: rotateX(240deg) rotateY(45deg) rotateZ(45deg);
          animation: 750ms rotateAfter infinite linear;
        }
        
        .spinner:before,
        .spinner:after {
          box-sizing: border-box;
          content: '';
          display: block;
          position: absolute;
          margin-top: -5em;
          margin-left: -5em;
          width: 10em;
          height: 10em;
          transform-style: preserve-3d;
          transform-origin: 50%;
          transform: rotateY(50%);
          perspective-origin: 50% 50%;
          perspective: 340px;
          background-size: 10em 10em;
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI2NnB4IiBoZWlnaHQ9IjI5N3B4IiB2aWV3Qm94PSIwIDAgMjY2IDI5NyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+CiAgICA8dGl0bGU+c3Bpbm5lcjwvdGl0bGU+CiAgICA8ZGVzY3JpcHRpb24+Q3JlYXRlZCB3aXRoIFNrZXRjaCAoaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoKTwvZGVzY3JpcHRpb24+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8cGF0aCBkPSJNMTcxLjUwNzgxMywzLjI1MDAwMDM4IEMyMjYuMjA4MTgzLDEyLjg1NzcxMTEgMjk3LjExMjcyMiw3MS40OTEyODIzIDI1MC44OTU1OTksMTA4LjQxMDE1NSBDMjE2LjU4MjAyNCwxMzUuODIwMzEgMTg2LjUyODQwNSw5Ny4wNjI0OTY0IDE1Ni44MDA3NzQsODUuNzczNDM0NiBDMTI3LjA3MzE0Myw3NC40ODQzNzIxIDc2Ljg4ODQ2MzIsODQuMjE2MTQ2MiA2MC4xMjg5MDY1LDEwOC40MTAxNTMgQy0xNS45ODA0Njg1LDIxOC4yODEyNDcgMTQ1LjI3NzM0NCwyOTYuNjY3OTY4IDE0NS4yNzczNDQsMjk2LjY2Nzk2OCBDMTQ1LjI3NzM0NCwyOTYuNjY3OTY4IC0yNS40NDkyMTg3LDI1Ny4yNDIxOTggMy4zOTg0Mzc1LDEwOC40MTAxNTUgQzE2LjMwNzA2NjEsNDEuODExNDE3NCA4NC43Mjc1ODI5LC0xMS45OTIyOTg1IDE3MS41MDc4MTMsMy4yNTAwMDAzOCBaIiBpZD0iUGF0aC0xIiBmaWxsPSIjMDAwMDAwIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==);
        }
        /* sitNSpin.less */
        @keyframes rotateBefore {
          from {
            transform: rotateX(60deg) rotateY(45deg) rotateZ(0deg);
          }
        
          to {
            transform: rotateX(60deg) rotateY(45deg) rotateZ(-360deg);
          }
        }
        
        @keyframes rotateAfter {
          from {
            transform: rotateX(240deg) rotateY(45deg) rotateZ(0deg);
          }
        
          to {
            transform: rotateX(240deg) rotateY(45deg) rotateZ(360deg);
          }
        }`,
  },
  {
    id: 15,
    component: <LoaderClock />,
    name: "clock",
    html: `<div class="loader">
        <span class="hour"></span>
        <span class="min"></span>
        <span class="circel"></span>
      </div>`,
    scss: `.loader {
          width: 65px;
          height: 65px;
          border: 8px solid #ee9b00a6;
          border-radius: 50px;
          position: relative;
         }
         
         .loader span {
          display: block;
          background: #ee9b00;
         }
         
         .loader .hour ,
         .loader .min {
          width: 6px;
          height: 22px;
          border-radius: 50px;
          position: absolute;
          top: 24.5px;
          left: 21px;
          animation: load9243 1.2s linear infinite;
          transform-origin: top center;
         }
         
         .loader .min {
          height: 17px;
          animation: load9243 4s linear infinite;
         }
         
         .loader .circel {
          width: 10px;
          height: 10px;
          border-radius: 50px;
          position: absolute;
          top: 19px;
          left: 19px;
         }
         
         @keyframes load9243 {
          0% {
           transform: rotate(0deg);
          }
         
          100% {
           transform: rotate(360deg);
          }
         }`,
  },
  {
    id: 16,
    component: <LoadeFollow />,
    name: "follow",
    html: `<div class="follow-the-leader-line">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>`,
    scss: `@-webkit-keyframes follow-the-leader {
          0% {
            -webkit-transform: rotate(0deg) translateY(-200%);
            transform: rotate(0deg) translateY(-200%);
          }
        
          60%,
          100% {
            -webkit-transform: rotate(360deg) translateY(-200%);
            transform: rotate(360deg) translateY(-200%);
          }
        }
        
        @keyframes follow-the-leader {
          0% {
            -webkit-transform: rotate(0deg) translateY(-200%);
            transform: rotate(0deg) translateY(-200%);
          }
        
          60%,
          100% {
            -webkit-transform: rotate(360deg) translateY(-200%);
            transform: rotate(360deg) translateY(-200%);
          }
        }
        
        .follow-the-leader-line {
          height: 14px;
          position: relative;
          width: 14px;
        }
        
        .follow-the-leader-line div {
          -webkit-animation: follow-the-leader 1.25s infinite backwards;
          animation: follow-the-leader 1.25s infinite backwards;
          background-color: #ffffff;
          border-radius: 100%;
          height: 100%;
          width: 100%;
        }
        
        .follow-the-leader-line div:nth-child(1) {
          -webkit-animation-delay: 0.15s;
          animation-delay: 0.15s;
          background-color: rgba(255, 255, 255, 0.9);
        }
        
        .follow-the-leader-line div:nth-child(2) {
          -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
          background-color: rgba(255, 255, 255, 0.8);
        }
        
        .follow-the-leader-line div:nth-child(3) {
          -webkit-animation-delay: 0.45s;
          animation-delay: 0.45s;
          background-color: rgba(255, 255, 255, 0.7);
        }
        
        .follow-the-leader-line div:nth-child(4) {
          -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
          background-color: rgba(255, 255, 255, 0.6);
        }
        
        .follow-the-leader-line div:nth-child(5) {
          -webkit-animation-delay: 0.75s;
          animation-delay: 0.75s;
          background-color: rgba(255, 255, 255, 0.5);
        }`,
  },
  {
    id: 17,
    component: <LoaderSmile />,
    name: "Smile",
    html: `<svg class="gegga">
        <defs>
            <filter id="gegga">
                <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10" result="inreGegga"></feColorMatrix>
                <feComposite in="SourceGraphic" in2="inreGegga" operator="atop"></feComposite>
            </filter>
        </defs>
    </svg>
    <svg class="snurra" width="200" height="200" viewBox="0 0 200 200">
        <defs>
            <linearGradient id="linjärGradient">
                <stop class="stopp1" offset="0"></stop>
                <stop class="stopp2" offset="1"></stop>
            </linearGradient>
            <linearGradient y2="160" x2="160" y1="40" x1="40" gradientUnits="userSpaceOnUse" id="gradient" xlink:href="#linjärGradient"></linearGradient>
        </defs>
        <path class="halvan" d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"></path>
        <circle class="strecken" cx="100" cy="100" r="64"></circle>
    </svg>
    <svg class="skugga" width="200" height="200" viewBox="0 0 200 200">
        <path class="halvan" d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"></path>
        <circle class="strecken" cx="100" cy="100" r="64"></circle>
    </svg>`,
    scss: `.gegga {
          width: 0;
        }
        
        .snurra {
          filter: url(#gegga);
        }
        
        .stopp1 {
          stop-color: #f700a8;
        }
        
        .stopp2 {
          stop-color: #ff8000;
        }
        
        .halvan {
          animation: Snurra1 10s infinite linear;
          stroke-dasharray: 180 800;
          fill: none;
          stroke: url(#gradient);
          stroke-width: 23;
          stroke-linecap: round;
        }
        
        .strecken {
          animation: Snurra1 3s infinite linear;
          stroke-dasharray: 26 54;
          fill: none;
          stroke: url(#gradient);
          stroke-width: 23;
          stroke-linecap: round;
        }
        
        .skugga {
          filter: blur(5px);
          opacity: 0.3;
          position: absolute;
          transform: translate(3px, 3px);
        }
        
        @keyframes Snurra1 {
          0% {
            stroke-dashoffset: 0;
          }
        
          100% {
            stroke-dashoffset: -403px;
          }
        }
        `,
  },
  {
    id: 18,
    component: <LoaderPong />,
    name: "pong",
    html: `<div class="loader"></div>`,
    scss: `.loader {
          position: relative;
          height: 40px;
          width: 6px;
          color: #FFF;
          animation: paddles 0.75s ease-out infinite;
        }
        
        .loader:before {
          content: "";
          position: absolute;
          margin: 0 auto;
          left: 0;
          right: 0;
          top: 15px;
          width: 12px;
          height: 12px;
          background-color: greenyellow;
          border-radius: 50%;
          animation: ballbounce 0.6s ease-out infinite;
        }
        
        @keyframes paddles {
          0% {
            box-shadow: -25px -10px, 25px 10px
          }
        
          50% {
            box-shadow: -25px 8px, 25px -10px
          }
        
          100% {
            box-shadow: -25px -10px, 25px 10px
          }
        }
        
        @keyframes ballbounce {
          0% {
            transform: translateX(-20px) scale(1, 1.2)
          }
        
          25% {
            transform: scale(1.2, 1)
          }
        
          50% {
            transform: translateX(15px) scale(1, 1.2)
          }
        
          75% {
            transform: scale(1.2, 1)
          }
        
          100% {
            transform: translateX(-20px)
          }
        }
              `,
  },
  {
    id: 19,
    component: <LoaderPercentage />,
    name: "Percentage",
    html: `<div class="loader"></div>`,
    scss: `.loader {
          display: block;
          position: relative;
          height: 32px;
          width: 200px;
          background: #fff;
          border: 2px solid #fff;
          color: rgb(223, 60, 60);
          overflow: hidden;
        }
        
        .loader::before {
          content: '';
          background: rgb(223, 60, 60);
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 100%;
          animation: loading_302 10s linear infinite;
        }
        
        .loader:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          text-align: center;
          font-size: 18px;
          line-height: 32px;
          color: rgb(0,255,255);
          mix-blend-mode: difference;
          animation: percentage_302 10s linear infinite;
        }
        
        @keyframes loading_302 {
          0% {
            width: 0
          }
        
          100% {
            width: 100%
          }
        }
        
        @keyframes percentage_302 {
          0% {
            content: "0%"
          }
        
          5% {
            content: "5%"
          }
        
          10% {
            content: "10%"
          }
        
          20% {
            content: "20%"
          }
        
          30% {
            content: "30%"
          }
        
          40% {
            content: "40%"
          }
        
          50% {
            content: "50%"
          }
        
          60% {
            content: "60%"
          }
        
          70% {
            content: "70%"
          }
        
          80% {
            content: "80%"
          }
        
          90% {
            content: "90%"
          }
        
          95% {
            content: "95%"
          }
        
          96% {
            content: "96%"
          }
        
          97% {
            content: "97%"
          }
        
          98% {
            content: "98%"
          }
        
          99% {
            content: "99%"
          }
        
          100% {
            content: "100%"
          }
        }
          
          `,
  },
  {
    id: 20,
    component: <LoaderStarWars />,
    name: "StarWars",
    html: `<div id="loader">
        <div class="ls-particles ls-part-1"></div>
        <div class="ls-particles ls-part-2"></div>
        <div class="ls-particles ls-part-3"></div>
        <div class="ls-particles ls-part-4"></div>
        <div class="ls-particles ls-part-5"></div>
        <div class="lightsaber ls-left ls-green"></div>
        <div class="lightsaber ls-right ls-red"></div>
      </div>`,
    scss: `#loader {
          width: 80px;
          height: 40px;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -20px -40px;
          z-index: 1000;
        }
        
        .lightsaber {
          position: absolute;
          width: 4px;
          height: 12px;
          background-color: #666;
          border-radius: 1px;
          bottom: 0;
        }
        
        .lightsaber.ls-left {
          left: 0;
        }
        
        .lightsaber.ls-right {
          right: 0;
        }
        
        .lightsaber:before {
          position: absolute;
          content: ' ';
          display: block;
          width: 2px;
          height: 25px;
          max-height: 1px;
          left: 1px;
          top: 1px;
          background-color: #fff;
          border-radius: 1px;
          -webkit-transform: rotateZ(180deg);
          transform: rotateZ(180deg);
          -webkit-transform-origin: center top;
          -ms-transform-origin: center top;
          transform-origin: center top;
        }
        
        .lightsaber:after {
          position: absolute;
          content: ' ';
          display: block;
          width: 2px;
          height: 2px;
          left: 1px;
          top: 4px;
          background-color: #fff;
          border-radius: 50%;
        }
        
        .ls-particles {
          position: absolute;
          left: 42px;
          top: 10px;
          width: 1px;
          height: 5px;
          background-color: rgb(51, 51, 51, 0);
          -webkit-transform: rotateZ(0deg);
          transform: rotateZ(0deg);
        }
        
        .lightsaber.ls-green:before {
          -webkit-animation: showlightgreen 2s ease-in-out infinite 1s;
          animation: showlightgreen 2s ease-in-out infinite 1s;
        }
        
        .lightsaber.ls-red:before {
          -webkit-animation: showlightred 2s ease-in-out infinite 1s;
          animation: showlightred 2s ease-in-out infinite 1s;
        }
        
        .lightsaber.ls-left {
          -webkit-animation: fightleft 2s ease-in-out infinite 1s;
          animation: fightleft 2s ease-in-out infinite 1s;
        }
        
        .lightsaber.ls-right {
          -webkit-animation: fightright 2s ease-in-out infinite 1s;
          animation: fightright 2s ease-in-out infinite 1s;
        }
        
        .ls-particles.ls-part-1 {
          -webkit-animation: particles1 2s ease-out infinite 1s;
          animation: particles1 2s ease-out infinite 1s;
        }
        
        .ls-particles.ls-part-2 {
          -webkit-animation: particles2 2s ease-out infinite 1s;
          animation: particles2 2s ease-out infinite 1s;
        }
        
        .ls-particles.ls-part-3 {
          -webkit-animation: particles3 2s ease-out infinite 1s;
          animation: particles3 2s ease-out infinite 1s;
        }
        
        .ls-particles.ls-part-4 {
          -webkit-animation: particles4 2s ease-out infinite 1s;
          animation: particles4 2s ease-out infinite 1s;
        }
        
        .ls-particles.ls-part-5 {
          -webkit-animation: particles5 2s ease-out infinite 1s;
          animation: particles5 2s ease-out infinite 1s;
        }
        
        @-webkit-keyframes showlightgreen {
          0% {
            max-height: 0;
            box-shadow: 0 0 0 0 #87c054;
          }
        
          5% {
            box-shadow: 0 0 4px 2px #87c054;
          }
        
          10% {
            max-height: 22px;
          }
        
          80% {
            max-height: 22px;
          }
        
          85% {
            box-shadow: 0 0 4px 2px #87c054;
          }
        
          100% {
            max-height: 0;
            box-shadow: 0 0 0 0 #87c054;
          }
        }
        
        @-webkit-keyframes showlightred {
          0% {
            max-height: 0;
            box-shadow: 0 0 0 0 #f06363;
          }
        
          20% {
            box-shadow: 0 0 4px 2px #f06363;
          }
        
          25% {
            max-height: 22px;
          }
        
          80% {
            max-height: 22px;
          }
        
          85% {
            box-shadow: 0 0 4px 2px #f06363;
          }
        
          100% {
            max-height: 0;
            box-shadow: 0 0 0 0 #f06363;
          }
        }
        
        @-webkit-keyframes fightleft {
          0% {
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
            left: 0;
            bottom: 0;
          }
        
          30% {
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
            bottom: 0;
          }
        
          40% {
            -webkit-transform: rotateZ(45deg);
            transform: rotateZ(45deg);
            left: 0;
            bottom: 2px;
          }
        
          45% {
            -webkit-transform: rotateZ(65deg);
            transform: rotateZ(65deg);
            left: 0;
          }
        
          65% {
            -webkit-transform: rotateZ(410deg);
            transform: rotateZ(410deg);
            left: 30px;
            bottom: 10px;
          }
        
          95% {
            -webkit-transform: rotateZ(410deg);
            transform: rotateZ(410deg);
            left: 0;
            bottom: 0;
          }
        
          100% {
            -webkit-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
            left: 0;
            bottom: 0;
          }
        }
        
        @-webkit-keyframes fightright {
          0% {
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
            right: 0;
            bottom: 0;
          }
        
          30% {
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
            bottom: 0;
          }
        
          45% {
            -webkit-transform: rotateZ(-45deg);
            transform: rotateZ(-45deg);
            right: 0;
            bottom: 2px;
          }
        
          50% {
            -webkit-transform: rotateZ(-65deg);
            transform: rotateZ(-65deg);
            right: 0;
          }
        
          68% {
            -webkit-transform: rotateZ(-410deg);
            transform: rotateZ(-410deg);
            right: 27px;
            bottom: 13px;
          }
        
          95% {
            -webkit-transform: rotateZ(-410deg);
            transform: rotateZ(-410deg);
            right: 0;
            bottom: 0;
          }
        
          100% {
            -webkit-transform: rotateZ(-360deg);
            transform: rotateZ(-360deg);
            right: 0;
            bottom: 0;
          }
        }
        
        @-webkit-keyframes particles1 {
          0% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(35deg) translateY(0px);
            transform: rotateZ(35deg) translateY(0px);
          }
        
          63% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(35deg) translateY(0px);
            transform: rotateZ(35deg) translateY(0px);
          }
        
          64% {
            background-color: rgba(51, 51, 51,1);
            -webkit-transform: rotateZ(35deg) translateY(0px);
            transform: rotateZ(35deg) translateY(0px);
          }
        
          100% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(35deg) translateY(-30px);
            transform: rotateZ(35deg) translateY(-30px);
          }
        }
        
        @-webkit-keyframes particles2 {
          0% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-65deg) translateY(0px);
            transform: rotateZ(-65deg) translateY(0px);
          }
        
          63% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-65deg) translateY(0px);
            transform: rotateZ(-65deg) translateY(0px);
          }
        
          64% {
            background-color: rgba(51, 51, 51,1);
            -webkit-transform: rotateZ(-65deg) translateY(0px);
            transform: rotateZ(-65deg) translateY(0px);
          }
        
          95% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-65deg) translateY(-40px);
            transform: rotateZ(-65deg) translateY(-40px);
          }
        
          100% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-65deg) translateY(-40px);
            transform: rotateZ(-65deg) translateY(-40px);
          }
        }
        
        @-webkit-keyframes particles3 {
          0% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-75deg) translateY(0px);
            transform: rotateZ(-75deg) translateY(0px);
          }
        
          63% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-75deg) translateY(0px);
            transform: rotateZ(-75deg) translateY(0px);
          }
        
          64% {
            background-color: rgba(51, 51, 51,1);
            -webkit-transform: rotateZ(-75deg) translateY(0px);
            transform: rotateZ(-75deg) translateY(0px);
          }
        
          97% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-75deg) translateY(-35px);
            transform: rotateZ(-75deg) translateY(-35px);
          }
        
          100% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-75deg) translateY(-35px);
            transform: rotateZ(-75deg) translateY(-35px);
          }
        }
        
        @-webkit-keyframes particles4 {
          0% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-25deg) translateY(0px);
            transform: rotateZ(-25deg) translateY(0px);
          }
        
          63% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-25deg) translateY(0px);
            transform: rotateZ(-25deg) translateY(0px);
          }
        
          64% {
            background-color: rgba(51, 51, 51,1);
            -webkit-transform: rotateZ(-25deg) translateY(0px);
            transform: rotateZ(-25deg) translateY(0px);
          }
        
          97% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-25deg) translateY(-30px);
            transform: rotateZ(-25deg) translateY(-30px);
          }
        
          100% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-25deg) translateY(-30px);
            transform: rotateZ(-25deg) translateY(-30px);
          }
        }
        
        @-webkit-keyframes particles5 {
          0% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(65deg) translateY(0px);
            transform: rotateZ(65deg) translateY(0px);
          }
        
          63% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(65deg) translateY(0px);
            transform: rotateZ(65deg) translateY(0px);
          }
        
          64% {
            background-color: rgba(51, 51, 51,1);
            -webkit-transform: rotateZ(65deg) translateY(0px);
            transform: rotateZ(65deg) translateY(0px);
          }
        
          97% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(65deg) translateY(-35px);
            transform: rotateZ(65deg) translateY(-35px);
          }
        
          100% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(65deg) translateY(-35px);
            transform: rotateZ(65deg) translateY(-35px);
          }
        }
        
        @keyframes showlightgreen {
          0% {
            max-height: 0;
            box-shadow: 0 0 0 0 #87c054;
          }
        
          5% {
            box-shadow: 0 0 4px 2px #87c054;
          }
        
          10% {
            max-height: 22px;
          }
        
          80% {
            max-height: 22px;
          }
        
          85% {
            box-shadow: 0 0 4px 2px #87c054;
          }
        
          100% {
            max-height: 0;
            box-shadow: 0 0 0 0 #87c054;
          }
        }
        
        @keyframes showlightred {
          0% {
            max-height: 0;
            box-shadow: 0 0 0 0 #f06363;
          }
        
          20% {
            box-shadow: 0 0 4px 2px #f06363;
          }
        
          25% {
            max-height: 22px;
          }
        
          80% {
            max-height: 22px;
          }
        
          85% {
            box-shadow: 0 0 4px 2px #f06363;
          }
        
          100% {
            max-height: 0;
            box-shadow: 0 0 0 0 #f06363;
          }
        }
        
        @keyframes fightleft {
          0% {
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
            left: 0;
            bottom: 0;
          }
        
          30% {
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
            bottom: 0;
          }
        
          40% {
            -webkit-transform: rotateZ(45deg);
            transform: rotateZ(45deg);
            left: 0;
            bottom: 2px;
          }
        
          45% {
            -webkit-transform: rotateZ(65deg);
            transform: rotateZ(65deg);
            left: 0;
          }
        
          65% {
            -webkit-transform: rotateZ(410deg);
            transform: rotateZ(410deg);
            left: 30px;
            bottom: 10px;
          }
        
          95% {
            -webkit-transform: rotateZ(410deg);
            transform: rotateZ(410deg);
            left: 0;
            bottom: 0;
          }
        
          100% {
            -webkit-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
            left: 0;
            bottom: 0;
          }
        }
        
        @keyframes fightright {
          0% {
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
            right: 0;
            bottom: 0;
          }
        
          30% {
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
            bottom: 0;
          }
        
          45% {
            -webkit-transform: rotateZ(-45deg);
            transform: rotateZ(-45deg);
            right: 0;
            bottom: 2px;
          }
        
          50% {
            -webkit-transform: rotateZ(-65deg);
            transform: rotateZ(-65deg);
            right: 0;
          }
        
          68% {
            -webkit-transform: rotateZ(-410deg);
            transform: rotateZ(-410deg);
            right: 27px;
            bottom: 13px;
          }
        
          95% {
            -webkit-transform: rotateZ(-410deg);
            transform: rotateZ(-410deg);
            right: 0;
            bottom: 0;
          }
        
          100% {
            -webkit-transform: rotateZ(-360deg);
            transform: rotateZ(-360deg);
            right: 0;
            bottom: 0;
          }
        }
        
        @keyframes particles1 {
          0% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(35deg) translateY(0px);
            transform: rotateZ(35deg) translateY(0px);
          }
        
          63% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(35deg) translateY(0px);
            transform: rotateZ(35deg) translateY(0px);
          }
        
          64% {
            background-color: rgba(51, 51, 51,1);
            -webkit-transform: rotateZ(35deg) translateY(0px);
            transform: rotateZ(35deg) translateY(0px);
          }
        
          100% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(35deg) translateY(-30px);
            transform: rotateZ(35deg) translateY(-30px);
          }
        }
        
        @keyframes particles2 {
          0% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-65deg) translateY(0px);
            transform: rotateZ(-65deg) translateY(0px);
          }
        
          63% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-65deg) translateY(0px);
            transform: rotateZ(-65deg) translateY(0px);
          }
        
          64% {
            background-color: rgba(51, 51, 51,1);
            -webkit-transform: rotateZ(-65deg) translateY(0px);
            transform: rotateZ(-65deg) translateY(0px);
          }
        
          95% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-65deg) translateY(-40px);
            transform: rotateZ(-65deg) translateY(-40px);
          }
        
          100% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-65deg) translateY(-40px);
            transform: rotateZ(-65deg) translateY(-40px);
          }
        }
        
        @keyframes particles3 {
          0% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-75deg) translateY(0px);
            transform: rotateZ(-75deg) translateY(0px);
          }
        
          63% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-75deg) translateY(0px);
            transform: rotateZ(-75deg) translateY(0px);
          }
        
          64% {
            background-color: rgba(51, 51, 51,1);
            -webkit-transform: rotateZ(-75deg) translateY(0px);
            transform: rotateZ(-75deg) translateY(0px);
          }
        
          97% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-75deg) translateY(-35px);
            transform: rotateZ(-75deg) translateY(-35px);
          }
        
          100% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-75deg) translateY(-35px);
            transform: rotateZ(-75deg) translateY(-35px);
          }
        }
        
        @keyframes particles4 {
          0% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-25deg) translateY(0px);
            transform: rotateZ(-25deg) translateY(0px);
          }
        
          63% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-25deg) translateY(0px);
            transform: rotateZ(-25deg) translateY(0px);
          }
        
          64% {
            background-color: rgba(51, 51, 51,1);
            -webkit-transform: rotateZ(-25deg) translateY(0px);
            transform: rotateZ(-25deg) translateY(0px);
          }
        
          97% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-25deg) translateY(-30px);
            transform: rotateZ(-25deg) translateY(-30px);
          }
        
          100% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(-25deg) translateY(-30px);
            transform: rotateZ(-25deg) translateY(-30px);
          }
        }
        
        @keyframes particles5 {
          0% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(65deg) translateY(0px);
            transform: rotateZ(65deg) translateY(0px);
          }
        
          63% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(65deg) translateY(0px);
            transform: rotateZ(65deg) translateY(0px);
          }
        
          64% {
            background-color: rgba(51, 51, 51,1);
            -webkit-transform: rotateZ(65deg) translateY(0px);
            transform: rotateZ(65deg) translateY(0px);
          }
        
          97% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(65deg) translateY(-35px);
            transform: rotateZ(65deg) translateY(-35px);
          }
        
          100% {
            background-color: rgba(51, 51, 51,0);
            -webkit-transform: rotateZ(65deg) translateY(-35px);
            transform: rotateZ(65deg) translateY(-35px);
          }
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
