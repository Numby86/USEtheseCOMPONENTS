import React from 'react';
import './CardSkills.scss';

const CardSkills = () => {
  return (
<div className="cardSkill">
  <div className="headerSkill">My Skills</div>
  <div className="bodySkill">
    <div className="skill">
      <div className="skill-name">HTML</div>
      <div className="skill-level">
        <div className="skill-percent" style={{width: '90%'}}></div>
      </div>
      <div className="skill-percent-number">90%</div>
    </div>
    <div className="skill">
      <div className="skill-name">CSS</div>
      <div className="skill-level">
        <div className="skill-percent" style={{width: '80%'}}></div>
      </div>
      <div className="skill-percent-number">80%</div>
    </div>
    <div className="skill">
      <div className="skill-name">JavaScript</div>
      <div className="skill-level">
        <div className="skill-percent" style={{width: '75%'}}></div>
      </div>
      <div className="skill-percent-number">75%</div>
    </div>
  </div>
</div>

  )
}

export default CardSkills;