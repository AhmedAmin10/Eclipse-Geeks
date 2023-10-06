import React from "react";

const Footer = () => {
  return (
    <footer className=" justify-center w-full p-4 text-white">
      <div className="text-center">
        <p>
          Copyright © 2023 -
          <a
            className="font-semibold text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-green-500"
            href="mailto:m.sohanemon@gmail.com"
          >
            {" "}
            Eclipse Geeks{" "}
          </a>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
