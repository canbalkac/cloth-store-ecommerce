import React from "react";

const Logo = () => {
  return (
    <div className="w-16 h-16">
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <polygon points="50,0 0,50 50,100" fill="#d1d5db" />
        <polygon points="50,0 100,50 50,100" fill="#111" />
      </svg>
    </div>
  );
};

export default Logo;
