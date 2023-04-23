import CheckboxStar from './CheckboxStar/CheckboxStar';
import CheckboxAnimated from './CheckboxAnimated/CheckboxAnimated';
import CheckboxWhite from './CheckboxWhite/CheckboxWhite';

export const allCheckboxes = [
    {
    id: 1, 
    component: <CheckboxStar/>, 
    name: 'Star', 
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
      `
}, 
{
    id: 2, 
    component: <CheckboxWhite/>, 
    name: 'White', 
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
      }`
}, 
{
    id: 3, 
    component: <CheckboxAnimated/>, 
    name: 'Animated', 
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
        stroke-linecap: round;
        stroke-linejoin: round;
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
    `
}, 
]
