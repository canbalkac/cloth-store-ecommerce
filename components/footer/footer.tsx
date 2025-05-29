import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 text-gray-500 font-light text-sm px-8 pt-16 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <p className="uppercase tracking-wide text-xs">Info</p>
            <ul className="mt-2 space-y-1">
              <li>PRICING /</li>
              <li>ABOUT /</li>
              <li>CONTACTS</li>
            </ul>
          </div>
        </div>

        {/* Center Column */}
        <div className="flex flex-col items-center text-black">
          <p className="uppercase tracking-wide text-xs text-gray-400 mb-1">
            Technologies
          </p>
          <div className="text-center">
            <div className="opacity-10 text-4xl font-bold -mb-3">VR</div>
            <div className="text-6xl font-black">XIV</div>
            <div className="text-6xl font-black">QR</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-end">
          <p className="text-gray-400">Near-field communication /</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 flex justify-between text-xs text-gray-400">
        <p>© 2025 — copyright</p>
        <p>CAN BALKAÇ</p>
      </div>
    </footer>
  );
};

export default Footer;
