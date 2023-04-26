import React from 'react';
import './CardMusic.scss';

const CardMusic = () => {
  return (
<div className="voice-chat-card">
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
</div>

  )
}

export default CardMusic