import LoaderAnimated from './LoaderAnimated/LoaderAnimated';
import LoaderKinetic from './LoaderKinetic/LoaderKinetic';
import LoaderNeon from './LoaderNeon/LoaderNeon';
import LoaderPuzzle from './LoaderPuzzle/LoaderPuzzle';

export const allLoaders = [
    {
        id: 1,
        component: <LoaderAnimated />, 
        name: 'Animated', 
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
        `
    }, 
        {
        id: 2, 
        component: <LoaderKinetic />, 
        name: 'Kinetic', 
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
          `
    }, 
        {
        id: 3, 
        component: <LoaderNeon />, 
        name: 'Neon', 
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
        }`
    }, 
        {
        id: 4, 
        component: <LoaderPuzzle />, 
        name: 'Puzzle', 
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
          }`
    }
]