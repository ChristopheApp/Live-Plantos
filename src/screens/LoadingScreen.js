import React from 'react'

function LoadingScreen() {
  return (
    <div className="LoadingScreen">
      <a
        className="LP-link"
        href="http://discord.gg/losplantos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src='images/Los_Plantos_LoadingScreen.png' className="LP-logo" alt="emote LP" />
      </a>
      <p>
        Il n'y a pas de stream en cours
      </p>
    </div>
  );
}
export default LoadingScreen;