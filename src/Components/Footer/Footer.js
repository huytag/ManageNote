import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="py-5 bg-black mt-5" style={{background:"black"}}>
        <div className="container px-5">
          <p className="m-0 text-center text-white small">
            Copyright © Thắng cháy 2021
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
