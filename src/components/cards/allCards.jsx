import CardMinimal from "./cardMinimal/CardMinimal";
import CardTurn from "./cardTurn/CardTurn";
import CardMagic from "./cardMagic/CardMagic";

export const allCards = [
    {
        id: 1, 
        component: <CardMinimal/>, 
        name: 'Minimal', 
        html: `<div class="card">
        <div class="tools">
          <div class="circle">
            <span class="red box"></span>
          </div>
          <div class="circle">
            <span class="yellow box"></span>
          </div>
          <div class="circle">
            <span class="green box"></span>
          </div>
        </div>
        <div class="card__content">
        </div>
      </div>`, 
        scss: `.card {
          width: 190px;
          height: 254px;
          margin: 0 auto;
          background-color: #F8FBFE;
          border-radius: 8px;
          z-index: 1;
         }
         
         .tools {
          display: flex;
          align-items: center;
          padding: 9px;
         }
         
         .circle {
          padding: 0 4px;
         }
         
         .box {
          display: inline-block;
          align-items: center;
          width: 10px;
          height: 10px;
          padding: 1px;
          border-radius: 50%;
         }
         
         .red {
          background-color: #ff605c;
         }
         
         .yellow {
          background-color: #ffbd44;
         }
         
         .green {
          background-color: #00ca4e;
         }
         `
    }, 
    {
        id: 2, 
        component: <CardTurn/>, 
        name: 'Turn', 
        html: `<div id="card" class="card">
        <div class="content">
          <span>HOVER ME</span>
        </div>
      </div>`, 
        scss: `.card {
            width: 190px;
            height: 254px;
            background: #171717;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 0px 3px 1px #00000088;
            cursor: pointer;
          }
          
          .card .content {
            border-radius: 5px;
            background: #171717;
            width: 186px;
            height: 250px;
            z-index: 1;
            padding: 20px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .content::before {
            opacity: 0;
            transition: opacity 300ms;
            content: ' ';
            display: block;
            background: white;
            width: 50px;
            height: 50px;
            position: absolute;
            filter: blur(50px);
          }
          
          .card:hover .content::before {
            opacity: 1;
          }
          
          .card::before {
            opacity: 0;
            content: ' ';
            position: absolute;
            display: block;
            width: 120px;
            height: 360px;
            background: linear-gradient(90deg, transparent, #ff2288, #387EF0, transparent);
            transition: opacity 300ms;
            animation: rotation_9018 3000ms infinite linear;
            animation-play-state: paused;
          }
          
          .card:hover::before {
            opacity: 1;
            animation-play-state: running;
          }
          
          .card::after {
            position: absolute;
            content: ' ';
            display: block;
            width: 190px;
            height: 254px;
            background: #17171733;
            backdrop-filter: blur(50px);
          }
          
          @keyframes rotation_9018 {
            0% {
              transform: rotate(0deg);
            }
          
            100% {
              transform: rotate(360deg);
            }
          }`
    }, 
    {
        id:3, 
        component: <CardMagic/>, 
        name: 'Magic Card', 
        html: `<div class="card">
        <div class="card-info">
          <p class="title">Magic Card</p>
        </div>
      </div>`, 
        scss: `.card {
            --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
            width: 190px;
            height: 254px;
            padding: 5px;
            border-radius: 1rem;
            overflow: visible;
            background: #f7ba2b;
            background: var(--background);
            position: relative;
            z-index: 1;
           }
           
           .card::after {
            position: absolute;
            content: "";
            top: 30px;
            left: 0;
            right: 0;
            z-index: -1;
            height: 100%;
            width: 100%;
            transform: scale(0.8);
            filter: blur(25px);
            background: #f7ba2b;
            background: var(--background);
            transition: opacity .5s;
           }
           
           .card-info {
            --color: #181818;
            background: var(--color);
            color: var(--color);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            overflow: visible;
            border-radius: .7rem;
           }
           
           .card .title {
            font-weight: bold;
            letter-spacing: .1em;
           }
           
           /*Hover*/
           .card:hover::after {
            opacity: 0;
           }
           
           .card:hover .card-info {
            color: #f7ba2b;
            transition: color 1s;
           }
           `
    }, 
]
