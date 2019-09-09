import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id='sticky-footer' class='py-2 bg-light text-black-50'>
        <div class='container text-center'>
          <div class='py-4 flex-center'>
            <a class='fb-ic'>
              <i class='fa fa-facebook-f fa-lg black-text mr-md-5 mr-3 fa-2x'></i>
            </a>

            <a class='tw-ic'>
              <i class='fa fa-twitter fa-lg black-text mr-md-5 mr-3 fa-2x'> </i>
            </a>

            <a class='ins-ic'>
              <i class='fa fa-instagram fa-lg black-text mr-md-5 mr-3 fa-2x'></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
