import RadioBasic from "./RadioBasic/RadioBasic";
import RadioTricolor from './RadioTricolor/RadioTricolor';
import RadioAnimated from './RadioAnimated/RadioAnimated';

export const allRadios = [
        {
        id: 701, 
        component: <RadioBasic/>, 
        name: 'Basic', 
        html: `<div class="customCheckBoxHolder">

        <input class="customCheckBoxInput" id="cCB1" type="checkbox">
        <label class="customCheckBoxWrapper" for="cCB1">
            <div class="customCheckBox">
                <div class="inner">Option</div>
            </div>
        </label>
    
        <input class="customCheckBoxInput" id="cCB2" type="checkbox">
        <label class="customCheckBoxWrapper" for="cCB2">
            <div class="customCheckBox">
                <div class="inner">Option</div>
            </div>
        </label>
    
        <input class="customCheckBoxInput" id="cCB3" type="checkbox">
        <label class="customCheckBoxWrapper" for="cCB3">
            <div class="customCheckBox">
                <div class="inner">Option</div>
            </div>
        </label>
    
    </div>`, 
        scss: `.customCheckBoxHolder {
            margin: 5px;
            display: flex;
          }
          
          .customCheckBox {
            width: fit-content;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            user-select: none;
            padding: 2px 8px;
            background-color: rgba(0, 0, 0, 0.16);
            border-radius: 0px;
            color: rgba(255, 255, 255, 0.7);
            transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
            transition-duration: 300ms;
            transition-property: color, background-color, box-shadow;
            display: flex;
            height: 32px;
            align-items: center;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px 1px 1px 0px;
            outline: none;
            justify-content: center;
            min-width: 55px;
          }
          
          .customCheckBox:hover {
            background-color: #2c2c2c;
            color: white;
            box-shadow: rgba(0, 0, 0, 0.23) 0px -4px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px -1px 1px 0px, rgba(0, 0, 0, 0.17) 0px 2px 4px 1px;
          }
          
          .customCheckBox .inner {
            font-size: 18px;
            font-weight: 900;
            pointer-events: none;
            transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
            transition-duration: 300ms;
            transition-property: transform;
            transform: translateY(0px);
          }
          
          .customCheckBox:hover .inner {
            transform: translateY(-2px);
          }
          
          .customCheckBoxWrapper:first-of-type .customCheckBox {
            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
            border-right: 0px;
          }
          
          .customCheckBoxWrapper:last-of-type .customCheckBox {
            border-bottom-right-radius: 5px;
            border-top-right-radius: 5px;
            border-left: 0px;
          }
          
          .customCheckBoxInput {
            display: none;
          }
          
          .customCheckBoxInput:checked + .customCheckBoxWrapper .customCheckBox {
            background-color: #2d6737;
            color: white;
            box-shadow: rgba(0, 0, 0, 0.23) 0px -4px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px -1px 1px 0px, rgba(0, 0, 0, 0.17) 0px 2px 4px 1px;
          }
          
          .customCheckBoxInput:checked + .customCheckBoxWrapper .customCheckBox .inner {
            transform: translateY(-2px);
          }
          
          .customCheckBoxInput:checked + .customCheckBoxWrapper .customCheckBox:hover {
            background-color: #34723f;
            box-shadow: rgba(0, 0, 0, 0.26) 0px -4px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px -1px 1px 0px, rgba(0, 0, 0, 0.15) 0px 3px 6px 2px;
          }
          
          .customCheckBoxWrapper .customCheckBox:hover .inner {
            transform: translateY(-2px);
          }`
    }, 
    {
        id: 702, 
        component: <RadioTricolor/>, 
        name: 'Tricolor', 
        html: `<div class="radio-input">
        <input checked="" value="color-1" name="color" id="color-1" type="radio">
        <label for="color-1">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path strokeLinejoin="round" strokeLinecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
          </span>
        </label>
      
        <input value="color-2" name="color" id="color-2" type="radio">
        <label for="color-2">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path strokeLinejoin="round" strokeLinecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
          </span>
        </label>
      
        <input value="color-3" name="color" id="color-3" type="radio">
        <label for="color-3">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path strokeLinejoin="round" strokeLinecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
          </span>
        </label>
    
    </div>`, 
        scss: `.radio-input {
            background-color: #fff;
            padding: 20px;
            border-radius: 20px;
            display: flex;
          }
          
          .radio-input input[type=radio] {
            display: none;
          }
          
          .radio-input input[type=radio] + label {
            color: #333;
            font-family: Arial, sans-serif;
            font-size: 14px;
          }
          
          .radio-input input[type=radio] + label span {
            display: inline-block;
            width: 40px;
            height: 40px;
            margin: -1px 4px 0 0;
            vertical-align: middle;
            cursor: pointer;
            border-radius: 50%;
            border: 2px solid #FFFFFF;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
            background-repeat: no-repeat;
            background-position: center;
            text-align: center;
            line-height: 44px;
          }
          
          .radio-input input[type=radio] + label span svg {
            opacity: 0;
            transition: all 0.3s ease;
          }
          
          .radio-input input[type=radio]#color-1 + label span {
            background-color: #2ecc71;
          }
          
          .radio-input input[type=radio]#color-2 + label span {
            background-color: #3498db;
          }
          
          .radio-input input[type=radio]#color-3 + label span {
            background-color: #f1c40f;
          }
          
          .radio-input input[type=radio]:checked + label span svg {
            opacity: 1;
          }
          
          .radio-input:has(input[type=radio]#color-1:checked) {
            background-color: #2ecc71;
          }
          
          .radio-input:has(input[type=radio]#color-2:checked) {
            background-color: #3498db;
          }
          
          .radio-input:has(input[type=radio]#color-3:checked) {
            background-color: #f1c40f;
          }
          `
    }, 
    {
        id: 703, 
        component: <RadioAnimated/>, 
        name: 'Animated', 
        html: `<div class="rating">
        <label for="star-1">
          <input type="radio" id="star-1" name="star-radio" value="star-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
        </label>
        <label for="star-2">
          <input type="radio" id="star-2" name="star-radio" value="star-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
        </label>
        <label for="star-3">
          <input type="radio" id="star-3" name="star-radio" value="star-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
        </label>
        <label for="star-4">
          <input type="radio" id="star-4" name="star-radio" value="star-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
        </label>
        <label for="star-5">
          <input type="radio" id="star-5" name="star-radio" value="star-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
        </label>
      </div>>`, 
        scss: `.rating {
          display: flex;
          flex-direction: row-reverse;
          gap: 0.3rem;
          --stroke: #666;
          --fill: #ffc73a;
        }
        
        .rating input {
          appearance: unset;
        }
        
        .rating label {
          cursor: pointer;
        }
        
        .rating svg {
          width: 3rem;
          height: 3rem;
          overflow: visible;
          fill: transparent;
          stroke: var(--stroke);
          strokeLinejoin: bevel;
          stroke-dasharray: 12;
          animation: idle 4s linear infinite;
          transition: stroke 0.2s, fill 0.5s;
        }
        
        @keyframes idle {
          from {
            stroke-dashoffset: 24;
          }
        }
        
        .rating label:hover svg {
          stroke: var(--fill);
        }
        
        .rating input:checked + svg,
        .rating label:has(input:checked) ~ label svg {
          transition: 0s;
          /* Hopefully firefox gets :has support soon w/o feature flag */
          animation: idle 4s linear infinite, yippee 0.75s backwards;
          fill: var(--fill);
          stroke: var(--fill);
          stroke-opacity: 0;
          stroke-dasharray: 0;
          strokeLinejoin: miter;
          stroke-width: 8px;
        }
        
        @keyframes yippee {
          0% {
            transform: scale(1);
            fill: var(--fill);
            fill-opacity: 0;
            stroke-opacity: 1;
            stroke: var(--stroke);
            stroke-dasharray: 10;
            stroke-width: 1px;
            strokeLinejoin: bevel;
          }
        
          30% {
            transform: scale(0);
            fill: var(--fill);
            fill-opacity: 0;
            stroke-opacity: 1;
            stroke: var(--stroke);
            stroke-dasharray: 10;
            stroke-width: 1px;
            strokeLinejoin: bevel;
          }
        
          30.1% {
            stroke: var(--fill);
            stroke-dasharray: 0;
            strokeLinejoin: miter;
            stroke-width: 8px;
          }
        
          60% {
            transform: scale(1.2);
            fill: var(--fill);
          }
        }
        `
    }, 
]
