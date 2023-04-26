import CardMinimal from "./CardMinimal/CardMinimal";
import CardTurn from "./CardTurn/CardTurn";
import CardMagic from "./CardMagic/CardMagic";
import CardBook from "./CardBook/CardBook";
import CardTriple from "./CardTriple/CardTriple";
import CardMoveOn from "./CardMoveOn/CardMoveOn";
import CardSkills from "./CardSkills/CardSkills";
import CardTarget from "./CardTarget/CardTarget";
import CardFlip from "./CardFlip/CardFlip";
import CardCorners from "./CardCorners/CardCorners";
import CardMusic from "./CardMusic/CardMusic";
import CardMargin from "./CardMargin/CardMargin";
import CardRadiactive from "./CardRadiactive/CardRadiactive";
import CardPill from "./CardPill/CardPill";
import CardLines from "./CardLines/CardLines";
import CardPhoto from "./CardPhoto/CardPhoto";
import CardBlurBalls from "./CardBlurBalls/CardBlurBalls";
import CardColors from "./CardColors/CardColors";
import CardContent from "./CardContent/CardContent";
import Card3D from "./Card3D/Card3D";

export const allCards = [
  {
    id: 1,
    component: <CardMinimal />,
    name: "Minimal",
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
         `,
  },
  {
    id: 2,
    component: <CardTurn />,
    name: "Turn",
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
          }`,
  },
  {
    id: 3,
    component: <CardMagic />,
    name: "Magic Card",
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
           `,
  },
  {
    id: 4,
    component: <CardBook />,
    name: "Book",
    html: ` <div class="book">
        <p>Hello</p>
        <div class="cover">
            <p>Hover Me</p>
        </div>
       </div>`,
    scss: `.book {
          position: relative;
          border-radius: 10px;
          width: 220px;
          height: 300px;
          background-color: whitesmoke;
          -webkit-box-shadow: 1px 1px 12px #000;
          box-shadow: 1px 1px 12px #000;
          -webkit-transform: preserve-3d;
          -ms-transform: preserve-3d;
          transform: preserve-3d;
          -webkit-perspective: 2000px;
          perspective: 2000px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          color: #000;
        }
        
        .cover {
          top: 0;
          position: absolute;
          background-color: lightgray;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          cursor: pointer;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
          -webkit-transform-origin: 0;
          -ms-transform-origin: 0;
          transform-origin: 0;
          -webkit-box-shadow: 1px 1px 12px #000;
          box-shadow: 1px 1px 12px #000;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        
        .book:hover .cover {
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
          -webkit-transform: rotatey(-80deg);
          -ms-transform: rotatey(-80deg);
          transform: rotatey(-80deg);
        }
        
        p {
          font-size: 20px;
          font-weight: bolder;
        }`,
  },
  {
    id: 5,
    component: <CardTriple />,
    name: "Triple",
    html: `<div class="card">
        <p><span>HOVER ME</span></p>
        <p><span>HOVER ME</span></p>
        <p><span>HOVER ME</span></p>
    </div>`,
    scss: `.card {
          width: 210px;
          height: 254px;
          border-radius: 4px;
          background: #212121;
          display: flex;
          gap: 5px;
          padding: .4em;
        }
        
        .card p {
          height: 100%;
          flex: 1;
          overflow: hidden;
          cursor: pointer;
          border-radius: 2px;
          transition: all .5s;
          background: #212121;
          border: 1px solid #ff5a91;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .card p:hover {
          flex: 4;
        }
        
        .card p span {
          min-width: 14em;
          padding: .5em;
          text-align: center;
          transform: rotate(-90deg);
          transition: all .5s;
          text-transform: uppercase;
          color: #ff568e;
          letter-spacing: .1em;
        }
        
        .card p:hover span {
          transform: rotate(0);
        }`,
  },
  {
    id: 6,
    component: <CardMoveOn />,
    name: "MoveOn",
    html: `<div class="card">
        <h2>CARD</h2>
    </div>`,
    scss: `.card {
          width: 190px;
          height: 254px;
          background: #07182E;
          position: relative;
          display: flex;
          place-content: center;
          place-items: center;
          overflow: hidden;
          border-radius: 20px;
        }
        
        .card h2 {
          z-index: 1;
          color: white;
          font-size: 2em;
        }
        
        .card::before {
          content: '';
          position: absolute;
          width: 100px;
          background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
          height: 130%;
          animation: rotBGimg 3s linear infinite;
          transition: all 0.2s linear;
        }
        
        @keyframes rotBGimg {
          from {
            transform: rotate(0deg);
          }
        
          to {
            transform: rotate(360deg);
          }
        }
        
        .card::after {
          content: '';
          position: absolute;
          background: #07182E;
          ;
          inset: 5px;
          border-radius: 15px;
        }  
        /* .card:hover:before {
          background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
          animation: rotBGimg 3.5s linear infinite;
        } */
        
        `,
  },
  {
    id: 7,
    component: <CardSkills />,
    name: "Skills",
    html: `<div class="card">
        <div class="header">My Skills</div>
        <div class="body">
          <div class="skill">
            <div class="skill-name">HTML</div>
            <div class="skill-level">
              <div class="skill-percent" style="width: 90%"></div>
            </div>
            <div class="skill-percent-number">90%</div>
          </div>
          <div class="skill">
            <div class="skill-name">CSS</div>
            <div class="skill-level">
              <div class="skill-percent" style="width: 80%"></div>
            </div>
            <div class="skill-percent-number">80%</div>
          </div>
          <div class="skill">
            <div class="skill-name">JavaScript</div>
            <div class="skill-level">
              <div class="skill-percent" style="width: 75%"></div>
            </div>
            <div class="skill-percent-number">75%</div>
          </div>
        </div>
      </div>
      `,
    scss: `.card {
          width: 300px;
          background-color: #fff;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }
        
        .header {
          background-color: #333;
          color: #fff;
          padding: 20px;
          text-align: center;
          font-size: 18px;
        }
        
        .body {
          padding: 20px;
        }
        
        .skill {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .skill-name {
          width: 120px;
          font-size: 16px;
        }
        
        .skill-level {
          width: 160px;
          height: 10px;
          background-color: #eee;
          border-radius: 10px;
          overflow: hidden;
          margin-left: 20px;
        }
        
        .skill-percent {
          background-color: #333;
          height: 100%;
        }
        
        .skill-percent-number {
          margin-left: 20px;
          font-size: 16px;
        }
        `,
  },
  {
    id: 8,
    component: <CardTarget />,
    name: "Target",
    html: `<div class="card">
        <label class="avatar"></label>
        <label class="info">
          <span class="info-1"></span>
          <span class="info-2"></span>
        </label>
        <div class="content-1"></div>
        <div class="content-2"></div>
      </div>`,
    scss: `.card {
          width: 190px;
          height: 190px;
          border-radius: 44px;
          background: lightgrey;
          background: linear-gradient(145deg, #ff6b6b, #d43636);
          box-shadow: 2px 3px 3px #ba2f2f,
                     2px 3px 3px #ff4949;
        }
        
        .avatar {
          width: 45px;
          height: 45px;
          display: inline-block;
          background-color: rgba(255,255,255,0.9);
          margin: 30px 15px 20px 25px;
          border-radius: 14px;
        }
        
        .info {
          display: inline-block;
          vertical-align: top;
          margin-top: 33px;
          width: 85px;
        }
        
        .info-1, .info-2 {
          display: inline-block;
          height: 20px;
          width: 100%;
          border-radius: 6px;
          background: rgba(255,255,255,0.9);
        }
        
        .info-2 {
          height: 11px;
          width: 50%;
          border-radius: 3px;
        }
        
        .content-1 {
          width: 80%;
          border-radius: 12px;
          background: rgba(255,255,255,0.9);
          height: 40px;
          margin: auto;
        }
        
        .content-2 {
          width: 60%;
          border-radius: 6px;
          background: rgba(255,255,255,0.9);
          height: 18px;
          margin: 10px 0 0 20px;
        }`,
  },
  {
    id: 9,
    component: <CardFlip />,
    name: "Flip",
    html: `<div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <p class="title">FLIP CARD</p>
                <p>Hover Me</p>
            </div>
            <div class="flip-card-back">
                <p class="title">BACK</p>
                <p>Leave Me</p>
            </div>
        </div>
    </div>`,
    scss: `.flip-card {
          background-color: transparent;
          width: 190px;
          height: 254px;
          perspective: 1000px;
          font-family: sans-serif;
        }
        
        .title {
          font-size: 1.5em;
          font-weight: 900;
          text-align: center;
          margin: 0;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border: 1px solid coral;
          border-radius: 1rem;
        }
        
        .flip-card-front {
          background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%,
             rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
          color: coral;
        }
        
        .flip-card-back {
          background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%,
             bisque 40%, rgb(255, 185, 160) 78%);
          color: white;
          transform: rotateY(180deg);
        }`,
  },
  {
    id: 10,
    component: <CardCorners />,
    name: "Corners",
    html: `<div class="card">HOVER</div>`,
    scss: `.card {
  position: relative;
  width: 220px;
  height: 320px;
  background: mediumturquoise;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
}

.card::before,
.card::after {
  position: absolute;
  content: "";
  width: 20%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  background-color: lightblue;
  transition: all 0.5s;
}

.card::before {
  top: 0;
  right: 0;
  border-radius: 0 15px 0 100%;
}

.card::after {
  bottom: 0;
  left: 0;
  border-radius: 0 100%  0 15px;
}

.card:hover::before,
.card:hover:after {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: all 0.5s;
}

.card:hover:after {
  content: "HELLO";
}`,
  },
  {
    id: 11,
    component: <CardMusic />,
    name: "Music",
    html: `<div className="voice-chat-card">
        <div className="voice-chat-card-header">
          <img className="avatarMusic" alt='' />
          <div className="usernameMusic">User name</div>
          <div className="statusMusic"></div>
        </div>
        <div className="voice-chat-card-body">
      
          <div className="audio-container">
            <audio controls="audio.mp3">
              <source type="audio/mp3" src="audio.mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>`,
    scss: `.voice-chat-card {
          width: 300px;
          margin: 20px auto;
          border: 1px solid #ccc;
          border-radius: 10px;
          box-shadow: 2px 2px 10px #ccc;
          padding: 10px;
          background-color: #e8e8e8;
        }
        
        .voice-chat-card-header {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        
        .avatarMusic {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 10px;
          color: black;
          background-color: #333;
        }
        
        .usernameMusic {
          margin: 0;
          font-size: 18px;
          color: black;
        }
        
        .statusMusic {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: green;
          margin-left: 10px;
        }
        
        .voice-chat-card-body {
          padding: 10px;
        }
        
        .status-text {
          font-size: 14px;
          margin-bottom: 10px;
        }
        
        .audio-container {
          display: flex;
          align-items: center;
        }
        
        audio {
          width: 100%;
        }
        `,
  },
  {
    id: 12,
    component: <CardMargin />,
    name: "Margin",
    html: `<div class="card">
        <div class="content"></div>
    </div>`,
    scss: `.card {
          width: 190px;
          height: 254px;
          border-radius: 10px;
          background: #ae3737;
          box-shadow: inset 27px 27px 54px #7a2727, inset -27px -27px 54px #e24848;
        }
        
        .content {
          width: 160px;
          height: 220px;
          position: relative;
          margin-top: 16px;
          margin-left: 15px;
          border: none;
          border-radius: 10px;
          background: #ae3737;
          background: linear-gradient(45deg, #9d3232, #ba3b3b);
          box-shadow: 27px -27px 54px #7a2727,
                     -27px 27px 54px #e24848;
        }
        
        content :hover {
          border: 1px solid #7a2727;
        }
        
        .card :hover {
          border: 1px solid #7a2727;
        }
        `,
  },
  {
    id: 13,
    component: <CardRadiactive />,
    name: "Radiactive",
    html: `<div class="card">
        <div class="card-info"><p>Hover</p></div>
      </div>`,
    scss: `.card {
          width: 200px;
          height: 270px;
          background: linear-gradient(45deg,#00cc0a 25%, #00cc0a 25%, #444 25%, #444 50%, #00cc0a 50%, #00cc0a 75%, #444 75%, #444 100%);
          animation: animate_6810 15s linear infinite;
          transition: .3s;
          background-size: 60px 60px;
          position: relative;
          overflow: visible;
          border-radius: 20px;
        }
        
        .card-info {
          position: absolute;
          width: 96%;
          height: 96%;
          left: 2%;
          top: 2%;
          background-color: rgb(24, 22, 22);
          border-radius: 20px;
          transition: .3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .card-info:hover {
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.822);
          backdrop-filter: blur(12px);
          left: 20px;
          top: 20px;
        }
        
        .card-info p {
          color: white;
          font-weight: bold;
          font-size: 30px;
        }
        
        @keyframes animate_6810 {
          0% {
            background-position: 0px;
          }
        
          100% {
            background-position: 1000px;
          }
        }`,
  },
  {
    id: 14,
    component: <CardPill />,
    name: "Pill",
    html: `<div class="card">
        </div>`,
    scss: `/*Rainbow card*/
        .card {
         --background: #f5f5f5;
         --green: #1FC11B;
         --yellow: #FFD913;
         --orange: #FF9C55;
         --red: #FF5555;
         --violet: #555BFF;
         width: 190px;
         height: 254px;
         display: flex;
         flex-direction: column;
         gap: 1em;
         background: var(--background);
         padding: 1rem;
         border: 3px solid var(--violet);
         box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--green),
                20px -20px 0 -3px var(--background), 20px -20px var(--yellow), 
                30px -30px 0 -3px var(--background), 30px -30px var(--orange), 
                40px -40px 0 -3px var(--background), 40px -40px var(--red);
         transition: box-shadow 1s, top 1s, left 1s;
        }
        
        
        /*Hover*/
        .card:hover {
         box-shadow: 0 0 0 -3px var(--background), 0 0 0 0 var(--green),
              0 0 0 -3px var(--background), 0 0 0 0  var(--yellow),
              0 0 0 -3px var(--background), 0 0 0 0  var(--orange),
              0 0 0 -3px  var(--background), 0 0 0 0  var(--red);
        }`,
  },
  {
    id: 15,
    component: <CardLines />,
    name: "Lines",
    html: `<div class="container">
        <div class="box">
          <div class="content">
            
          </div>
        </div>
      </div>`,
    scss: `.container {
          --background: linear-gradient(to left, #880505 0%, #f36b11 100%);
          width: 190px;
          height: 254px;
          padding: 4px;
          border-radius: 5px;
          overflow: visible;
          display: flex;
          align-items: center;
          background: var(--background);
          position: relative;
        }
        
        .container .box {
          position: relative;
          width: 190px;
          height: 244px;
          background: #1b1b1b;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          border-radius: 10px;
        }
        
        .container .box .content {
          position: relative;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          text-align: center;
          gap: 20px;
          padding: 0 20px;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .container .box .content .icon {
          width: 50px;
          height: 50px;
          -webkit-box-shadow: 0 0 0 4px #e6e6e6,
            0 0 0 6px rgb(212, 10, 10);
          box-shadow: 0 0 0 4px #e6e6e6,
            0 0 0 6px rgb(212, 10, 10);
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          font-size: 2.5em;
          -webkit-transition: 0.5s ease-in-out;
          transition: 0.5s ease-in-out;
        }
        
        .container .box::before {
          content: '';
          position: absolute;
          inset: -10px 50px;
          border-top: 4px solid rgb(99, 89, 247);
          z-index: -1;
          border-bottom: 4px solid rgb(65, 44, 250);
          z-index: -1;
          z-index: -1;
          -webkit-transform: skewY(15deg);
          -ms-transform: skewY(15deg);
          transform: skewY(15deg);
          -webkit-transition: 0.5s ease-in-out;
          transition: 0.5s ease-in-out;
        }
        
        .container .box:hover::before {
          -webkit-transform: skewY(0deg);
          -ms-transform: skewY(0deg);
          transform: skewY(0deg);
          inset: -10px 40px;
        }
        
        .container .box::after {
          content: '';
          position: absolute;
          inset: 60px -10px;
          border-left: 4px solid #880505;
          z-index: -1;
          border-right: 4px solid #aa551d;
          z-index: -1;
          -webkit-transform: skew(15deg);
          -ms-transform: skew(15deg);
          transform: skew(15deg);
          -webkit-transition: 0.5s ease-in-out;
          transition: 0.5s ease-in-out;
        }
        
        .container .box:hover::after {
          -webkit-transform: skew(0deg);
          -ms-transform: skew(0deg);
          transform: skew(0deg);
          inset: 40px -10px;
        }
        
        .container .box .content {
          border-radius: 50%;
        }
        `,
  },
  {
    id: 16,
    component: <CardPhoto />,
    name: "Photo",
    html: `<div class="card">Hover me</div>`,
    scss: `.card {
          width: 200px;
          height: 300px;
          background: #ffffff;
          transform: rotate(20deg) skew(-10deg, -5deg);
          transition: .4s linear;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 1.2rem;
          font-weight: 700;
          line-height: 200px;
        }
        
        .card:hover {
          box-shadow: rgba(240, 128, 128, 0.6) 5px 3px,
          rgba(240, 128, 128, 0.5) 10px 6px,
          rgba(240, 128, 128, 0.4) 15px 9px;
          background: lightcoral;
          color: #fff;
          font-size: 1.5rem;
        }`,
  },
  {
    id: 17,
    component: <CardBlurBalls />,
    name: "BlurBalls",
    html: `<div class="container">
        <div class="card">
          hover
        </div>
      </div>`,
    scss: `.container {
          width: 190px;
          height: 254px;
          background: transparent;
          position: relative;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.438);
          overflow: hidden;
          border-radius: 10px;
        }
        
        .card {
          cursor: default;
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #212121;
          background-color: rgba(255, 255, 255, 0.074);
          border: 1px solid rgba(255, 255, 255, 0.222);
          -webkit-backdrop-filter: blur(20px);
          backdrop-filter: blur(20px);
          border-radius: 10px;
          transition: all ease .3s;
        }
        
        .container::after,
        .container::before {
          width: 100px;
          height: 100px;
          content: '';
          position: absolute;
          border-radius: 50%;
          transition: .5s linear;
        }
        
        .container::after {
          top: -20px;
          left: -20px;
          background-color: rgba(125, 214, 66, 0.603);
          animation: animFirst 5s linear infinite;
        }
        
        .container::before {
          background-color: rgb(226, 223, 54);
          top: 70%;
          left: 70%;
          animation: animSecond 5s linear infinite;
          animation-delay: 3s;
        }
        
        .container:hover {
          box-shadow: 0px 0px 10px rgba(0, 77, 32, 0.432)
        }
        
        .container:hover::after {
          left: 80px;
          transform: scale(1.2);
        }
        
        .container:hover::before {
          left: -10px;
          transform: scale(1.2);
        }`,
  },
  {
    id: 18,
    component: <CardColors />,
    name: "Colors",
    html: `
        <div class="card"></div>`,
    scss: `.card {
          width: 190px;
          height: 254px;
          background: linear-gradient(135deg, #ff85ec 0%, #84ff98 100%);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
         }`,
  },
  {
    id: 19,
    component: <CardContent />,
    name: "Content",
    html: `<div class="card">
        <div></div>
        </div>`,
    scss: `.card {
          width: 190px;
          height: 254px;
          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.212);
          background: #fff;
          display: flex;
          border-radius: 20px;
          justify-content: center;
          position: relative;
          transition: all .4s;
         }
         
         .card::before {
          content: '---content---';
          letter-spacing: 0.2em;
          position: absolute;
          bottom: 8px;
          left: 20px;
          color: rgb(51, 51, 51);
          font-size: 0.8em;
          font-weight: 700;
         }
         
         .card div {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.212);
          cursor: pointer;
          z-index: 10;
          transition: all .4s;
          background-color: #fff;
         }
         
         .card:hover div {
          transform: translateY(-30px);
         }`,
  },
  {
    id: 20,
    component: <Card3D />,
    name: "3D",
    html: `<div class="flip">
        <div class="content">
            <div class="front">
                <h2>Front</h2>
                <p>Front Description</p>
            </div>
            <div class="back">
                <h2>Back</h2>
                <p>Back Description</p>
            </div>
        </div>
    </div>`,
    scss: `.flip {
          box-shadow: 0 0 10px rgba(128, 128, 128, 0.5);
          padding: 1em;
          width: 190px;
          height: 254px;
          transform-style: preserve-3d;
          transition: 3s ease;
        }
        
        .flip:hover {
          transform: rotateY(180deg);
        }
        /* Content */
        .flip .content {
          transform-style: preserve-3d;
        }
        
        .flip .back, .flip .front {
          transform-style: preserve-3d;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
        }
        
        .flip .back {
          transform: rotateY(180deg);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .flip h2,
        .flip p {
          transform: translateZ(90px);
          text-shadow: 0 0 3px black;
          text-align: center;
        }
        
        .flip h2 {
          font-size: 3em;
          color: #fff;
          letter-spacing: 1px;
        }
        
        .flip p {
          font-size: 1em;
          color: #eee;
          line-height: 1.6em;
        }
        
        .flip::before,
        .flip::after {
          content: "";
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          position: absolute;
          background-image: linear-gradient(purple, red);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          transform: rotateY(180deg)translateZ(1px);
        }
        
        .flip::before {
          transform: none;
          background-image: linear-gradient(violet, orange);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
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
