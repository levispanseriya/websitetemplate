import React from "react";

export default function GlitchText({ text }) {
  return (
    <>
    <div>
      <div>
        <p class="glitch">
          <span aria-hidden="true">{text}</span>
          {text}
          <span aria-hidden="true">{text}</span>
        </p>
        
      </div>
    </div>
      <p className="para">Passionate about changing the world with Blockchain technology.</p>
    </>
  );
}
