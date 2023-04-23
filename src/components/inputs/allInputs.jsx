import InputAnimated from "./inputAnimated/InputAnimated";
import InputTransition from "./inputTransition/InputTransition";
import InputDiagonally from "./inputDiagonally/InputDiagonally";

export const allInputs = [
    {
        id: 1, 
        component: <InputAnimated/>, 
        name: 'Animated', 
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
          }`
    }, 
    {
        id: 2, 
        component: <InputDiagonally/>, 
        name: 'Diagonally', 
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
          }`
    }, 
    {
        id: 3, 
        component: <InputTransition/>, 
        name: 'Transition', 
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
           } */`
    }, 
    // {
    //     id: , 
    //     component: , 
    //     name: '', 
    //     html: ``, 
    //     scss: ``
    // }, 
]